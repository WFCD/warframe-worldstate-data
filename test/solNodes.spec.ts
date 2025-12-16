import * as chai from 'chai';
import chaiJson from 'chai-json';
import chaiJsonSchema from 'chai-json-schema-ajv';

import solNodes from '../data/solNodes.json' with { type: 'json' };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const solNodesSchema = {
  definitions: {
    solNodeEnemy: {
      type: 'string',
      enum: [
        'Anarch',
        'Corpus',
        'Corrupted',
        'Crossfire',
        'Grineer',
        'Infested',
        'Orokin',
        'Sentient',
        'Tenno',
        'Duviri',
        'The Murmur',
      ],
    },
    solNodeType: {
      type: 'string',
      enum: [
        'Alchemy',
        'Ancient Retribution',
        'Arena',
        'Ascension',
        'Assassination',
        'Assault',
        'Capture',
        'Conclave',
        'Dark Sector Defection',
        'Dark Sector Defense',
        'Dark Sector Disruption',
        'Dark Sector Excavation',
        'Dark Sector Sabotage',
        'Dark Sector Survival',
        'Defense',
        'Disruption',
        'Excavation',
        'Extermination (Archwing)',
        'Extermination',
        'Free Roam',
        'Hijack',
        'Hive',
        'Hive Sabotage',
        'Infested Salvage',
        'Interception',
        'Interception (Archwing)',
        'Mirror Defense',
        'Mobile Defense',
        'Mobile Defense (Archwing)',
        'Netracells',
        'Orokin Sabotage',
        'Orphix',
        'Pursuit (Archwing)',
        'Relay',
        'Rescue',
        'Rush (Archwing)',
        'Sabotage',
        'Sabotage (Archwing)',
        'Skirmish',
        'Spy',
        'Survival',
        'The Perita Rebellion',
        'Void Armageddon',
        'Void Cascade',
        'Void Flood',
        'Volatile',
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
    'Node\\d|HUB\\d?$|^/Lotus': { $ref: '#/definitions/solNode' },
  },
};

describe('solNodes.json', () => {
  it('should be a valid JSON file', () => {
    './data/solNodes.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    solNodes.should.be.jsonSchema(solNodesSchema);
  });
});
