import * as chai from 'chai';
import chaiJson from 'chai-json';
import chaiJsonSchema from 'chai-json-schema-ajv';

import archonShards from '../data/archonShards.json' with { type: 'json' };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const archonShardScheme = {
  definitions: {
    shard: {
      type: 'object',
      properties: {
        value: { type: 'string' },
        upgradeTypes: {
          type: 'object',
          properties: {
            value: { type: 'string' },
          },
        },
      },
    },
  },
};

describe('archonShards.json', () => {
  it('should be a valid JSON file', () => {
    './data/archonShards.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    archonShards.should.be.jsonSchema(archonShardScheme);
  });
});
