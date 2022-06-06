'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

const syndicatesDataSchema = {
  type: 'object',
  patternProperties: {
    Syndicate$: {
      type: 'object',
      properties: {
        name: { type: 'string' },
      },
      required: ['name'],
    },
  },
};

describe('syndicatesData.json', () => {
  it('should be a valid JSON file', () => {
    './data/syndicatesData.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/syndicatesData.json').should.be.jsonSchema(syndicatesDataSchema);
  });
});
