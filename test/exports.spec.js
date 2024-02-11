import * as chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

import safeImport from '../safeImport.js';
import wsData from '../exports.js';

chai.should();
chai.use(sinonChai);

const { expect } = chai;

describe('safeImport', () => {
  beforeEach(() => {
    sinon.spy(console, 'debug');
  });

  afterEach(() => {
    console.debug.restore();
    delete process.env.LOG_LEVEL;
  });

  it('should log if debug is provided and no file exists', async () => {
    process.env.LOG_LEVEL = 'DEBUG';
    await safeImport('poop.js');
    // check that console.debug was called
    console.debug.should.have.been.called;
  });

  it('should not log if debug is non-existant and no file exists', async () => {
    await safeImport('poop.js');
    // check that console.debug was called
    console.debug.should.not.have.been.called;
  });

  it('should not log if log level is error and no file exists', async () => {
    process.env.LOG_LEVEL = 'ERROR';
    await safeImport('poop.js');
    // check that console.debug was called
    console.debug.should.not.have.been.called;
  });
});

describe('Worldstate Data', () => {
  it('should be an object', () => {
    wsData.should.be.an('object');
  });

  it('should have conclave data', () => {
    wsData.should.have.property('conclave');
    expect(wsData.conclave).to.exist;
    expect(wsData.conclave).to.not.be.empty;
  });

  it('should have events data', () => {
    wsData.should.have.property('events');
    expect(wsData.events).to.exist;
    expect(wsData.events).to.not.be.empty;
  });

  it('should have factions data', () => {
    wsData.should.have.property('factions');
    expect(wsData.factions).to.exist;
    expect(wsData.factions).to.not.be.empty;
  });

  it('should have fissureModifiers data', () => {
    wsData.should.have.property('fissureModifiers');
    expect(wsData.fissureModifiers).to.exist;
    expect(wsData.fissureModifiers).to.not.be.empty;
  });

  it('should have languages data', () => {
    wsData.should.have.property('languages');
    expect(wsData.languages).to.exist;
    expect(wsData.languages).to.not.be.empty;
  });

  it('should have missionTypes data', () => {
    wsData.should.have.property('missionTypes');
    expect(wsData.missionTypes).to.exist;
    expect(wsData.missionTypes).to.not.be.empty;
  });

  it('should have operationTypes data', () => {
    wsData.should.have.property('operationTypes');
    expect(wsData.operationTypes).to.exist;
    expect(wsData.operationTypes).to.not.be.empty;
  });

  it('should have persistentEnemy data', () => {
    wsData.should.have.property('persistentEnemy');
    expect(wsData.persistentEnemy).to.exist;
    expect(wsData.persistentEnemy).to.not.be.empty;
  });

  it('should have solNodes data', () => {
    wsData.should.have.property('solNodes');
    expect(wsData.solNodes).to.exist;
    expect(wsData.solNodes).to.not.be.empty;
  });

  it('should have sortie data', () => {
    wsData.should.have.property('arcanes');
    expect(wsData.sortie).to.exist;
    expect(wsData.sortie).to.not.be.empty;
  });

  it('should have syndicates data', () => {
    wsData.should.have.property('syndicates');
    expect(wsData.syndicates).to.exist;
    expect(wsData.syndicates).to.not.be.empty;
  });

  it('should have tutorials data', () => {
    wsData.should.have.property('tutorials');
    expect(wsData.tutorials).to.exist;
    expect(wsData.tutorials).to.not.be.empty;
  });

  it('should have upgradeTypes data', () => {
    wsData.should.have.property('upgradeTypes');
    expect(wsData.upgradeTypes).to.exist;
    expect(wsData.upgradeTypes).to.not.be.empty;
  });
});
