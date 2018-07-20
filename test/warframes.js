const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

const warframesSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      regex: { type: 'string' },
      name: { type: 'string' },
      url: { type: 'string', format: 'uri' },
      mr: { type: 'string' },
      health: { type: 'string' },
      shield: { type: 'string' },
      armor: { type: 'string' },
      power: { type: 'string' },
      speed: { type: 'string' },
      conclave: { type: 'string' },
      polarities: { type: 'array', items: { type: 'string' } },
      aura: { type: 'string' },
      description: { type: 'string' },
      info: { type: 'string', format: 'uri' },
      thumbnail: { type: 'string', format: 'uri' },
      location: { type: 'string' },
      color: { type: 'integer' },
      prime_mr: { type: 'string' },
      prime_health: { type: 'string' },
      prime_shield: { type: 'string' },
      prime_armor: { type: 'string' },
      prime_speed: { type: 'string' },
      prime_power: { type: 'string' },
      prime_conclave: { type: 'string' },
      prime_polarities: { type: 'array', items: { type: 'string' } },
      prime_aura: { type: 'string' },
      prime_url: { type: 'string', format: 'uri' },
    },
    required: [
      'regex',
      'name',
      'url',
      'health',
      'shield',
      'armor',
      'power',
      'speed',
      'polarities',
      'aura',
    ],
  },
};

describe('warframes.json', () => {
  it('should be a valid JSON file', () => {
    './data/warframes.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/warframes.json').should.be.jsonSchema(warframesSchema);
  });
});
