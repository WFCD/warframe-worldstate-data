import safeImport from './safeImport';
import { Arcane, ArchonShard, Conclave, Events, SolNode, SortieData, SteelPath, SynthesisTarget } from './types';

export type Locale = 'de' | 'en' | 'es' | 'fr' | 'it' | 'ko' | 'pl' | 'pt' | 'ru' | 'zh' | 'cs' | 'sr' | 'uk';

const locales: Locale[] = ['de', 'es', 'fr', 'it', 'ko', 'pl', 'pt', 'ru', 'zh', 'cs', 'sr', 'uk'];

/**
 * Bundles all the data for a particular language
 */
export interface WorldstateLangBundle {
  /**
   * Deprecated: Array of arcane data
   */
  arcanes: Arcane[];
  /**
   * Data for Archon shard colors
   */
  archonShards: Record<string, ArchonShard>;
  /**
   * Data for translating PvP categories and types
   */
  conclave: Conclave;
  /**
   * Deprecated: Data for converting event tags to useable event data.
   * Deprecated in favor of keeping values in languages.json
   */
  events: Events;
  /**
   * Faction universal name to plain-usage name
   */
  factions: Record<string, { value: string }>;
  /**
   * Map of fissures to "Warframeified" tier names and numbers
   */
  fissureModifiers: Record<string, { value: string; num: number }>;
  /**
   * Map of "internal" Warframe strings to useable language strings
   */
  languages: Record<string, { value: string; desc: string }>;
  /**
   * Map of Mission Type identifiers to their corresponding values
   */
  missionTypes: Record<string, { value: string }>;
  /**
   * Global modifiers for applying operations to things like
   * credits, affinity, etc.
   */
  operationTypes: Record<string, { value: string; symbol: string }>;
  /**
   * Region mapping for indicies to planets
   */
  persistentEnemy: { regions: string[] };
  /**
   * Nodes in the Sol system, with enemy type and node information
   */
  solNodes: Record<string, SolNode>;
  /**
   * Sortie-specific mapping for modifier type, description, and boss
   */
  sortie: SortieData;
  /**
   * Steel Path mission type translations
   */
  steelPath: SteelPath;
  /**
   * Syndicate data
   */
  syndicates: Record<string, { name: string }>;
  /**
   * Synthesis target data for optimal locations to find targets.
   */
  synthTargets: SynthesisTarget[];
  /**
   * Official tutorials.
   * Not many have been released in a long time.
   */
  tutorials: { regex: string; name: string; url: string }[];
  /**
   * Global upgrade types that are modified by #operationTypes
   */
  upgradeTypes: Record<string, { value: string }>;
}

const makeBundle = async () => {
  /**
   * English United States translations bundle,
   *  default translations
   * @type {WorldstateLangBundle}
   */
  const enUS: WorldstateLangBundle = {
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

  type WorldstateData = WorldstateLangBundle & {
    [K in Locale]?: WorldstateLangBundle;
  } & { locales: Locale[] };

  const bundle: WorldstateData = {
    en: enUS,
    ...enUS,
    locales
  };

  // eslint-disable-next-line no-restricted-syntax
  for await (const locale of locales) {
    /**
     * Translations bundle for $locale
     * @type {WorldstateLangBundle}
     */
    bundle[locale] = {
      arcanes: await safeImport(`./data/${locale}/arcanes.json`, enUS.arcanes),
      archonShards: await safeImport(`./data/${locale}/archonShards.json`, enUS.archonShards),
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
