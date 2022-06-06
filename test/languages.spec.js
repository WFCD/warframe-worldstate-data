'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

const languagesSchema = {
  definitions: {
    language: {
      type: 'object',
      properties: {
        value: { type: 'string' },
        desc: { type: 'string' },
      },
      required: ['value'],
    },
  },
  type: 'object',
  patternProperties: {
    '^/ee|^/lotus|^[0-9a-z]+$': { $ref: '#/definitions/language' },
  },
};

describe('languages.json', () => {
  it('should be a valid JSON file', () => {
    './data/languages.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/languages.json').should.be.jsonSchema(languagesSchema);
  });
});
