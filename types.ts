export interface Arcane {
  regex: string;
  name: string;
  effect: string;
  rarity: string;
  location: string;
  thumbnail: string;
}

export interface ArchonShard {
  value: string;
  upgradeTypes: Record<string, { value: string }>;
}

export interface Conclave {
  modes: Record<string, { value: string }>;
  categories: Record<string, { value: string; description: string }>;
  challenges: Record<string, { title: string; description: string; standing: number }>;
  affectors: Record<string, { title: string; description: string; standing: number }>;
}

export interface Events {
  tags: Record<string, { value: string }>;
  scoreVariables: Record<string, { value: { value: string } }>;
  scoreMaxTags: Record<string, { value: { value: string } }>;
}

export interface SteelPath {
  rotation: SteelPathOffering[];
  evergreen: SteelPathOffering[];
}
interface SteelPathOffering {
  name: string;
  cost: string;
}

export interface SynthesisTarget {
  name: string;
  locations: SynthesisTargetLocation[];
}

interface SynthesisTargetLocation {
  last_verified: string;
  level: string;
  spawn_rate: string;
  mission: string;
  planet: string;
  type: string;
  faction: string;
}

export interface SolNode {
  value: string;
  enemy: string;
  type: string;
}

interface SortieEndState {
  bossName: string;
  regions: { name: string; missions: string[] }[];
}

export interface SortieData {
  modifierTypes: Record<string, string>;
  modifierDescriptions: Record<string, string>;
  bosses: Record<string, { name: string; faction: string }>;
  endStates: SortieEndState[];
  modifiers: string[];
}
