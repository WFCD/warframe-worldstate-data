# Warframe Worldstate Data

[![Supported by Warframe Community Developers](https://warframestat.us/wfcd.png)](https://github.com/WFCD "Supported by Warframe Community Developers")

A repository of Warframe data for use with warframe-worldstate-parser

## Installation

**Published version:**
```bash
npm i -S warframe-worldstate-data@latest
```

**Recommended version:**
```bash
npm i -S git://github.com/wfcd/warframe-worldstate-data.git
```

## Usage

```javascript
const worldstateData = require('warframe-worldstate-data');
const nodes = worldstateData.solNodes;

const erpo = nodes['SolNode903'];
const {enemy, value, type} = erpo;
```

## Available data and formatting

JSON | Data Accessor | Description
--- |--- | ---
`conclaveData.json` | `conclave` | Stores conclave data for modes and categories
`eventsData.json` | `events` | Stores event strings. May be deprecated when languages.json is more complete.
`factionsData.json`|`factions`|Stores faction strings for identifying each faction
`fissureModifiers.json`|`fissureModifiers`|Fissure tier assignments corresponding to era names
`languages.json`|`languages`|General string storage for converting worldstate strings to display strings
`missionTypes.json`|`missionTypes`|Types of missions, ex.: `MT_EXCAVATE` corresponds to `Excavation`
`operationTypes.json`|`operationTypes`|Operation string conversions for global modifiers
`persistentEnemyData.json`|`persistentEnemy`|Persistent enemy data mappings. Currently only acolytes.
`solNodes.json`|`solNodes`|Data for each node in the solar system. Currently includes node name, base enemy type, and base mission type
`syndicateData.json`|`syndicates`|Mappings for worldstate syndicate names to displayable syndicate names.
`upgradeTypes.json`|`upgradeTypes`|Upgrade types for global modifiers.
