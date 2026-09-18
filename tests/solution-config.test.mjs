import test from 'node:test';
import assert from 'node:assert/strict';
import { initialConfigState, solutionConfigReducer as reduce, getSolutionDraft, filterSolutionIds } from '../src/Context/solutionConfigReducer.js';
import { getAdditionalFeatures } from '../src/data/projectFeatures.js';
import { buildContactPayload, validateContact } from '../src/utils/contact.js';
const feature = solution => getAdditionalFeatures(solution)[0];
const toggle = (state, solution, id = feature(solution).id) => reduce(state, { type: 'TOGGLE_FEATURE', solution, id });
const decide = (state, solution, decision) => reduce(state, { type: 'SET_PACKAGE_DECISION', solution, decision });
const payload = (state, solution) => {
  const draft = getSolutionDraft(state, solution);
  return buildContactPayload({ ...state.fields, nombre: 'Prueba local', telefono: '5512345678', horarioPreferido: 'manana' }, solution, {
    features: getAdditionalFeatures(solution).filter(f => draft.ids.includes(f.id)),
    comment: draft.comment,
    answer: draft.decidedPackage === 'inicial' ? 'no' : draft.decidedPackage === 'personalizado' ? 'si' : '',
  });
};
test('entrada directa no equivale a elegir paquete inicial', () => {
  assert.equal(getSolutionDraft(initialConfigState, 'agenda').decidedPackage, null);
  assert.equal(payload(initialConfigState, 'agenda').necesitaAdicionales, '');
});
test('selección produce IDs y nombres válidos en el payload existente', () => {
  const state = toggle(initialConfigState, 'telegram');
  const data = payload(state, 'telegram');
  assert.deepEqual(data.funcionesIds, [feature('telegram').id]);
  assert.deepEqual(data.funcionesSeleccionadas, [feature('telegram').nombre]);
  assert.equal(data.necesitaAdicionales, 'si');
  assert.equal(validateContact(data), null);
  assert.deepEqual(initialConfigState.drafts, {});
});
test('borradores independientes: alternar soluciones no mezcla IDs ni comentarios', () => {
  let state = toggle(toggle(initialConfigState, 'telegram'), 'agenda');
  state = reduce(state, { type: 'SET_COMMENT', solution: 'agenda', comment: 'Idea local' });
  state = toggle(state, 'telegram');
  assert.deepEqual(getSolutionDraft(state, 'telegram').ids, []);
  assert.deepEqual(getSolutionDraft(state, 'agenda').ids, [feature('agenda').id]);
  assert.equal(getSolutionDraft(state, 'telegram').comment, '');
  assert.equal(getSolutionDraft(state, 'agenda').comment, 'Idea local');
});
test('paquete inicial descarta adicionales anteriores únicamente para esa solución', () => {
  const state = decide(toggle(toggle(initialConfigState, 'agenda'), 'telegram'), 'telegram', 'inicial');
  assert.equal(payload(state, 'telegram').necesitaAdicionales, 'no');
  assert.deepEqual(payload(state, 'telegram').funcionesIds, []);
  assert.equal(payload(state, 'agenda').funcionesIds.length, 1);
  assert.deepEqual(getSolutionDraft(decide(state, 'telegram', 'personalizado'), 'telegram').ids, []);
});
test('filtra IDs desconocidos, de otra solución, duplicados y funciones base', () => {
  for (const solution of ['tarjeta', 'agenda', 'telegram', 'menu_whatsapp', 'ecommerce', 'web_corporativa', 'web_android', 'android']) {
    const allowed = getAdditionalFeatures(solution).map(f => f.id);
    const otherSolutions = ['tarjeta', 'agenda', 'telegram', 'menu_whatsapp', 'ecommerce', 'web_corporativa', 'web_android', 'android'].flatMap(id => getAdditionalFeatures(id).map(f => f.id));
    const state = { ...initialConfigState, drafts: { [solution]: { ids: [...allowed, ...otherSolutions, ...allowed, 'invalido', 'initial_setup'], comment: '', decidedPackage: 'personalizado' } } };
    assert.deepEqual(getSolutionDraft(state, solution).ids, allowed);
    assert.equal(toggle(initialConfigState, solution, 'invalido'), initialConfigState);
  }
  assert.deepEqual(filterSolutionIds('general', ['invalido']), []);
});
test('editar y volver conserva campos compartidos y comentario del borrador', () => {
  let state = reduce(initialConfigState, { type: 'SET_FIELD', name: 'nombre', value: 'Prueba local' });
  state = reduce(state, { type: 'SET_COMMENT', solution: 'agenda', comment: 'Necesidad local' });
  state = toggle(state, 'agenda');
  state = decide(state, 'agenda', 'personalizado');
  assert.equal(state.fields.nombre, 'Prueba local');
  assert.equal(getSolutionDraft(state, 'agenda').comment, 'Necesidad local');
  assert.equal(reduce(state, { type: 'SET_FIELD', name: 'selectedSolution', value: 'telegram' }), state);
});
test('orientación no admite configuraciones avanzadas y conserva validación', () => {
  assert.equal(decide(initialConfigState, 'general', 'personalizado'), initialConfigState);
  assert.equal(toggle(initialConfigState, 'general', feature('agenda').id), initialConfigState);
  assert.equal(validateContact(payload(initialConfigState, 'general')), null);
  assert.deepEqual(payload(initialConfigState, 'general').funcionesIds, []);
});
