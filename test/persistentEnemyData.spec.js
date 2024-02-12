import * as chai from 'chai';
import chaiJson from 'chai-json';
import chaiJsonSchema from 'chai-json-schema-ajv';

import persistentEnemyData from '../data/persistentEnemyData.json' assert { type: 'json' };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

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
    persistentEnemyData.should.be.jsonSchema(persistentEnemyDataSchema);
  });
});
