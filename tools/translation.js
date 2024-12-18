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

export const lastResourceName = (str) => (typeof str === 'string' ? str.split?.('/').reverse()[0] : str);

const i18n = (locale = 'en') => data[locale] || data;

const keyInData = (key, dataOverride) => (key in i18n(dataOverride) ? i18n(dataOverride)[key] : key);

/**
 *
 * @param {string} color - The internal color name
 * @param {string} dataOverride locale for use with translation
 * @returns {Object | undefined}
 */
export const archonShard = (color, dataOverride = 'en') => keyInData('archonShards', dataOverride)[color];

/**
 *
 * @param {string} color - The internal color name
 * @param {string} dataOverride locale for use with translation
 * @returns {string}
 */
export const archonShardColor = (color, dataOverride = 'en') => archonShard(color, dataOverride)?.value ?? color;

/**
 *
 * @param {string} color - The internal color name
 * @param {string} upgradeType - The upgrade type
 * @param {string} dataOverride locale for use with translation
 * @returns {string}
 */
export const archonShardUpgradeType = (color, upgradeType, dataOverride = 'en') =>
  archonShard(color, dataOverride)?.upgradeTypes[upgradeType]?.value ?? lastResourceName(upgradeType);

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} faction name
 */
export const faction = (key, dataOverride = 'en') => keyInData('factions', dataOverride)[key]?.value ?? key;

const solNode = (key, thing, dataOverride = 'en') =>
  keyInData('solNodes', dataOverride)?.[key]?.[thing] ?? lastResourceName(key) ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} node name
 */
export const node = (key, dataOverride = 'en') => solNode(key, 'value', dataOverride);

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} mission type of the node
 */
export const nodeMissionType = (key, dataOverride = 'en') => solNode(key, 'type', dataOverride);
/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} faction that controls the node
 */
export const nodeEnemy = (key, dataOverride = 'en') => {
  return key in i18n(dataOverride).solNodes ? i18n(dataOverride).solNodes[key].enemy : (lastResourceName(key) ?? key);
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
    (key ? toTitleCase(splitResourceName(lastResourceName(String(key)))) : key)
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
    (key ? `[PH] ${toTitleCase(splitResourceName(lastResourceName(String(key))))} Desc` : key)
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

const conclave = (key, thing, dataOverride = 'en') => keyInData('conclave', dataOverride)?.[thing]?.[key]?.value ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} conclave mode
 */
export const conclaveMode = (key, dataOverride = 'en') => conclave(key, 'modes', dataOverride);

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} conclave category
 */
export const conclaveCategory = (key, dataOverride = 'en') => conclave(key, 'categories', dataOverride);

const fissure = (key, dataOverride = 'en') => keyInData('fissureModifiers', dataOverride)?.[key] ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} fissure modifier data
 */
export const fissureModifier = (key, dataOverride = 'en') => fissure(key, dataOverride)?.value ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {number | string} fissure tier
 */
export const fissureTier = (key, dataOverride = 'en') => fissure(key, dataOverride).num ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} syndicate name
 */
export const syndicate = (key, dataOverride = 'en') => i18n(dataOverride).syndicates[key]?.name ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} upgrade type
 */
export const upgrade = (key, dataOverride = 'en') => i18n(dataOverride).upgradeTypes[key]?.value ?? key;

const oppo = (key, dataOverride = 'en') => i18n(dataOverride).operationTypes[key];

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} mathematical operation value
 */
export const operation = (key, dataOverride = 'en') => oppo(key, dataOverride)?.value ?? key;

/**
 *
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} symbol of mathematical operation
 */
export const operationSymbol = (key, dataOverride = 'en') => oppo(key, dataOverride)?.symbol ?? key;

const sortie = (key, dataOverride = 'en') => i18n(dataOverride).sortie.bosses[key];

/**
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} sortie boss name
 */
export const sortieBoss = (key, dataOverride = 'en') => sortie(key, dataOverride)?.name ?? key;

/**
 * @param {string} key - The data key
 * @param {string} dataOverride locale for use with translation
 * @returns {string} faction for a sortie based on the boss
 */
export const sortieFaction = (key, dataOverride = 'en') => sortie(key, dataOverride)?.faction ?? key;

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
 * @returns {{
 *   title: string,
 *   description: string,
 *   standing: number,
 * }} - The conclave challenge name for the given key
 */
export const conclaveChallenge = (key, dataOverride = 'en') => {
  const splitKey = lastResourceName(String(key));

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

const valMapping = (key, map) => {
  let val = 'None';
  Object.keys(map).forEach((k) => {
    if (key.includes(k)) {
      val = map[k];
    }
  });
  return val;
};

const focusMap = {
  'Focus/Attack': 'Madurai',
  'Focus/Defense': 'Vazarin',
  'Focus/Tactic': 'Naramon',
  'Focus/Power': 'Zenurik',
  'Focus/Ward': 'Unairu',
};
/**
 * Translate the given focus school
 * @param {string} focus The focus school to translate
 * @returns {string} The translated focus school
 */
export const translateFocus = (focus = '') => valMapping(focus, focusMap);

const polarityMap = {
  AP_ATTACK: 'Madurai',
  AP_DEFENSE: 'Vazarin',
  AP_TACTIC: 'Naramon',
  AP_POWER: 'Zenurik',
  AP_WARD: 'Unairu',
  AP_UMBRA: 'Umbra',
  AP_ANY: 'Aura',
};

/**
 * Translate the given polarity
 * @param {string?} pol The polarity to translate
 * @returns {string} The translated polarity
 */
export const translatePolarity = (pol = '') => valMapping(pol, polarityMap);

const eventTypeMap = {
  CET_CHALLENGE: 'To Do',
  CET_UPGRADE: 'Override',
  CET_REWARD: 'Big Prize!',
  CET_PLOT: 'Birthday',
};

/**
 * Translate the given event key
 * @param {string} key Unique event type
 * @returns {string}
 */
export const translateCalendarEvent = (key) => valMapping(key, eventTypeMap);

/**
 * Translate the given season name to a non-unique string
 * @param {string} season Unique season name
 * @returns {string}
 */
export const translateSeason = (season) => toTitleCase(season.replace('CST_', ''));

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
 * @property {function} archonShard      - Converts archon shard names
 * @property {function} archonShardColor - Converts archon shard names to in-game color values
 * @property {function} archonShardUpgradeType - Convert archon shard upgrade type
 * @property {function} translateCalendarEvent - Translate the given event key
 * @property {function} translateSeason - Translate the given season name to a non-unique string
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
  archonShard,
  archonShardColor,
  archonShardUpgradeType,
  translateCalendarEvent,
  translateSeason,
};
