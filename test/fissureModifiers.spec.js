'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

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
    require('../data/fissureModifiers.json').should.be.jsonSchema(fissureModifiersSchema);
  });
});
