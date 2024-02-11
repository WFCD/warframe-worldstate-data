import data from '../exports.js';

/**
 * Rough Titlecase!
 * @param {string} str string to be titlecased
 * @returns {string} titlecased string
 */
export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
};

/**
 * Utility function to split the resource name and return somewhat human-readable string
 * @param {string} str localization resource key
 * @returns {string} human-readable string
 */
export const splitResourceName = (str) =>
  str
    .split(/([A-Z]?[^A-Z]*)/g)
    .filter(Boolean)
    .join(' ');

const i18n = (locale = 'en') => data[locale] || data;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} faction name
 */
export function faction(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).factions) {
    return i18n(dataOverride).factions[key].value;
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} node name
 */
export function node(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).solNodes) {
    return i18n(dataOverride).solNodes[key].value;
  }
  if (key) {
    return key.split('/').slice(-1)[0];
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} mission type of the node
 */
export function nodeMissionType(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).solNodes) {
    return i18n(dataOverride).solNodes[key].type;
  }
  if (key) {
    return key.split('/').slice(-1)[0];
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} faction that controls the node
 */
export function nodeEnemy(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).solNodes) {
    return i18n(dataOverride).solNodes[key].enemy;
  }
  if (key) {
    return key.split('/').slice(-1)[0];
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} localization for language string
 */
export function languageString(key, dataOverride = 'en') {
  const lowerKey = String(key).toLowerCase();
  if (lowerKey in i18n(dataOverride).languages) {
    return i18n(dataOverride).languages[lowerKey].value;
  }
  if (key in i18n(dataOverride).languages) {
    return i18n(dataOverride).languages[key].value;
  }
  if (key) {
    return toTitleCase(splitResourceName(String(key).split('/').slice(-1)[0]));
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} localization for language description
 */
export function languageDesc(key, dataOverride = 'en') {
  const lowerKey = String(key).toLowerCase();
  if (lowerKey in i18n(dataOverride).languages) {
    return i18n(dataOverride).languages[lowerKey].desc;
  }
  if (key in i18n(dataOverride).languages) {
    return i18n(dataOverride).languages[key].desc;
  }
  if (key) {
    return `[PH] ${toTitleCase(splitResourceName(String(key).split('/').slice(-1)[0]))} Desc`;
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} translation for mission type
 */
export function missionType(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).missionTypes) {
    return i18n(dataOverride).missionTypes[key].value;
  }
  if (key) {
    return toTitleCase(key.replace(/^MT_/, ''));
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} conclave mode
 */
export function conclaveMode(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).conclave.modes) {
    return i18n(dataOverride).conclave.modes[key].value;
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} conclave category
 */
export function conclaveCategory(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).conclave.categories) {
    return i18n(dataOverride).conclave.categories[key].value;
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} fissure modifier data
 */
export function fissureModifier(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).fissureModifiers) {
    return i18n(dataOverride).fissureModifiers[key].value;
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {number | string} fissure tier
 */
export function fissureTier(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).fissureModifiers) {
    return i18n(dataOverride).fissureModifiers[key].num;
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} syndicate name
 */
export function syndicate(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).syndicates) {
    return i18n(dataOverride).syndicates[key].name;
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} upgrade type
 */
export function upgrade(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).upgradeTypes) {
    return i18n(dataOverride).upgradeTypes[key].value;
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} mathematical operation value
 */
export function operation(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).operationTypes) {
    return i18n(dataOverride).operationTypes[key].value;
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} symbol of mathematical operation
 */
export function operationSymbol(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).operationTypes) {
    return i18n(dataOverride).operationTypes[key].symbol;
  }
  return key;
}

/**
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} sortie boss name
 */
export function sortieBoss(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).sortie.bosses) {
    return i18n(dataOverride).sortie.bosses[key].name;
  }
  return key;
}

/**
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} faction for a sortie based on the boss
 */
export function sortieFaction(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).sortie.bosses) {
    return i18n(dataOverride).sortie.bosses[key].faction;
  }
  return key;
}

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} sortie modifier data
 */
export function sortieModifier(key, dataOverride = 'en') {
  if (key in i18n(dataOverride).sortie.modifierTypes) {
    return i18n(dataOverride).sortie.modifierTypes[key];
  }
  return key;
}

/**
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} sortie modifier description
 */
export function sortieModDesc(key, dataOverride = 'en') {
  if (i18n(dataOverride).sortie.modifierDescriptions && key in i18n(dataOverride).sortie.modifierDescriptions) {
    return i18n(dataOverride).sortie.modifierDescriptions[key];
  }
  return key;
}

