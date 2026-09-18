import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
import { CONTACT_ENDPOINT, CONTACT_PROTOCOL, buildContactPayload, contactWhatsAppMessage, normalizePhone, submitContact, validateContact } from '../src/utils/contact.js';

const id = '12345678-1234-4234-8234-123456789abc';
const data = buildContactPayload({ nombre: 'Prueba local', telefono: '5512345678' }, 'agenda');
const opaque = () => ({ type: 'opaque', ok: false, status: 0, json: () => { throw new Error('No debe leer JSON'); } });

test('teléfono nacional y +52 se normalizan; un número extranjero no se acepta', () => {
  assert.equal(normalizePhone('+52 (55) 1234-5678'), '5512345678');
  assert.equal(validateContact(data), null);
  assert.ok(validateContact({ ...data, telefono: normalizePhone('+1 212 555 1234') }));
});

test('valida correo opcional, longitudes y solución permitida', () => {
  for (const override of [{ comentario: 'x'.repeat(1501) }, { correo: 'incorrecto' }, { nombre: 'x'.repeat(121) }, { solucion: 'toString' }, { cupon: 'x'.repeat(81) }]) {
    assert.ok(validateContact({ ...data, ...override }));
  }
});

test('POST directo al endpoint nuevo, sin GET ni confirmación de guardado', async () => {
  assert.equal(CONTACT_ENDPOINT, 'https://script.google.com/macros/s/AKfycbxKrjhQK54JxoUZfMsudtnH1dp_Y3XXQ5_AuqgMgw_-E2X6TCuymHb2WxLXCnN8KZUG/exec');
  for (const payload of [data, buildContactPayload({ nombre: 'Local', telefono: '5512345678', horarioPreferido: 'manana' }, 'general'), buildContactPayload(data, 'android', { comment: 'Proyecto' })]) {
    const calls = [];
    const result = await submitContact(payload, id, { fetchImpl: async (url, options) => {
      calls.push(options);
      assert.equal(url, CONTACT_ENDPOINT);
      assert.equal(options.method, 'POST');
      assert.equal(options.mode, 'no-cors');
      assert.ok(options.body instanceof URLSearchParams);
      for (const [key, value] of Object.entries(payload)) {
        assert.equal(options.body.get(key), Array.isArray(value) ? JSON.stringify(value) : value);
      }
      assert.equal(options.body.get('requestId'), id);
      assert.equal(options.body.get('protocol'), CONTACT_PROTOCOL);
      return opaque();
    } });
    assert.equal(calls.length, 1);
    assert.deepEqual(result, { requestId: id, confirmation: 'unavailable' });
    assert.equal(result.saved, undefined);
  }
});

test('error de red no se convierte en éxito ni provoca reintento automático', async () => {
  let calls = 0;
  await assert.rejects(submitContact(data, id, { fetchImpl: async () => { calls++; throw new Error('offline'); } }));
  assert.equal(calls, 1);
});

test('el tiempo límite aborta la espera', async () => {
  await assert.rejects(submitContact(data, id, { timeoutMs: 5, fetchImpl: async (_url, { signal }) => new Promise((_resolve, reject) => {
    signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true });
  }) }), /aborted/);
});

