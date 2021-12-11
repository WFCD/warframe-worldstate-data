# Warframe Worldstate Data

[![Supported by the Warframe Community Developers](https://img.shields.io/badge/Warframe_Comm_Devs-supported-blue.svg?color=2E96EF&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOTgiIGhlaWdodD0iMTczIiB2aWV3Qm94PSIwIDAgMjk4IDE3MyI%2BPHBhdGggZD0iTTE4NSA2N2MxNSA4IDI4IDE2IDMxIDE5czIzIDE4LTcgNjBjMCAwIDM1LTMxIDI2LTc5LTE0LTctNjItMzYtNzAtNDUtNC01LTEwLTEyLTE1LTIyLTUgMTAtOSAxNC0xNSAyMi0xMyAxMy01OCAzOC03MiA0NS05IDQ4IDI2IDc5IDI2IDc5LTMwLTQyLTEwLTU3LTctNjBsMzEtMTkgMzYtMjIgMzYgMjJ6TTU1IDE3M2wtMTctM2MtOC0xOS0yMC00NC0yNC01MC01LTctNy0xMS0xNC0xNWwxOC0yYzE2LTMgMjItNyAzMi0xMyAxIDYgMCA5IDIgMTQtNiA0LTIxIDEwLTI0IDE2IDMgMTQgNSAyNyAyNyA1M3ptMTYtMTFsLTktMi0xNC0yOWEzMCAzMCAwIDAgMC04LThoN2wxMy00IDQgN2MtMyAyLTcgMy04IDZhODYgODYgMCAwIDAgMTUgMzB6bTE3MiAxMWwxNy0zYzgtMTkgMjAtNDQgMjQtNTAgNS03IDctMTEgMTQtMTVsLTE4LTJjLTE2LTMtMjItNy0zMi0xMy0xIDYgMCA5LTIgMTQgNiA0IDIxIDEwIDI0IDE2LTMgMTQtNSAyNy0yNyA1M3ptLTE2LTExbDktMiAxNC0yOWEzMCAzMCAwIDAgMSA4LThoLTdsLTEzLTQtNCA3YzMgMiA3IDMgOCA2YTg2IDg2IDAgMCAxLTE1IDMwem0tNzktNDBsLTYtNmMtMSAzLTMgNi02IDdsNSA1YTUgNSAwIDAgMSAyIDB6bS0xMy0yYTQgNCAwIDAgMSAxLTJsMi0yYTQgNCAwIDAgMSAyLTFsNC0xNy0xNy0xMC04IDcgMTMgOC0yIDctNyAyLTgtMTItOCA4IDEwIDE3em0xMiAxMWE1IDUgMCAwIDAtNC0yIDQgNCAwIDAgMC0zIDFsLTMwIDI3YTUgNSAwIDAgMCAwIDdsNCA0YTYgNiAwIDAgMCA0IDIgNSA1IDAgMCAwIDMtMWwyNy0zMWMyLTIgMS01LTEtN3ptMzkgMjZsLTMwLTI4LTYgNmE1IDUgMCAwIDEgMCAzbDI2IDI5YTEgMSAwIDAgMCAxIDBsNS0yIDItMmMxLTIgMy01IDItNnptNS00NWEyIDIgMCAwIDAtNCAwbC0xIDEtMi00YzEtMy01LTktNS05LTEzLTE0LTIzLTE0LTI3LTEzLTIgMS0yIDEgMCAyIDE0IDIgMTUgMTAgMTMgMTNhNCA0IDAgMCAwLTEgMyAzIDMgMCAwIDAgMSAxbC0yMSAyMmE3IDcgMCAwIDEgNCAyIDggOCAwIDAgMSAyIDNsMjAtMjFhNyA3IDAgMCAwIDEgMSA0IDQgMCAwIDAgNCAwYzEtMSA2IDMgNyA0aC0xYTMgMyAwIDAgMCAwIDQgMiAyIDAgMCAwIDQgMGw2LTZhMyAzIDAgMCAwIDAtM3oiIGZpbGw9IiMyZTk2ZWYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg%3D%3D)](https://github.com/WFCD/banner/blob/master/PROJECTS.md)

A repository of Warframe data for use with warframe-worldstate-parser

[![ npm version](https://img.shields.io/npm/v/warframe-worldstate-data.svg)](https://www.npmjs.com/package/warframe-worldstate-data)
[![Crowdin](https://d322cqt584bo4o.cloudfront.net/genesis-parser/localized.svg)](https://crowdin.com/project/genesis-parser)
[![Discord](https://img.shields.io/discord/256087517353213954.svg?logo=discord)](https://discord.gg/jGZxH9f)

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

| JSON                       |    Data Accessor    | Description                                                                                                  |
|:---------------------------|:-------------------:|:-------------------------------------------------------------------------------------------------------------|
| `conclaveData.json`        |     `conclave`      | Stores conclave data for modes and categories                                                                | 
| `eventsData.json`          |      `events`       | Stores event strings. May be deprecated when languages.json is more complete.                                |
| `factionsData.json`        |     `factions`      | Stores faction strings for identifying each faction                                                          |
| `fissureModifiers.json`    | `fissureModifiers`  | Fissure tier assignments corresponding to era names                                                          |      
| `languages.json`           |     `languages`     | General string storage for converting worldstate strings to display strings                                  |
| `missionTypes.json`        |   `missionTypes`    | Types of missions, ex.: `MT_EXCAVATE` corresponds to `Excavation`                                            | 
| `operationTypes.json`      |  `operationTypes`   | Operation string conversions for global modifiers                                                            |    
| `persistentEnemyData.json` |  `persistentEnemy`  | Persistent enemy data mappings. Currently only acolytes.                                                     |      
| `solNodes.json`            |     `solNodes`      | Data for each node in the solar system. Currently includes node name, base enemy type, and base mission type |
| `syndicateData.json`       |    `syndicates`     | Mappings for worldstate syndicate names to displayable syndicate names.                                      |
| `upgradeTypes.json`        |   `upgradeTypes`    | Upgrade types for global modifiers.                                                                          |