/**
 * Retrieve the localized region for a given key
 * @param {string} key - The region key
 * @param {string} dataOverride - The locale to use for translations
 * @returns {string} localized region name
 */
export function region(key, dataOverride = 'en') {
  if (key && i18n(dataOverride).persistentEnemy.regions[key]) {
    return i18n(dataOverride).persistentEnemy.regions[key];
  }
  return key;
}

/**
 * Retrieve conclave challenge name for the given key and locale
 * @param {string} key key to retrieve
 * @param {string} dataOverride locale key override
 * @returns {string} - The conclave challenge name for the given key
 */
export function conclaveChallenge(key, dataOverride = 'en') {
  const splitKey = String(key).split('/').slice(-1)[0];

  if (i18n(dataOverride).conclave?.challenges?.[splitKey]) {
    return i18n(dataOverride).conclave.challenges[splitKey];
  }
  return {
    title: toTitleCase(splitResourceName(splitKey)),
    description: toTitleCase(splitResourceName(splitKey)),
    standing: 0,
  };
}

/**
 * Get the steel path data for given key
 * @param {string} dataOverride - The locale to use for translations
 * @returns {string} - The steel path data for the given key
 */
export function steelPath(dataOverride) {
  return (i18n(dataOverride) || /* istanbul ignore next */ data).steelPath;
}

/**
 * Translate the given focus school
 * @param {string} focus The focus school to translate
 * @returns {string} The translated focus school
 */
export function translateFocus(focus = '') {
  if (focus.includes('Focus/Attack')) {
    return 'Madurai';
  }
  if (focus.includes('Focus/Defense')) {
    return 'Varazin';
  }
  if (focus.includes('Focus/Tactic')) {
    return 'Naramon';
  }
  if (focus.includes('Focus/Power')) {
    return 'Zenurik';
  }
  if (focus.includes('Focus/Ward')) {
    return 'Unairu';
  }
  return 'None';
}

/**
 * Translate the given polarity
 * @param {string?} pol The polarity to translate
 * @returns {string} The translated polarity
 */
export function translatePolarity(pol = '') {
  if (pol.includes('AP_ATTACK')) {
    return 'Madurai';
  }
  if (pol.includes('AP_DEFENSE')) {
    return 'Varazin';
  }
  if (pol.includes('AP_TACTIC')) {
    return 'Naramon';
  }
  if (pol.includes('AP_POWER')) {
    return 'Zenurik';
  }
  if (pol.includes('AP_WARD')) {
    return 'Unairu';
  }
  return 'None';
}

/**
 * An object containing functions to convert in-game names to their localizations
 * @typedef {Record<string, function>} Translator
 * @property {function} faction          - Converts faction names
 * @property {function} node             - Converts star map node names
 * @property {function} nodeMissionType  - Returns the mission type of given node
 * @property {function} nodeEnemy        - Returns the faction that controls a given node
 * @property {function} languageString   - Converts generic language strings
 * @property {function} languageDesc     - Converts generic language strings
 *                                          and retrieves the description
 * @property {function} missionType      - Converts mission types
 * @property {function} conclaveMode     - Converts conclave modes
 * @property {function} conclaveCategory - Converts conclave challenge categories
 * @property {function} fissureModifier  - Converts fissure mission modifiers
 * @property {function} syndicate        - Converts syndicate names
 * @property {function} upgrade          - Converts upgrade types
 * @property {function} operation        - Converts operation types
 * @property {function} sortieBoss       - Converts sortie boss names
 * @property {function} sortieModifier    - Converts sortie modifier types
 * @property {function} sortieModDesc    - Converts sortie modifier type descriptions
 * @property {function} region           - Converts persistent enemy region indicies
 * @property {function} conclaveChallenge - Convert conclave identifiers into standing data
 * @property {function} steelPath        -  Retrieve Steel Path rotation data for locale
 * @property {function} toTitleCase      - Format provided string as titlecase
 * @property {function} translateFocus   - Translate focus schools
 * @property {function} translatePolarity - Translate polarities
 */
export default {
  faction,
  node,
  nodeMissionType,
  nodeEnemy,
  languageString,
  languageDesc,
  missionType,
  conclaveMode,
  conclaveCategory,
  fissureModifier,
  fissureTier,
  syndicate,
  upgrade,
  operation,
  operationSymbol,
  sortieBoss,
  sortieModifier,
  sortieModDesc,
  sortieFaction,
  region,
  conclaveChallenge,
  steelPath,
  toTitleCase,
  translateFocus,
  translatePolarity,
};
