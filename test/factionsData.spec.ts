import * as chai from 'chai';
import chaiJson from 'chai-json';
import chaiJsonSchema from 'chai-json-schema-ajv';

import factionsData from '../data/factionsData.json' with { type: 'json' };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const factionsDataSchema = {
  definitions: {
    faction: {
      type: 'object',
      properties: {
        value: { type: 'string' },
      },
      required: ['value'],
    },
  },
  type: 'object',
  patternProperties: {
    '^FC_': { $ref: '#/definitions/faction' },
  },
};

describe('factionsData.json', () => {
  it('should be a valid JSON file', () => {
    './data/factionsData.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    factionsData.should.be.jsonSchema(factionsDataSchema);
  });
});
