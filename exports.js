import safeImport from './safeImport.js';

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
 * Steel Path Offering
 * @typedef {Object} SteelPathOffering
 * @property {string} name The item being offered
 * @property {string} cost The cost of the item
 */
/**
 * Steel Path
 * @typedef {Object} SteelPath
 * @property {Array<SteelPathOffering>} rotation A list of offerings for the Steel Path
 * @property {Array<SteelPathOffering>} evergreen Constantly available list of items
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
 * @property {Object<string, Record<'name', string>>} syndicates Syndicate data
 * @property {SteelPath} steelPath Steel Path mission type translations
 */

const makeBundle = async () => {
  /**
   * English United States translations bundle,
   *  default translations
   * @type {WorldstateLangBundle}
   */
  const enUS = {
    arcanes: await safeImport('./data/arcanes.json'),
    archonShards: await safeImport('./data/archonShards.json'),
    conclave: await safeImport('./data/conclaveData.json'),
    events: await safeImport('./data/eventsData.json'),
    factions: await safeImport('./data/factionsData.json'),
    fissureModifiers: await safeImport('./data/fissureModifiers.json'),
    languages: await safeImport('./data/languages.json'),
    missionTypes: await safeImport('./data/missionTypes.json'),
    operationTypes: await safeImport('./data/operationTypes.json'),
    persistentEnemy: await safeImport('./data/persistentEnemyData.json'),
    solNodes: await safeImport('./data/solNodes.json'),
    sortie: await safeImport('./data/sortieData.json'),
    syndicates: await safeImport('./data/syndicatesData.json'),
    tutorials: await safeImport('./data/tutorials.json'),
    upgradeTypes: await safeImport('./data/upgradeTypes.json'),
    synthTargets: await safeImport('./data/synthTargets.json'),
    steelPath: await safeImport('./data/steelPath.json'),
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

  // eslint-disable-next-line no-restricted-syntax
  for await (const locale of locales) {
    /**
     * Translations bundle for $locale
     * @type {WorldstateLangBundle}
     */
    bundle[locale] = {
      arcanes: await safeImport(`./data/${locale}/arcanes.json`, enUS.arcanes),
      archonShards: await safeImport('./data/archonShards.json', enUS.archonShards),
      conclave: await safeImport(`./data/${locale}/conclaveData.json`, enUS.conclave),
      events: await safeImport(`./data/${locale}/eventsData.json`, enUS.events),
      factions: await safeImport(`./data/${locale}/factionsData.json`, enUS.factions),
      fissureModifiers: await safeImport(`./data/${locale}/fissureModifiers.json`, enUS.fissureModifiers),
      languages: await safeImport(`./data/${locale}/languages.json`, enUS.languages),
      missionTypes: await safeImport(`./data/${locale}/missionTypes.json`, enUS.missionTypes),
      operationTypes: await safeImport(`./data/${locale}/operationTypes.json`, enUS.operationTypes),
      persistentEnemy: await safeImport(`./data/${locale}/persistentEnemyData.json`, enUS.persistentEnemy),
      solNodes: await safeImport(`./data/${locale}/solNodes.json`, enUS.solNodes),
      sortie: await safeImport(`./data/${locale}/sortieData.json`, enUS.sortie),
      syndicates: await safeImport(`./data/${locale}/syndicatesData.json`, enUS.syndicates),
      tutorials: await safeImport(`./data/${locale}/tutorials.json`, enUS.tutorials),
      upgradeTypes: await safeImport(`./data/${locale}/upgradeTypes.json`, enUS.upgradeTypes),
      synthTargets: await safeImport(`./data/${locale}/synthTargets.json`, enUS.synthTargets),
      steelPath: await safeImport(`./data/${locale}/steelPath.json`, enUS.steelPath),
    };
  }

  locales.push('en');
  return bundle;
};

export default await makeBundle();