const script = readFileSync(new URL('../public/script.gs', import.meta.url), 'utf8');
function server({ failStorage = false, failMail = false, failClientMail = false, failStatus = false, busy = false, failFlush = false, initialRows = [] } = {}) {
  const rows = initialRows.map(row => [...row]);
  const emails = [];
  const events = [];
  const errors = [];
  let capacity = 11;
  let mailCount = 0;
  let unlocks = 0;
  const sheet = {
    appendRow: (row) => { if (failStorage) throw new Error('storage'); rows.push([...row]); events.push('append'); },
    getLastRow: () => rows.length,
    getLastColumn: () => Math.max(0, ...rows.map(row => row.length)),
    getMaxColumns: () => capacity,
    insertColumnsAfter: (_after, count) => { capacity += count; },
    getRange: (row, column, count = 1, width = 1) => ({
      getValues: () => rows.slice(row - 1, row - 1 + count).map(r => Array.from({ length: width }, (_, i) => r[column - 1 + i] ?? '')),
      setValue: (value) => { if (failStatus) throw new Error('status'); rows[row - 1][column - 1] = value; },
      setValues: (values) => {
        if (failStorage) throw new Error('storage');
        values.forEach((valuesRow, index) => {
          rows[row - 1 + index] ||= [];
          valuesRow.forEach((value, offset) => { rows[row - 1 + index][column - 1 + offset] = value; });
        });
      },
    }),
  };
  const context = vm.createContext({
    console: { error: (...args) => errors.push(args), log: () => {} },
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: (value) => ({ setMimeType: () => JSON.parse(value) }) },
    LockService: { getScriptLock: () => ({ tryLock: () => !busy, releaseLock: () => { unlocks++; } }) },
    SpreadsheetApp: {
      openById: (sheetId) => {
        assert.equal(sheetId, '1OahUh2ThlOoyLKatYeHVHT7YBeMs-7GUE1M71w8Les8');
        return {
          getSheetByName: (name) => { assert.equal(name, 'Contactos'); return rows.length ? sheet : null; },
          insertSheet: (name) => { assert.equal(name, 'Contactos'); return sheet; },
        };
      },
      flush: () => { events.push('flush'); if (failFlush) throw new Error('flush'); },
    },
    Utilities: { DigestAlgorithm: { SHA_256: 'sha256' }, computeDigest: (_algorithm, input) => createHash('sha256').update(input).digest(), base64EncodeWebSafe: (input) => input.toString('base64url') },
    MailApp: { sendEmail: (...args) => { events.push('mail'); emails.push(args); mailCount++; if ((args[0] === 'enriquegv078@gmail.com' && failMail) || (args[0] !== 'enriquegv078@gmail.com' && failClientMail)) throw new Error('mail'); } },
  });
  vm.runInContext(script, context);
  return { post: (overrides = {}) => {
    const params = { ...data, requestId: id, protocol: CONTACT_PROTOCOL, ...overrides };
    for (const key of ['funcionesIds', 'funcionesSeleccionadas']) if (Array.isArray(params[key])) params[key] = JSON.stringify(params[key]);
    return context.doPost({ parameter: params });
  }, health: () => context.doGet(), rows, emails, events, errors, get mailCount() { return mailCount; }, get unlocks() { return unlocks; } };
}

test('la comprobación de versión no escribe ni envía correos', () => {
  const s = server();
  assert.equal(s.health().protocol, CONTACT_PROTOCOL);
  assert.equal(s.rows.length, 0);
  assert.equal(s.mailCount, 0);
});

test('el servidor valida datos antes de escribir', () => {
  const s = server();
  for (const invalid of [{ requestId: '' }, { protocol: 'old' }, { telefono: '123' }, { comentario: 'x'.repeat(1501) }, { solucion: 'inventada' }, { correo: 'mal' }]) {
    assert.equal(s.post(invalid).saved, false);
  }
  assert.equal(s.rows.length, 0);
  assert.equal(s.mailCount, 0);
});

test('reintentar la misma solicitud devuelve el registro sin duplicar fila ni correo', () => {
  const s = server();
  assert.equal(s.post().saved, true);
  const retry = s.post();
  assert.equal(retry.saved, true);
  assert.equal(retry.duplicate, true);
  assert.equal(s.rows.length, 2); // cabecera y consulta
  assert.equal(s.mailCount, 1);
  assert.equal(s.unlocks, 2);
});

test('una referencia no se puede reutilizar con datos distintos', () => {
  const s = server();
  s.post();
  assert.equal(s.post({ comentario: 'Otra consulta' }).code, 'id_conflict');
  assert.equal(s.rows.length, 2);
});

test('error de correo no anula el registro y queda registrado para revisión', () => {
  const s = server({ failMail: true });
  const result = s.post();
  assert.equal(result.saved, true);
  assert.equal(result.notification, 'failed');
  assert.equal(s.rows[1][9], 'failed');
  assert.equal(s.post().duplicate, true);
  assert.equal(s.mailCount, 1);
});

