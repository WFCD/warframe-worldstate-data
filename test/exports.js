const chai = require('chai');

chai.should();

const wsData = require('../exports');

describe('worldState-data', () => {
  it('should be an object', () => {
    wsData.should.be.an('object');
  });

  it('should have conclave data', () => {
    wsData.should.have.property('conclave');
    wsData.conclave.should.not.be.empty;
  });

  it('should have events data', () => {
    wsData.should.have.property('events');
    wsData.events.should.not.be.empty;
  });

  it('should have factions data', () => {
    wsData.should.have.property('factions');
    wsData.factions.should.not.be.empty;
  });

  it('should have fissureModifiers data', () => {
    wsData.should.have.property('fissureModifiers');
    wsData.fissureModifiers.should.not.be.empty;
  });

  it('should have languages data', () => {
    wsData.should.have.property('languages');
    wsData.languages.should.not.be.empty;
  });

  it('should have missionTypes data', () => {
    wsData.should.have.property('missionTypes');
    wsData.missionTypes.should.not.be.empty;
  });

  it('should have operationTypes data', () => {
    wsData.should.have.property('operationTypes');
    wsData.operationTypes.should.not.be.empty;
  });

  it('should have persistentEnemy data', () => {
    wsData.should.have.property('persistentEnemy');
    wsData.persistentEnemy.should.not.be.empty;
  });

  it('should have solNodes data', () => {
    wsData.should.have.property('solNodes');
    wsData.solNodes.should.not.be.empty;
  });

  it('should have sortie data', () => {
    wsData.should.have.property('arcanes');
    wsData.sortie.should.not.be.empty;
  });

  it('should have syndicates data', () => {
    wsData.should.have.property('syndicates');
    wsData.syndicates.should.not.be.empty;
  });

  it('should have tutorials data', () => {
    wsData.should.have.property('tutorials');
    wsData.tutorials.should.not.be.empty;
  });

  it('should have upgradeTypes data', () => {
    wsData.should.have.property('upgradeTypes');
    wsData.upgradeTypes.should.not.be.empty;
  });

  it('should have warframes data', () => {
    wsData.should.have.property('warframes');
    wsData.warframes.should.not.be.empty;
  });

  it('should have weapons data', () => {
    wsData.should.have.property('weapons');
    wsData.weapons.should.not.be.empty;
  });
});
