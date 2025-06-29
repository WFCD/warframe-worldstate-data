import {use} from 'chai';
import chaiJson from 'chai-json';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

import arcanes from '../data/arcanes.json' with { type: 'json' };

use(chaiJson);

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
      thumbnail: { type: 'string', format: 'uri' },
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
    const ajv = new Ajv();
    addFormats(ajv, ['uri']);

    const validate = ajv.compile(arcanesSchema);
    validate(arcanes).should.be.true;
  });
});
