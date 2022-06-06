'use strict';

const chai = require('chai');
chai.use(require('chai-json'));

chai.should();
chai.tv4.banUnknown = true;

const operationTypesSchema = {
  definitions: {
    operationType: {
      type: 'object',
      properties: {
        value: { type: 'string' },
        symbol: { type: 'string' },
      },
      required: ['value'],
    },
  },
  type: 'object',
  patternProperties: {
    '.': { $ref: '#/definitions/operationType' },
  },
};

describe('operationTypes.json', () => {
  it('should be a valid JSON file', () => {
    './data/operationTypes.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/operationTypes.json').should.be.jsonSchema(operationTypesSchema);
  });
});
