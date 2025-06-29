import * as chai from 'chai';
import chaiJson from 'chai-json';
import chaiJsonSchema from 'chai-json-schema-ajv';

import fissureModifiers from '../data/fissureModifiers.json' with { type: 'json' };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const fissureModifiersSchema = {
  definitions: {
    modifier: {
      type: 'object',
      properties: {
        value: { type: 'string' },
        num: { type: 'integer' },
      },
    },
  },
  type: 'object',
  patternProperties: {
    '^VoidT': { $ref: '#/definitions/modifier' },
  },
};

describe('fissureModifiers.json', () => {
  it('should be a valid JSON file', () => {
    './data/fissureModifiers.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    fissureModifiers.should.be.jsonSchema(fissureModifiersSchema);
  });
});
