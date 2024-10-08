import * as chai from 'chai';
import chaiJson from 'chai-json';
import chaiJsonSchema from 'chai-json-schema-ajv';

import deepArchimedea from '../data/deepArchimedea.json' assert { type: 'json' };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const deepArchimedeaScheme = {
  definitions: {
    personalModifiers: {
      type: 'object',
      properties: {
        modifier: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            description: { type: 'string' },
          },
        },
      },
    },
    conditions: {
      type: 'object',
      properties: {
        condition: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            description: { type: 'string' },
          },
        },
      },
    },
  },
};

describe('deepArchimedea.json', () => {
  it('should be a valid JSON file', () => {
    './data/deepArchimedea.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    deepArchimedea.should.be.jsonSchema(deepArchimedeaScheme);
  });
});
