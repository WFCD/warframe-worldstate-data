import * as chai from 'chai';
import chaiJson from 'chai-json';
import chaiJsonSchema from 'chai-json-schema-ajv';

import tutorials from '../data/tutorials.json' assert { type: 'json' };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const tutorialsSchema = {
  definitions: {
    tutorial: {
      type: 'object',
      properties: {
        regex: { type: 'string' },
        name: { type: 'string' },
        url: { type: 'string', format: 'uri' },
      },
      required: ['regex', 'name', 'url'],
    },
  },
  type: 'array',
  items: { $ref: '#/definitions/tutorial' },
};

describe('tutorials.json', () => {
  it('should be a valid JSON file', () => {
    './data/tutorials.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    tutorials.should.be.jsonSchema(tutorialsSchema);
  });
});