test('fallo de guardado no confirma ni envía correo', () => {
  const s = server({ failStorage: true });
  assert.equal(s.post().saved, false);
  assert.equal(s.mailCount, 0);
  assert.equal(s.unlocks, 1);
});

test('bloqueo ocupado no escribe ni confirma', () => {
  const s = server({ busy: true });
  assert.equal(s.post().code, 'busy');
  assert.equal(s.rows.length, 0);
  assert.equal(s.unlocks, 0);
});

test('el texto con fórmula se guarda como literal', () => {
  const s = server();
  assert.equal(s.post({ nombre: '=IMPORTXML("example")', comentario: '+SUM(1,2)' }).saved, true);
  assert.ok(s.rows[1][1].startsWith("'="));
  assert.ok(s.rows[1][15].startsWith("'+"));
});

test('los ocho productos aceptan nombre y teléfono sin extras, negocio ni correo', () => {
  for (const solution of ['tarjeta', 'telegram', 'agenda', 'menu_whatsapp', 'ecommerce', 'web_corporativa', 'web_android', 'android']) {
    const payload = buildContactPayload({ nombre: 'Local', telefono: '+52 55 1234 5678' }, solution);
    assert.equal(validateContact(payload), null);
    assert.equal(server().post(payload).saved, true);
  }
});

test('orientación requiere horario válido; otro horario necesita referencia', () => {
  const fields = { nombre: 'Local', telefono: '5512345678' };
  for (const hour of ['manana', 'tarde', 'sin_preferencia', 'otro']) {
    const payload = buildContactPayload({ ...fields, horarioPreferido: hour, horarioOtro: 'Después de las 6, CDMX' }, 'general');
    assert.equal(validateContact(payload), null);
    const s = server();
    assert.equal(s.post(payload).saved, true);
    assert.equal(s.rows[1][11], 'orientacion');
    assert.match(s.emails[0][2], /llamada aún no está confirmada/);
    assert.doesNotMatch(s.emails[0][2], /Correo:|Negocio:|Comentario:/);
  }
  for (const hour of ['', 'inventado', 'otro']) {
    const payload = buildContactPayload({ ...fields, horarioPreferido: hour }, 'general');
    assert.ok(validateContact(payload));
    assert.equal(server().post(payload).saved, false);
  }
});

test('extras opcionales: comentario libre, sí sin catálogo y selección completa', () => {
  for (const config of [{ comment: 'Prefiero explicarlo' }, { answer: 'si' }, { answer: 'no' }, { features: [{ id: 'advanced_search', nombre: 'Búsqueda y filtros avanzados' }] }]) {
    const payload = buildContactPayload(data, 'ecommerce', config);
    assert.equal(validateContact(payload), null);
    assert.equal(server().post(payload).saved, true);
  }
});

test('serializa arrays como JSON y no pierde selecciones por el resumen de 2000 caracteres', async () => {
  const { getAdditionalFeatures } = await import('../src/data/projectFeatures.js');
  const payload = buildContactPayload(data, 'android', { features: getAdditionalFeatures('android'), comment: 'x'.repeat(1500) });
  assert.equal(validateContact(payload), null);
  assert.ok(payload.necesidad.length < 2000);
  await submitContact(payload, id, { fetchImpl: async (_url, options) => {
    assert.equal(JSON.parse(options.body.get('funcionesIds')).length, 90);
    return opaque();
  } });
  const s = server();
  assert.equal(s.post(payload).saved, true);
  assert.equal(JSON.parse(s.rows[1][13]).length, 90);
});

test('rechaza arrays malformados, IDs duplicados, longitudes y estados incompatibles', () => {
  const invalids = [
    { funcionesIds: '{' }, { funcionesIds: '{}' },
    { funcionesIds: ['same', 'same'], funcionesSeleccionadas: ['A', 'B'], necesitaAdicionales: 'si' },
    { funcionesIds: ['id'], funcionesSeleccionadas: [] },
    { funcionesIds: ['id'], funcionesSeleccionadas: ['x'.repeat(161)], necesitaAdicionales: 'si' },
    { tipoSolicitud: 'orientacion' }, { horarioPreferido: 'manana' },
    { comentario: 'x'.repeat(1501) }, { negocio: 'x'.repeat(161) },
  ];
  for (const invalid of invalids) assert.equal(server().post(invalid).saved, false, JSON.stringify(invalid));
});

