'use strict';

const safeRequire = require('./safeRequire');

const locales = ['de', 'es', 'fr', 'it', 'ko', 'pl', 'pt', 'ru', 'zh', 'cs', 'sr', 'uk'];

/**
 * Synthesis target information
 * @typedef {Object} SynthesisTarget
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
 * Arcane Data
 * @typedef {Object} Arcane
 * @deprecated
 * @property {string} regex regex string to allow mapping
 * @property {string} name name of Arcane
 * @property {string} effect what the arcane does
 * @property {string} rarity How rare the arcane is
 * @property {string} location Where it drops
 * @property {string} thumbnail Wiki thumbnail url
 * @property {string} info Wiki Page URL
 */

/**
 * Conclave Data
 * @typedef {Object} Conclave
 */

/**
 * Bundles all the data for a particular language
 * @typedef {Object} WorldstateLangBundle
 * @property {Arcane[]} arcanes Deprecated: Array of arcane data
 * @property {Conclave} conclave Data for translating PvP categories and types
 * @property {Object} events Deprecated: Data for converting event tags to useable event data.
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
 * @property {Array<Object>} tutorials Official tutorials.
 *                                      Not many have been released in a long time.
 * @property {Object} upgradeTypes Global upgrade types that are modified by #operationTypes
 * @property {Array<SynthesisTarget>} synthTargets Synthesis target data for
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
  steelPath: require('./data/steelPath.json'),
};
/* eslint-enable global-require */

const bundle = {
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
  bundle[locale] = {
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
    steelPath: safeRequire(`./data/${locale}/steelPath.json`, []),
  };
});

locales.push('en');

module.exports = bundle;
