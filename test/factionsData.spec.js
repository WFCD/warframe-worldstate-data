'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

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
    require('../data/factionsData.json').should.be.jsonSchema(factionsDataSchema);
  });
});
