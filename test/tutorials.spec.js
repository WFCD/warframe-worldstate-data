'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

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
    require('../data/tutorials.json').should.be.jsonSchema(tutorialsSchema);
  });
});