const oldHeaders = ['Fecha', 'Nombre', 'Telefono'];

test('migración de la prueba básica de tres columnas conserva las filas anteriores y añade encabezados una sola vez', () => {
  const oldRow = ['fecha', 'Nombre', '5512345678'];
  const s = server({ initialRows: [oldHeaders, oldRow] });
  assert.equal(s.post().saved, true);
  assert.deepEqual(s.rows[1], oldRow);
  assert.deepEqual(s.rows[0].slice(0, 3), oldHeaders);
  assert.equal(s.rows[0].length, 20);
  assert.equal(s.post().duplicate, true);
  assert.equal(s.rows[0].length, 20);
});

test('hoja con encabezados desconocidos se rechaza sin reemplazar datos ni enviar correo', () => {
  const original = [['Encabezado ajeno'], ['Información que debe conservarse']];
  const s = server({ initialRows: original });
  assert.equal(s.post().code, 'schema_error');
  assert.deepEqual(s.rows, original);
  assert.equal(s.mailCount, 0);
});

test('guarda y hace flush antes de notificar; un fallo de flush impide correo', () => {
  const s = server();
  assert.equal(s.post().saved, true);
  assert.deepEqual(s.events, ['append', 'flush', 'mail', 'flush']);
  const failed = server({ failFlush: true });
  assert.equal(failed.post().saved, false);
  assert.equal(failed.mailCount, 0);
});

test('WhatsApp distingue orientación y producto y acota funciones', () => {
  assert.match(contactWhatsAppMessage('general'), /orientación/);
  assert.match(contactWhatsAppMessage('agenda'), /Agenda Digital/);
  assert.doesNotMatch(contactWhatsAppMessage('agenda', ['Uno', 'Dos', 'Tres', 'Cuatro']), /Cuatro/);
});

const cell = (s, name, row = 1) => s.rows[row][s.rows[0].indexOf(name)];

for (const solution of ['general', 'agenda', 'android']) {
  test(`correo opcional válido y validado en ambos extremos: ${solution}`, () => {
    const payload = buildContactPayload({ nombre: 'Ana', telefono: '5512345678', correo: ' ana@example.test ', horarioPreferido: 'manana' }, solution);
    assert.equal(payload.correo, 'ana@example.test');
    assert.equal(validateContact(payload), null);
    const s = server();
    assert.equal(s.post(payload).saved, true);
    assert.equal(s.emails.length, 2);
    assert.equal(s.emails[0][0], 'enriquegv078@gmail.com');
    assert.equal(s.emails[1][0], payload.correo);
    assert.equal(cell(s, 'NotificacionEnrique'), 'sent');
    assert.equal(cell(s, 'ConfirmacionCliente'), 'sent');
    assert.deepEqual(s.events, ['append', 'flush', 'mail', 'mail', 'flush']);
    assert.equal(s.post(payload).duplicate, true);
    assert.equal(s.emails.length, 2);
    for (const correo of ['mal', 'a@b', 'a b@example.test', 'x'.repeat(255) + '@example.test']) {
      const invalid = { ...payload, correo };
      assert.ok(validateContact(invalid));
      const rejected = server();
      assert.equal(rejected.post(invalid).saved, false);
      assert.equal(rejected.mailCount, 0);
      assert.equal(rejected.rows.length, 0);
    }
  });
}

