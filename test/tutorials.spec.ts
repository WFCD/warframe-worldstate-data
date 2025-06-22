import * as chai from 'chai';
import chaiJson from 'chai-json';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

import tutorials from '../data/tutorials.json' with { type: 'json' };

chai.use(chaiJson);
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
    const ajv = new Ajv();
    addFormats(ajv, ['uri']);

    const validate = ajv.compile(tutorialsSchema);
    validate(tutorials).should.be.true;
  });
});
