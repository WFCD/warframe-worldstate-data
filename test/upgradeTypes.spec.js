'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

const upgradeTypesSchema = {
  type: 'object',
  patternProperties: {
    '^GAMEPLAY_': {
      type: 'object',
      properties: {
        value: { type: 'string' },
      },
      required: ['value'],
    },
  },
};

describe('upgradeTypes.json', () => {
  it('should be a valid JSON file', () => {
    './data/upgradeTypes.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/upgradeTypes.json').should.be.jsonSchema(upgradeTypesSchema);
  });
});
