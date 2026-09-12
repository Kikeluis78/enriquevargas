import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
import { CONTACT_PROTOCOL, normalizePhone, submitContact, validateContact } from '../src/utils/contact.js';

const id = '12345678-1234-4234-8234-123456789abc';
const data = { nombre: 'Prueba local', telefono: '5512345678', correo: '', negocio: '', solucion: 'agenda', necesidad: 'Consulta simulada sin envío externo', cupon: '' };
const response = (body) => ({ ok: true, type: 'cors', json: async () => body });
const health = () => response({ protocol: CONTACT_PROTOCOL });

test('teléfono nacional y +52 se normalizan; un número extranjero no se acepta', () => {
  assert.equal(normalizePhone('+52 (55) 1234-5678'), '5512345678');
  assert.equal(validateContact(data), null);
  assert.ok(validateContact({ ...data, telefono: normalizePhone('+1 212 555 1234') }));
});

test('valida necesidad, correo opcional, longitudes y solución permitida', () => {
  for (const override of [{ necesidad: '' }, { correo: 'incorrecto' }, { nombre: 'x'.repeat(121) }, { solucion: 'toString' }, { cupon: 'x'.repeat(81) }]) {
    assert.ok(validateContact({ ...data, ...override }));
  }
});

test('una versión antigua no recibe datos personales', async () => {
  let calls = 0;
  await assert.rejects(submitContact(data, id, { fetchImpl: async () => { calls++; return response('ok'); } }));
  assert.equal(calls, 1);
});

test('solo confirma un JSON de guardado con la referencia correcta', async () => {
  const calls = [];
  const result = await submitContact(data, id, { fetchImpl: async (_url, options) => {
    calls.push(options);
    return calls.length === 1 ? health() : response({ protocol: CONTACT_PROTOCOL, saved: true, requestId: id, notification: 'failed' });
  } });
  assert.equal(result.saved, true);
  assert.equal(result.notification, 'failed');
  assert.equal(calls[1].mode, 'cors');
  assert.equal(calls[1].body.get('requestId'), id);
  assert.equal(calls[1].body.get('solucion'), 'agenda');
});

for (const [label, invalid] of [
  ['guardado rechazado', response({ protocol: CONTACT_PROTOCOL, saved: false, requestId: id })],
  ['referencia ajena', response({ protocol: CONTACT_PROTOCOL, saved: true, requestId: 'otra' })],
  ['respuesta antigua', response('ok')],
  ['error HTTP', { ok: false }],
  ['respuesta opaca', { ok: true, type: 'opaque' }],
  ['JSON inválido', { ok: true, json: async () => { throw new SyntaxError('invalid'); } }],
]) {
  test(`no confirma: ${label}`, async () => {
    let calls = 0;
    await assert.rejects(submitContact(data, id, { fetchImpl: async () => ++calls === 1 ? health() : invalid }));
    assert.equal(calls, 2);
  });
}

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
function server({ failStorage = false, failMail = false, busy = false } = {}) {
  const rows = [];
  let mailCount = 0;
  let unlocks = 0;
  const sheet = {
    appendRow: (row) => { if (failStorage) throw new Error('storage'); rows.push([...row]); },
    getLastRow: () => rows.length,
    getRange: (row, column, count) => ({
      getValues: () => rows.slice(row - 1, row - 1 + count),
      setValue: (value) => { rows[row - 1][column - 1] = value; },
    }),
  };
  const context = vm.createContext({
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: (value) => ({ setMimeType: () => JSON.parse(value) }) },
    LockService: { getScriptLock: () => ({ tryLock: () => !busy, releaseLock: () => { unlocks++; } }) },
    SpreadsheetApp: { openById: () => ({ getSheetByName: () => rows.length ? sheet : null, insertSheet: () => sheet }), flush: () => {} },
    Utilities: { DigestAlgorithm: { SHA_256: 'sha256' }, computeDigest: (_algorithm, input) => createHash('sha256').update(input).digest(), base64EncodeWebSafe: (input) => input.toString('base64url') },
    MailApp: { sendEmail: () => { mailCount++; if (failMail) throw new Error('mail'); } },
  });
  vm.runInContext(script, context);
  return { post: (overrides = {}) => context.doPost({ parameter: { ...data, requestId: id, protocol: CONTACT_PROTOCOL, ...overrides } }), health: () => context.doGet(), rows, get mailCount() { return mailCount; }, get unlocks() { return unlocks; } };
}

test('la comprobación de versión no escribe ni envía correos', () => {
  const s = server();
  assert.equal(s.health().protocol, CONTACT_PROTOCOL);
  assert.equal(s.rows.length, 0);
  assert.equal(s.mailCount, 0);
});

test('el servidor valida datos antes de escribir', () => {
  const s = server();
  for (const invalid of [{ requestId: '' }, { protocol: 'old' }, { telefono: '123' }, { necesidad: '' }, { solucion: 'inventada' }, { correo: 'mal' }]) {
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
  assert.equal(s.post({ necesidad: 'Otra consulta' }).code, 'id_conflict');
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
  assert.equal(s.post({ nombre: '=IMPORTXML("example")', necesidad: '+SUM(1,2)' }).saved, true);
  assert.ok(s.rows[1][2].startsWith("'="));
  assert.ok(s.rows[1][7].startsWith("'+"));
});
