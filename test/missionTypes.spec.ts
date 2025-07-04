import * as chai from 'chai';
import chaiJson from 'chai-json';
import chaiJsonSchema from 'chai-json-schema-ajv';

import missionTypes from '../data/missionTypes.json' with { type: 'json' };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const missionTypesSchema = {
  definitions: {
    missionType: {
      type: 'object',
      properties: {
        value: { type: 'string' },
      },
      required: ['value'],
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
    missionTypes.should.be.jsonSchema(missionTypesSchema);
  });
});
