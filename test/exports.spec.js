'use strict';

/* eslint-disable no-console */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');

const wsData = require('../exports');

chai.should();
chai.use(sinonChai);

describe('safeRequire', () => {
  beforeEach(() => {
    sinon.spy(console, 'debug');
  });

  afterEach(() => {
    console.debug.restore();
    delete process.env.LOG_LEVEL;
  });

  it('should log if debug is provided and no file exists', () => {
    process.env.LOG_LEVEL = 'DEBUG';
    const safeRequire = require('../safeRequire');
    safeRequire('poop.js');
    // check that console.debug was called
    console.debug.should.have.been.called;
  });

  it('should not log if debug is non-existant and no file exists', () => {
    const safeRequire = require('../safeRequire');
    safeRequire('poop.js');
    // check that console.debug was called
    console.debug.should.not.have.been.called;
  });

  it('should not log if log level is error and no file exists', () => {
    process.env.LOG_LEVEL = 'ERROR';
    const safeRequire = require('../safeRequire');
    safeRequire('poop.js');
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
});
