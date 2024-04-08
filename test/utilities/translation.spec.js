import { expect, should } from 'chai';

import {
  archonShardColor,
  archonShardUpgradeType,
  conclaveCategory,
  conclaveChallenge,
  conclaveMode,
  faction,
  fissureModifier,
  fissureTier,
  languageDesc,
  languageString,
  missionType,
  node,
  nodeEnemy,
  nodeMissionType,
  operation,
  operationSymbol,
  region,
  sortieBoss,
  sortieFaction,
  sortieModDesc,
  sortieModifier,
  syndicate,
  toTitleCase,
  translateFocus,
  translatePolarity,
  upgrade,
} from '../../tools/translation.js';

should();

describe('translation', () => {
  describe('toTitleCase()', () => {
    it('requires one string argument', () => {
      (() => {
        toTitleCase();
      }).should.throw(TypeError);
      (() => {
        toTitleCase('test');
      }).should.not.throw();
    });

    it('converts the first letter of every word to uppercase and the others to lowercase', () => {
      toTitleCase('test').should.equal('Test');
      toTitleCase('test teST').should.equal('Test Test');
    });
  });

  describe('supports defaulting locale', () => {
    describe('faction()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        faction('FC_GRINEER').should.equal('Grineer');
      });
      it("should return the key if it's not found in the data", () => {
        faction('notFound').should.equal('notFound');
      });
    });
    describe('node()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        node('SolNode1').should.equal('Galatea (Neptune)');
      });
      it("should return the last part of the key if it's not found in the data", () => {
        node('not/Found').should.equal('Found');
      });
    });
    describe('nodeMissionType()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        nodeMissionType('SolNode1').should.equal('Capture');
      });
      it("should return the last part of the key if it's not found in the data", () => {
        nodeMissionType('not/Found').should.equal('Found');
      });
      it("should return the key if one isn't provided", () => {
        nodeMissionType(0).should.equal(0);
      });
    });
    describe('nodeEnemy()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        nodeEnemy('SolNode1', 'es').should.equal('Corpus');
      });
      it("should return the last part of the key if it's not found in the data", () => {
        nodeEnemy('not/Found', 'es').should.equal('Found');
      });
      it("should return the key if one isn't provided", () => {
        nodeEnemy(0, 'es').should.equal(0);
      });
    });
    describe('languageString()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        languageString('/lotus/language/alerts/capturedesc1').should.equal('Fugitive Located');
      });
      it("should return the last part of the key if it's not found in the data", () => {
        languageString('not/Found').should.equal('Found');
      });
      it("should return the key if one isn't provided", () => {
        languageDesc(0, 'es').should.equal(0);
      });
    });
    describe('languageDesc()', () => {
      it("should return the description for a translation of the key if it's found in the data", () => {
        languageDesc('/lotus/language/items/furaxwraithname').should.equal(
          'These Wraith gauntlets have been augmented for power.'
        );
      });
      it("should return the last part of the key if it's not found in the data", () => {
        languageDesc('not/Found').should.equal('[PH] Found Desc');
      });
      it("should return the key if one isn't provided", () => {
        languageDesc(0, 'es').should.equal(0);
      });
    });
    describe('missionType()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        missionType('MT_EXCAVATE').should.equal('Excavation');
      });
      it("should return the key if it's not found in the data", () => {
        missionType('notfound').should.equal('Notfound');
      });
      it("should return the key if one isn't provided", () => {
        missionType(0).should.equal(0);
      });
    });
    describe('conclaveMode()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        conclaveMode('PVPMODE_ALL').should.equal('Any Mode');
      });
      it("should return the key if it's not found in the data", () => {
        conclaveMode('notfound').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        conclaveMode(0).should.equal(0);
      });
    });
    describe('conclaveCategory()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        conclaveCategory('PVPChallengeTypeCategory_WEEKLY').should.equal('week');
      });
      it("should return the key if it's not found in the data", () => {
        conclaveCategory('notfound').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        conclaveCategory(0).should.equal(0);
      });
    });
    describe('fissureModifier()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        fissureModifier('VoidT1').should.equal('Lith');
      });
      it("should return the key if it's not found in the data", () => {
        fissureModifier('notfound').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        fissureModifier(0).should.equal(0);
      });
    });
    describe('fissureTier()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        fissureTier('VoidT1').should.equal(1);
      });
      it("should return the key if it's not found in the data", () => {
        fissureTier('notfound').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        fissureTier(0).should.equal(0);
      });
    });
    describe('upgrade()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        upgrade('GAMEPLAY_KILL_XP_AMOUNT').should.equal('Mission Kill XP');
      });
      it("should return the key if it's not found in the data", () => {
        upgrade('notfound').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        upgrade(0).should.equal(0);
      });
    });
    describe('operation()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        operation('MULTIPLY').should.equal('is multiplied by');
      });
      it("should return the key if it's not found in the data", () => {
        operation('notfound').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        operation(0).should.equal(0);
      });
    });
    describe('operationSymbol()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        operationSymbol('MULTIPLY').should.equal('x');
      });
      it("should return the key if it's not found in the data", () => {
        operationSymbol('notfound').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        operationSymbol(0).should.equal(0);
      });
    });
    describe('sortieBoss()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        sortieBoss('SORTIE_BOSS_HYENA').should.equal('Hyena Pack');
      });
      it("should return the key if it's not found in the data", () => {
        sortieBoss('notfound').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        sortieBoss(0).should.equal(0);
      });
    });
    describe('sortieFaction()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        sortieFaction('SORTIE_BOSS_HYENA').should.equal('Corpus');
      });
      it("should return the key if it's not found in the data", () => {
        sortieFaction('notfound').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        sortieFaction(0).should.equal(0);
      });
    });
    describe('sortieModifier()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        sortieModifier('SORTIE_MODIFIER_LOW_ENERGY').should.equal('Energy Reduction');
      });
      it("should return the key if it's not found in the data", () => {
        sortieModifier('notfound').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        sortieModifier(0).should.equal(0);
      });
    });
    describe('sortieModDesc()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        sortieModDesc('SORTIE_MODIFIER_LOW_ENERGY').should.equal(
          'Maximum Warframe Energy capacity is quartered. Energy Siphon is less effective.'
        );
      });
      it("should return the key if it's not found in the data", () => {
        sortieModDesc('notfound').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        sortieModDesc(0).should.equal(0);
      });
    });
    describe('syndicate()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        syndicate('ArbitersSyndicate').should.equal('Arbiters of Hexis');
      });
      it("should return the key if it's not found in the data", () => {
        syndicate('notfound').should.equal('notfound');
      });
    });
    describe('region()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        region(3).should.equal('Mars');
      });
      it("should return the key if it's not found in the data", () => {
        region('notfound').should.equal('notfound');
      });
    });
    describe('archonShardColor()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        archonShardColor('ACC_BLUE').should.equal('Azure');
      });
      it("should return the key if it's not found in the data", () => {
        archonShardColor('notfound').should.equal('notfound');
      });
    });
    describe('archonShardUpgradeType()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        archonShardUpgradeType(
          'ACC_BLUE',
          '/Lotus/Upgrades/Invigorations/ArchonCrystalUpgrades/ArchonCrystalUpgradeWarframeHealthMax'
        ).should.equal('+150% Health');
      });
      it("should return the key if it's not found in the data", () => {
        archonShardUpgradeType('notfound', 'notfound').should.equal('notfound');
      });
    });
  });

  describe('supports overriding locale', () => {
    describe('faction()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        faction('FC_GRINEER', 'es').should.equal('Grineer');
      });
      it("should return the key if it's not found in the data", () => {
        faction('notFound', 'es').should.equal('notFound');
      });
    });
    describe('node()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        node('SolNode1', 'es').should.equal('Galatea (Neptuno)');
      });
      it("should return the last part of the key if it's not found in the data", () => {
        node('not/Found', 'es').should.equal('Found');
      });
      it("should return the key if one isn't provided", () => {
        node(0, 'es').should.equal(0);
      });
    });
    describe('nodeMissionType()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        nodeMissionType('SolNode1', 'es').should.equal('Captura');
      });
      it("should return the last part of the key if it's not found in the data", () => {
        nodeMissionType('not/Found', 'es').should.equal('Found');
      });
      it("should return the key if one isn't provided", () => {
        nodeMissionType(0, 'es').should.equal(0);
      });
    });
    describe('nodeEnemy()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        nodeEnemy('SolNode1', 'es').should.equal('Corpus');
      });
      it("should return the last part of the key if it's not found in the data", () => {
        nodeEnemy('not/Found', 'es').should.equal('Found');
      });
      it("should return the key if one isn't provided", () => {
        nodeEnemy(0, 'es').should.equal(0);
      });
    });
    describe('languageDesc()', () => {
      it("should return the description for a translation of the key if it's found in the data", () => {
        languageDesc('/lotus/language/items/furaxwraithname', 'es').should.equal(
          'These Wraith gauntlets have been augmented for power.'
        );
      });
      it("should return the last part of the key if it's not found in the data", () => {
        languageDesc('not/Found', 'es').should.equal('[PH] Found Desc');
      });
    });
    describe('languageString()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        languageString('/lotus/language/alerts/capturedesc1', 'es').should.equal('Fugitivo localizado');
      });
      it("should return the last part of the key if it's not found in the data", () => {
        languageString('not/Found', 'es').should.equal('Found');
      });
      it('defaults to english with an invalid locale', () => {
        languageString('/lotus/language/alerts/capturedesc1', 'uk').should.equal('Fugitive Located');
      });
      it('returns Undefined if key is undefined', () => {
        expect(languageString(undefined, 'es')).to.be.undefined;
      });
    });
    describe('missionType()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        missionType('MT_EXCAVATE', 'es').should.equal('Excavación');
      });
      it("should return the key if it's not found in the data", () => {
        missionType('notfound', 'es').should.equal('Notfound');
      });
      it("should return the key if one isn't provided", () => {
        missionType(0, 'es').should.equal(0);
      });
    });
    describe('conclaveMode()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        conclaveMode('PVPMODE_ALL', 'es').should.equal('Cualquier modo');
      });
      it("should return the key if it's not found in the data", () => {
        conclaveMode('notfound', 'es').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        conclaveMode(0, 'es').should.equal(0);
      });
    });
    describe('conclaveChallenge()', () => {
      it('should pull conclave challenge data', () => {
        conclaveChallenge('PVPTimedChallengeKillsPrimaryEASY', 'en').should.have.property('title', 'Primary Target');
        conclaveChallenge('PVPTimedChallengeKillsPrimaryEASY', 'es').should.have.property('title', 'Primary Target');
      });
      it('should default to useless value if not found', () => {
        const nf = conclaveChallenge('notfound', 'es');
        nf.should.have.property('title', 'Notfound');
        nf.should.have.property('description', 'Notfound');
        nf.should.have.property('standing', 0);
      });
    });
    describe('conclaveCategory()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        conclaveCategory('PVPChallengeTypeCategory_WEEKLY', 'es').should.equal('week');
      });
      it("should return the key if it's not found in the data", () => {
        conclaveCategory('notfound', 'es').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        conclaveCategory(0, 'es').should.equal(0);
      });
    });
    describe('fissureModifier()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        fissureModifier('VoidT1', 'es').should.equal('Lith');
      });
      it("should return the key if it's not found in the data", () => {
        fissureModifier('notfound', 'es').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        fissureModifier(0, 'es').should.equal(0);
      });
    });
    describe('fissureTier()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        fissureTier('VoidT1', 'es').should.equal(1);
      });
      it("should return the key if it's not found in the data", () => {
        fissureTier('notfound', 'es').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        fissureTier(0, 'es').should.equal(0);
      });
    });
    describe('upgrade()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        upgrade('GAMEPLAY_KILL_XP_AMOUNT', 'es').should.equal('Afinidad de asesinato de la misión');
      });
      it("should return the key if it's not found in the data", () => {
        upgrade('notfound', 'es').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        upgrade(0, 'es').should.equal(0);
      });
    });
    describe('operation()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        operation('MULTIPLY', 'es').should.equal('es multiplicado por');
      });
      it("should return the key if it's not found in the data", () => {
        operation('notfound', 'es').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        operation(0, 'es').should.equal(0);
      });
    });
    describe('operationSymbol()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        operationSymbol('MULTIPLY', 'es').should.equal('x');
      });
      it("should return the key if it's not found in the data", () => {
        operationSymbol('notfound', 'es').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        operationSymbol(0, 'es').should.equal(0);
      });
    });
    describe('sortieBoss()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        sortieBoss('SORTIE_BOSS_HYENA', 'es').should.equal('Manada de hienas');
      });
      it("should return the key if it's not found in the data", () => {
        sortieBoss('notfound', 'es').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        sortieBoss(0).should.equal(0);
      });
    });
    describe('sortieFaction()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        sortieFaction('SORTIE_BOSS_HYENA', 'es').should.equal('Corpus');
      });
      it("should return the key if it's not found in the data", () => {
        sortieFaction('notfound', 'es').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        sortieFaction(0, 'es').should.equal(0);
      });
    });
    describe('sortieModifier()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        sortieModifier('SORTIE_MODIFIER_LOW_ENERGY', 'es').should.equal('Reducción de energía');
      });
      it("should return the key if it's not found in the data", () => {
        sortieModifier('notfound', 'es').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        sortieModifier(0, 'es').should.equal(0);
      });
    });
    describe('sortieModDesc()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        sortieModDesc('SORTIE_MODIFIER_LOW_ENERGY', 'es').should.equal(
          'La capacidad máxima de energía para el warframe es 1/4 de lo normal. Sifón de energía es menos efectivo.'
        );
      });
      it("should return the key if it's not found in the data", () => {
        sortieModDesc('notfound', 'es').should.equal('notfound');
      });
      it("should return the key if one isn't provided", () => {
        sortieModDesc(0, 'es').should.equal(0);
      });
    });
    describe('region()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        region(3, 'es').should.equal('Marte');
      });
      it("should return the key if it's not found in the data", () => {
        region('notfound', 'es').should.equal('notfound');
      });
    });
    describe('translateFocus()', () => {
      it('should translate focus names', () => {
        translateFocus('Focus').should.equal('None');
        translateFocus('Focus/Attack').should.equal('Madurai');
      });
    });
    describe('translatePolarity()', () => {
      it('should translate polarities', () => {
        translatePolarity('AP_').should.equal('None');
        translatePolarity('AP_ATTACK').should.equal('Madurai');
      });
    });
    describe('archonShardColor()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        archonShardColor('ACC_BLUE', 'en').should.equal('Azure');
      });
      it("should return the key if it's not found in the data", () => {
        archonShardColor('notfound').should.equal('notfound');
      });
    });
    describe('archonShardUpgradeType()', () => {
      it("should return a translation of the key if it's found in the data", () => {
        archonShardUpgradeType(
          'ACC_BLUE',
          '/Lotus/Upgrades/Invigorations/ArchonCrystalUpgrades/ArchonCrystalUpgradeWarframeHealthMax'
        ).should.equal('+150% Health');
      });
      it("should return the key if it's not found in the data", () => {
        archonShardUpgradeType('notfound', 'notfound').should.equal('notfound');
      });
    });
  });
});
