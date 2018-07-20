const chai = require('chai');
chai.use(require('chai-json'));
chai.use(require('chai-json-schema'));

chai.should();
chai.tv4.banUnknown = true;

const weaponsSchema = {
  definitions: {
    damageNumber: { type: 'number' },
    noise: {
      type: 'string',
      enum: ['Alarming', 'Silent'],
    },
    pellet: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        count: { type: 'integer' },
      },
      required: ['name', 'count'],
    },
    polarity: {
      type: 'string',
      enum: ['madurai', 'naramon', 'vazarin', 'umbra', 'unairu', 'zenurik'],
    },
    projectile: {
      type: 'string',
      enum: ['Discharge', 'Hitscan', 'Hit-Scan', 'Projectile', 'Thrown'],
    },
    secondary: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        pellet: { $ref: '#/definitions/pellet' },
        damage: { type: 'string' },
        speed: { type: 'number' },
        crit_chance: { type: 'number' },
        crit_mult: { type: 'number' },
        status_chance: { type: 'number' },
        shot_type: { type: 'string' },
        shot_speed: { type: ['integer', 'null'] },
        charge_time: { type: 'number' },
        impact: { $ref: '#/definitions/damageNumber' },
        slash: { $ref: '#/definitions/damageNumber' },
        puncture: { $ref: '#/definitions/damageNumber' },
        blast: { $ref: '#/definitions/damageNumber' },
        electricity: { $ref: '#/definitions/damageNumber' },
        toxin: { $ref: '#/definitions/damageNumber' },
        corrosive: { $ref: '#/definitions/damageNumber' },
      },
    },
    secondaryArea: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        status_chance: { type: 'number' },
        pellet: { $ref: '#/definitions/pellet' },
        damage: { type: 'string' },
        radius: { type: 'integer' },
        speed: { type: 'number' },
        duration: { type: 'integer' },
        blast: { $ref: '#/definitions/damageNumber' },
        heat: { $ref: '#/definitions/damageNumber' },
        radiation: { $ref: '#/definitions/damageNumber' },
      },
    },
  },
  type: 'array',
  items: {
    type: 'object',
    properties: {
      regex: { type: 'string' },
      name: { type: 'string' },
      url: { type: 'string', format: 'uri' },
      mr: { type: 'integer' },
      type: { type: 'string' },
      subtype: { type: 'string' },
      riven_disposition: { type: 'integer' },
      crit_chance: { type: 'number' },
      crit_mult: { type: 'number' },
      status_chance: { type: 'number' },
      polarities: { type: 'array', items: { $ref: '#/definitions/polarity', unique: true } },
      thumbnail: { type: 'string', format: 'uri' },
      speed: { type: 'number' },
      rate: { type: 'number' },
      damage: { type: ['number', 'string'] },
      slide: { type: 'string' },
      jump: { type: 'string' },
      wall: { type: 'string' },
      channeling: { type: 'number' },
      stancePolarity: { $ref: '#/definitions/polarity' },
      noise: { $ref: '#/definitions/noise' },
      ammo: { type: 'integer' },
      accuracy: { type: ['number', 'string'] },
      magazine: { type: 'integer' },
      reload: { type: 'number' },
      projectile: { $ref: '#/definitions/projectile' },
      trigger: { type: 'string' },
      flight: {
        anyOf: [
          { type: 'integer' },
          { type: 'string', value: '???' },
        ],
      },
      impact: { $ref: '#/definitions/damageNumber' },
      slash: { $ref: '#/definitions/damageNumber' },
      puncture: { $ref: '#/definitions/damageNumber' },
      electricity: { $ref: '#/definitions/damageNumber' },
      blast: { $ref: '#/definitions/damageNumber' },
      toxin: { $ref: '#/definitions/damageNumber' },
      radiation: { $ref: '#/definitions/damageNumber' },
      cold: { $ref: '#/definitions/damageNumber' },
      heat: { $ref: '#/definitions/damageNumber' },
      corrosive: { $ref: '#/definitions/damageNumber' },
      magnetic: { $ref: '#/definitions/damageNumber' },
      viral: { $ref: '#/definitions/damageNumber' },
      secondary: { $ref: '#/definitions/secondary' },
      secondaryArea: { $ref: '#/definitions/secondaryArea' },
    },
    required: [
      'regex',
      'name',
      'url',
      'mr',
      'type',
      'polarities',
      'damage',
    ],
  },
};

describe('weapons.json', () => {
  it('should be a valid JSON file', () => {
    './data/weapons.json'.should.be.a.jsonFile();
  });

  it('should adhere to the schema', () => {
    require('../data/weapons.json').should.be.jsonSchema(weaponsSchema);
  });
});
