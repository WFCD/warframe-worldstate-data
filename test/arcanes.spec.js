'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

const arcanesSchema = {
  definitions: {
    rarity: {
      type: 'string',
      enum: [
        'Common',
        'Uncommon',
        'Rare',
      ],
    },
  },
  type: 'array',
  items: {
    type: 'object',
    properties: {
      regex: { type: 'string' },
      name: { type: 'string' },
      effect: { type: 'string' },
      rarity: { $ref: '#/definitions/rarity' },
      location: { type: 'string' },
      thumbnail: { type: 'string', foramt: 'uri' },
      info: { type: 'string', format: 'uri' },
    },
    required: [
      'regex',
      'name',
      'effect',
      'rarity',
      'location',
      'thumbnail',
      'info',
    ],
  },
};

describe('arcanes.json', () => {
  it('should be a valid JSON file', () => {
    './data/arcanes.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/arcanes.json').should.be.jsonSchema(arcanesSchema);
  });
});
