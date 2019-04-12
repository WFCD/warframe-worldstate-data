'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

const solNodesSchema = {
  definitions: {
    solNodeEnemy: {
      type: 'string',
      enum: [
        'Corpus',
        'Corrupted',
        'Crossfire',
        'Grineer',
        'Infested',
        'Orokin',
        'Sentient',
        'Tenno',
      ],
    },
    solNodeType: {
      type: 'string',
      enum: [
        'Ancient Retribution',
        'Arena',
        'Assassinate',
        'Assassination',
        'Assault',
        'Capture',
        'Conclave',
        'Dark Sector Defection',
        'Dark Sector Defense',
        'Dark Sector Excavation',
        'Dark Sector Sabotage',
        'Dark Sector Survival',
        'Defense',
        'Excavation',
        'Exterminate',
        'Exterminate (Archwing)',
        'Extermination',
        'Free Roam',
        'Hijack',
        'Hive',
        'Hive Sabotage',
        'Interception',
        'Interception (Archwing)',
        'Mobile Defense',
        'Mobile Defense (Archwing)',
        'Orokin Sabotage',
        'Pursuit (Archwing)',
        'Relay',
        'Rescue',
        'Rush (Archwing)',
        'Sabotage',
        'Sabotage (Archwing)',
        'Spy',
        'Survival',
      ],
    },
    solNode: {
      type: 'object',
      properties: {
        value: { type: 'string' },
        enemy: { $ref: '#/definitions/solNodeEnemy' },
        type: { $ref: '#/definitions/solNodeType' },
      },
      required: ['value'],
    },
  },
  type: 'object',
  patternProperties: {
    'Node\\d|HUB$|^/Lotus': { $ref: '#/definitions/solNode' },
  },
};

describe('solNodes.json', () => {
  it('should be a valid JSON file', () => {
    './data/solNodes.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/solNodes.json').should.be.jsonSchema(solNodesSchema);
  });
});
