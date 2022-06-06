'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

const persistentEnemyDataSchema = {
  definitions: {
    region: { type: 'string' },
  },
  type: 'object',
  properties: {
    regions: {
      type: 'array',
      items: { $ref: '#/definitions/region' },
    },
  },
};

describe('persistentEnemyData.json', () => {
  it('should be a valid JSON file', () => {
    './data/persistentEnemyData.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/persistentEnemyData.json').should.be.jsonSchema(persistentEnemyDataSchema);
  });
});