for (const failMail of [false, true]) {
  for (const failClientMail of [false, true]) {
    test(`estados independientes Enrique=${failMail} cliente=${failClientMail}`, () => {
      const s = server({ failMail, failClientMail });
      const result = s.post({ correo: 'ana@example.test' });
      assert.equal(result.saved, true);
      assert.equal(s.rows.length, 2);
      assert.equal(s.mailCount, 2);
      assert.equal(cell(s, 'NotificacionEnrique'), failMail ? 'failed' : 'sent');
      assert.equal(cell(s, 'ConfirmacionCliente'), failClientMail ? 'failed' : 'sent');
      assert.equal(result.notificationEnrique, cell(s, 'NotificacionEnrique'));
      assert.equal(result.confirmationCliente, cell(s, 'ConfirmacionCliente'));
      assert.equal(s.errors.length, Number(failMail) + Number(failClientMail));
    });
  }
}

test('sin correo solo notifica a Enrique y marca cliente not_applicable', () => {
  const s = server();
  const result = s.post();
  assert.equal(result.confirmationCliente, 'not_applicable');
  assert.equal(cell(s, 'ConfirmacionCliente'), 'not_applicable');
  assert.equal(s.emails.length, 1);
  assert.equal(s.emails[0][0], 'enriquegv078@gmail.com');
});

test('correo interno incluye todos los datos disponibles sin IDs técnicos', () => {
  const payload = buildContactPayload({ nombre: 'Ana', telefono: '5512345678', correo: 'ana@example.test', negocio: 'Tienda Ana', cupon: 'REVISION' }, 'ecommerce', { answer: 'si', features: [{ id: 'advanced_search', nombre: 'Búsqueda avanzada' }], comment: 'Mi comentario' });
  const s = server();
  s.post(payload);
  const [recipient, subject, body] = s.emails[0];
  assert.equal(recipient, 'enriquegv078@gmail.com');
  assert.equal(subject, 'Nueva consulta: E-Commerce PRO — Ana');
  for (const value of [id, cell(s, 'Fecha'), 'Interés en producto', 'E-Commerce PRO', 'Ana', '5512345678', 'ana@example.test', 'Tienda Ana', 'Búsqueda avanzada', 'Mi comentario', 'REVISION']) assert.ok(body.includes(value), value);
  assert.doesNotMatch(body, /undefined|advanced_search|Horario preferido:/);
  assert.equal(s.emails[1][1], 'Hemos recibido tu solicitud — Enrique Vargas | Soluciones Digitales');
  assert.match(s.emails[1][2], /Hola, Ana:/);
  assert.ok(s.emails[1][2].includes(id));
  assert.doesNotMatch(s.emails[1][2], /advanced_search|REVISION|Mi comentario/);
});

test('confirmación de orientación respeta horario sin confirmar cita', () => {
  const payload = buildContactPayload({ nombre: 'Ana', telefono: '5512345678', correo: 'ana@example.test', horarioPreferido: 'otro', horarioOtro: 'Después de las 6' }, 'general');
  const s = server();
  s.post(payload);
  assert.equal(s.emails[0][1], 'Nueva solicitud de orientación — Ana');
  assert.match(s.emails[0][2], /Horario preferido: Otro horario: Después de las 6/);
  assert.match(s.emails[1][2], /Solicitud de orientación/);
  assert.match(s.emails[1][2], /Horario de contacto preferido: Otro horario: Después de las 6/);
  assert.match(s.emails[1][2], /llamada aún no está confirmada/);
});

test('amplía las 18 columnas previas sin alterar filas ni reenviar correos antiguos', () => {
  const original = server();
  original.post();
  const oldRows = original.rows.map(row => row.slice(0, 18));
  oldRows[1][9] = 'failed';
  const s = server({ initialRows: oldRows });
  assert.equal(s.post().duplicate, true);
  assert.deepEqual(s.rows[0].slice(0, 18), oldRows[0]);
  assert.deepEqual(s.rows[0].slice(18), ['NotificacionEnrique', 'ConfirmacionCliente']);
  assert.deepEqual(s.rows[1], oldRows[1]);
  assert.equal(s.mailCount, 0);
});

test('fallo al escribir estados conserva fila y ambos intentos de correo', () => {
  const s = server({ failStatus: true });
  const result = s.post({ correo: 'ana@example.test' });
  assert.equal(result.saved, true);
  assert.equal(result.notificationStatusSaved, false);
  assert.equal(s.rows.length, 2);
  assert.equal(s.emails.length, 2);
});
