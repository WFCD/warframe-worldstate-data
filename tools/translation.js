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

const keyInData = (key, dataOverride) => (key in i18n(dataOverride) ? i18n(dataOverride)[key] : key);

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} faction name
 */
export const faction = (key, dataOverride = 'en') => keyInData('factions', dataOverride)[key]?.value ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} node name
 */
export const node = (key, dataOverride = 'en') =>
  keyInData('solNodes', dataOverride)[key]?.value ?? key.split?.('/').slice(-1)[0] ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} mission type of the node
 */
export const nodeMissionType = (key, dataOverride = 'en') =>
  key in i18n(dataOverride).solNodes ? i18n(dataOverride).solNodes[key].type : key?.split?.('/').slice(-1)[0] ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} faction that controls the node
 */
export const nodeEnemy = (key, dataOverride = 'en') => {
  return key in i18n(dataOverride).solNodes
    ? i18n(dataOverride).solNodes[key].enemy
    : key?.split?.('/').slice(-1)[0] ?? key;
};

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} localization for language string
 */
export const languageString = (key, dataOverride = 'en') => {
  const lowerKey = String(key).toLowerCase();
  return (
    keyInData('languages', dataOverride)[lowerKey]?.value ??
    keyInData('languages', dataOverride)[key]?.value ??
    toTitleCase(splitResourceName(String(key).split('/').slice(-1)[0])) ??
    key
  );
};

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} localization for language description
 */
export const languageDesc = (key, dataOverride = 'en') => {
  const lowerKey = String(key).toLowerCase();
  return (
    i18n(dataOverride).languages[lowerKey]?.desc ??
    i18n(dataOverride).languages[key]?.desc ??
    (key ? `[PH] ${toTitleCase(splitResourceName(String(key).split('/').slice(-1)[0]))} Desc` : key)
  );
};

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} translation for mission type
 */
export const missionType = (key, dataOverride = 'en') => {
  const keyBased = key && typeof key === 'string' && toTitleCase((key ?? '').replace(/^MT_/, ''));
  return key in i18n(dataOverride).missionTypes ? i18n(dataOverride).missionTypes[key].value : keyBased;
};

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} conclave mode
 */
export const conclaveMode = (key, dataOverride = 'en') =>
  key in i18n(dataOverride).conclave.modes ? i18n(dataOverride).conclave.modes[key].value : key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} conclave category
 */
export const conclaveCategory = (key, dataOverride = 'en') =>
  key in i18n(dataOverride).conclave.categories ? i18n(dataOverride).conclave.categories[key].value : key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} fissure modifier data
 */
export const fissureModifier = (key, dataOverride = 'en') =>
  key in i18n(dataOverride).fissureModifiers ? i18n(dataOverride).fissureModifiers[key].value : key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {number | string} fissure tier
 */
export const fissureTier = (key, dataOverride = 'en') =>
  key in i18n(dataOverride).fissureModifiers ? i18n(dataOverride).fissureModifiers[key].num : key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} syndicate name
 */
export const syndicate = (key, dataOverride = 'en') => i18n(dataOverride).syndicates[key]?.value ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} upgrade type
 */
export const upgrade = (key, dataOverride = 'en') => i18n(dataOverride).upgradeTypes[key]?.value ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} mathematical operation value
 */
export const operation = (key, dataOverride = 'en') => i18n(dataOverride).operationTypes[key]?.value ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} symbol of mathematical operation
 */
export const operationSymbol = (key, dataOverride = 'en') => i18n(dataOverride).operationTypes[key]?.symbol ?? key;

/**
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} sortie boss name
 */
export const sortieBoss = (key, dataOverride = 'en') => i18n(dataOverride).sortie.bosses[key]?.name ?? key;

/**
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} faction for a sortie based on the boss
 */
export const sortieFaction = (key, dataOverride = 'en') => i18n(dataOverride).sortie.bosses[key]?.faction ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} sortie modifier data
 */
export const sortieModifier = (key, dataOverride = 'en') => i18n(dataOverride).sortie.modifierTypes?.[key] ?? key;

/**
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} sortie modifier description
 */
export const sortieModDesc = (key, dataOverride = 'en') => i18n(dataOverride).sortie.modifierDescriptions?.[key] ?? key;

/**
 * Retrieve the localized region for a given key
 * @param {string | number} key - The region key
 * @param {string} dataOverride - The locale to use for translations
 * @returns {string} localized region name
 */
export const region = (key, dataOverride = 'en') => (key && i18n(dataOverride).persistentEnemy?.regions[key]) ?? key;

/**
 * Retrieve conclave challenge name for the given key and locale
 * @param {string} key key to retrieve
 * @param {string} dataOverride locale key override
 * @returns {string} - The conclave challenge name for the given key
 */
export const conclaveChallenge = (key, dataOverride = 'en') => {
  const splitKey = String(key).split('/').slice(-1)[0];

  if (i18n(dataOverride).conclave?.challenges?.[splitKey]) {
    return i18n(dataOverride).conclave.challenges[splitKey];
  }
  return {
    title: toTitleCase(splitResourceName(splitKey)),
    description: toTitleCase(splitResourceName(splitKey)),
    standing: 0,
  };
};

/**
 * Get the steel path data for given key
 * @param {string} dataOverride - The locale to use for translations
 * @returns {string} - The steel path data for the given key
 */
export const steelPath = (dataOverride = 'en') => (i18n(dataOverride) || /* istanbul ignore next */ data).steelPath;

/**
 * Translate the given focus school
 * @param {string} focus The focus school to translate
 * @returns {string} The translated focus school
 */
export const translateFocus = (focus = '') => {
  let val = 'None';
  if (focus.includes('Focus/Attack')) {
    val = 'Madurai';
  }
  if (focus.includes('Focus/Defense')) {
    val = 'Varazin';
  }
  if (focus.includes('Focus/Tactic')) {
    val = 'Naramon';
  }
  if (focus.includes('Focus/Power')) {
    val = 'Zenurik';
  }
  if (focus.includes('Focus/Ward')) {
    val = 'Unairu';
  }
  return val;
};

/**
 * Translate the given polarity
 * @param {string?} pol The polarity to translate
 * @returns {string} The translated polarity
 */
export const translatePolarity = (pol = '') => {
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
};

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
