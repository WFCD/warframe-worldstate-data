'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

const sortieDataSchema = {
  definitions: {
    boss: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        faction: {
          type: 'string',
          enum: [
            'Corpus',
            'Corrupted',
            'Grineer',
            'Infestation',
          ],
        },
      },
      required: ['name', 'faction'],
    },
    region: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        missions: {
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'Assassination',
              'Defense',
              'Excavation',
              'Exterminate',
              'Hijack',
              'Hive',
              'Interception',
              'Mobile Defense',
              'Rescue',
              'Sabotage',
              'Spy',
              'Survival',
            ],
          },
        },
      },
      required: ['name', 'missions'],
    },
    endState: {
      type: 'object',
      properties: {
        bossName: { type: 'string' },
        regions: {
          type: 'array',
          items: { $ref: '#/definitions/region' },
        },
      },
      required: ['bossName', 'regions'],
    },
  },
  type: 'object',
  properties: {
    modifierTypes: {
      type: 'object',
      patternProperties: {
        '^SORTIE_MODIFIER_': { type: 'string' },
      },
    },
    modifierDescriptions: {
      type: 'object',
      patternProperties: {
        '^SORTIE_MODIFIER_': { type: 'string' },
      },
    },
    bosses: {
      type: 'object',
      patternProperties: {
        '^SORTIE_BOSS_': {
          $ref: '#/definitions/boss',
        },
      },
    },
    endStates: {
      type: 'array',
      items: { $ref: '#/definitions/endState' },
    },
    modifiers: {
      type: 'array',
      items: { type: 'string' },
    },
  },
};

describe('sortieData.json', () => {
  it('should be a valid JSON file', () => {
    './data/sortieData.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/sortieData.json').should.be.jsonSchema(sortieDataSchema);
  });
});
