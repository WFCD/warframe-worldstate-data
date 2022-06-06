'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

const missionTypesSchema = {
  definitions: {
    missionType: {
      type: 'object',
      properties: {
        value: { type: 'string' },
      },
      require: ['value'],
    },
  },
  type: 'object',
  patternProperties: {
    '^MT_': { $ref: '#/definitions/missionType' },
  },
};

describe('missionTypes.json', () => {
  it('should be a valid JSON file', () => {
    './data/missionTypes.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/missionTypes.json').should.be.jsonSchema(missionTypesSchema);
  });
});
