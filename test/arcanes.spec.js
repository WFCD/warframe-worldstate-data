import * as chai from 'chai';
import chaiJson from 'chai-json';
import chaiJsonSchema from 'chai-json-schema-ajv';

import arcanes from '../data/arcanes.json' assert { type: 'json' };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const arcanesSchema = {
  definitions: {
    rarity: {
      type: 'string',
      enum: ['Common', 'Uncommon', 'Rare'],
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
    required: ['regex', 'name', 'effect', 'rarity', 'location', 'thumbnail', 'info'],
  },
};

describe('arcanes.json', () => {
  it('should be a valid JSON file', () => {
    './data/arcanes.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    arcanes.should.be.jsonSchema(arcanesSchema);
  });
});
