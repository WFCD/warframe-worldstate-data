'use strict';

const locales = ['de', 'es', 'fr', 'it', 'ko', 'pl', 'pt', 'ru', 'zh'];

/**
 * Safely require path, fall back to fallback if module cannot loa
 * @param  {[type]} path    Path to attempt to load
 * @param  {[type]} fallback [description]
 * @returns {any}         module or the default object
 */
const safeRequire = (path, fallback = {}) => {
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    return require(path);
  } catch (error) {
    if ((process.env.LOG_LEVEL || 'ERROR').toUpperCase() === 'DEBUG') {
      // eslint-disable-next-line no-console
      console.debug(`Failed to load module at ${path} ... returning fallback`);
    }
    return fallback;
  }
};

/**
 * Synthesis target information
 * @typedef {synthesisTarget}
 * @property {string} name Name of the target
 * @property {Object[]} locations Array of verified locations
 * @property {string} locations.last_verified Date string for the last verified date
 * @property {string} locations.level Level range for enemies on the node.
 * @property {string} locations.spawn_rate Plain text Spawn rate for enemy.
 * @property {string} locations.mission Mission node for the location
 * @property {string} locations.planet Planet the node is on
 * @property {string} locations.type Mission type at this location
 * @property {string} locations.faction Enemy faction that spawns in this location
 */

/**
 * Bundles all the data for a particular language
 * @typedef {WorldstateLangBundle}
 *
 * @property {Arcane[]} arcanes Array of arcane data
 * @property {Object}   conclave Data for translating PvP categories and types
 * @deprecated @property {Object} events Data for converting event tags to useable event data.
 *    Deprecated in favor of keeping values in languages.json
 * @property {Object} factions Faction universal name to plain-usage name
 * @property {Object} fissureModifiers Map of fissures to "Warframeified" tier names and numbers
 * @property {Object} languages Map of "internal" Warframe strings to useable language strings
 * @property {Object} missionTypes Map of Mission Type identifiers to their corresponding values
 * @property {Object} operationTypes Global modifiers for applying operations to things like
 *  credits, affinity, etc.
 * @property {Object} persistentEnemy Region mapping for indicies to planets
 * @property {Object} solNodes Nodes in the Sol system, with enemy type and node information
 * @property {Object} sortie Sortie-specific mapping for modifier type, description, and boss
 * @property {Object[]} tutorials Official tutorials. Not many have been released in a long time.
 * @property {Object} upgradeTypes Global upgrade types that are modified by #operationTypes
 * @property {synthesisTarget[]} synthTargets Synthesis target data for
 *  optimal locations to find targets.
 */

/* eslint-disable global-require */
/**
 * English United States translations bundle,
 *  default translations
 * @type {WorldstateLangBundle}
 */
const enUS = {
  arcanes: require('./data/arcanes.json'),
  conclave: require('./data/conclaveData.json'),
  events: require('./data/eventsData.json'),
  factions: require('./data/factionsData.json'),
  fissureModifiers: require('./data/fissureModifiers.json'),
  languages: require('./data/languages.json'),
  missionTypes: require('./data/missionTypes.json'),
  operationTypes: require('./data/operationTypes.json'),
  persistentEnemy: require('./data/persistentEnemyData.json'),
  solNodes: require('./data/solNodes.json'),
  sortie: require('./data/sortieData.json'),
  syndicates: require('./data/syndicatesData.json'),
  tutorials: require('./data/tutorials.json'),
  upgradeTypes: require('./data/upgradeTypes.json'),
  synthTargets: require('./data/synthTargets.json'),
};
/* eslint-enable global-require */

const stuff = {
  /**
   * English United States translations
   * @type {WorldstateLangBundle}
   */
  en_US: enUS,
  en: enUS,
  ...enUS,
  locales,
};

locales.forEach((locale) => {
  /**
   * Translations bundle for $locale
   * @type {WorldstateLangBundle}
   */
  stuff[locale] = {
    arcanes: safeRequire(`./data/${locale}/arcanes.json`, []),
    conclave: safeRequire(`./data/${locale}/conclaveData.json`, {}),
    events: safeRequire(`./data/${locale}/eventsData.json`, {}),
    factions: safeRequire(`./data/${locale}/factionsData.json`, {}),
    fissureModifiers: safeRequire(`./data/${locale}/fissureModifiers.json`, {}),
    languages: safeRequire(`./data/${locale}/languages.json`, {}),
    missionTypes: safeRequire(`./data/${locale}/missionTypes.json`, {}),
    operationTypes: safeRequire(`./data/${locale}/operationTypes.json`, {}),
    persistentEnemy: safeRequire(`./data/${locale}/persistentEnemyData.json`, {}),
    solNodes: safeRequire(`./data/${locale}/solNodes.json`, []),
    sortie: safeRequire(`./data/${locale}/sortieData.json`, []),
    syndicates: safeRequire(`./data/${locale}/syndicatesData.json`, []),
    tutorials: safeRequire(`./data/${locale}/tutorials.json`, []),
    upgradeTypes: safeRequire(`./data/${locale}/upgradeTypes.json`, []),
    synthTargets: safeRequire(`./data/${locale}/synthTargets.json`, []),
  };
});

module.exports = stuff;
