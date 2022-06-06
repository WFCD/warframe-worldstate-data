'use strict';

const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnkown = true;

const eventsDataSchema = {
  definitions: {
    tag: {
      type: 'object',
      properties: {
        value: { type: 'string' },
      },
      required: ['value'],
    },
  },
  type: 'object',
  properties: {
    tags: {
      type: 'object',
      patternProperties: {
        Event: { $ref: '#/definitions/tag' },
      },
    },
    scoreVariables: {
      type: 'object',
      patternProperties: {
        Event: {
          type: 'object',
          properties: {
            value: {
              type: 'object',
              properties: {
                value: { type: 'string' },
              },
              required: ['value'],
            },
          },
          required: ['value'],
        },
      },
    },
    scoreMaxTags: {
      type: 'object',
      patternProperties: {
        Event: {
          type: 'object',
          properties: {
            value: {
              type: 'object',
              properties: {
                value: { type: 'string' },
              },
              required: ['value'],
            },
          },
          required: ['value'],
        },
      },
    },
  },
};

describe('eventsData.json', () => {
  it('should be a valid JSON file', () => {
    './data/eventsData.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/eventsData.json').should.be.jsonSchema(eventsDataSchema);
  });
});
