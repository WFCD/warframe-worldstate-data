import { should } from 'chai';

import { timeDeltaToString, parseDate, WorldStateDate } from '../../tools/timeDate';

should();

describe('timeDateUtils', () => {
  describe('timeDeltaToString()', () => {
    it('should throw TypeError when called without arguments', () => {
      (() => {
        timeDeltaToString(undefined as unknown as number);
      }).should.throw(TypeError);
    });
    it('only shows seconds if the difference is less than a minute', () => {
      timeDeltaToString(30000).should.match(/^\d{1,2}s$/);
    });
    it('shows both seconds and minutes if the difference is between a minute and an hour', () => {
      timeDeltaToString(120000).should.match(/^\d{1,2}m \d{1,2}s$/);
    });
    it('shows seconds, minutes, and hours if the difference is between an hour and a day', () => {
      timeDeltaToString(4000000).should.match(/^\d{1,2}h \d{1,2}m \d{1,2}s$/);
    });
    it('shows seconds, minutes, hours and days if the difference is more than a day', () => {
      timeDeltaToString(120000000).should.match(/^\d+d \d{1,2}h \d{1,2}m \d{1,2}s$/);
    });
  });
  describe('parseDate()', () => {
    it('should parse even if date provided is undefined', () => {
      (() => parseDate(undefined as unknown as WorldStateDate)).should.not.throw();
      (() => parseDate(0 as unknown as WorldStateDate)).should.not.throw();
      (() => parseDate(2340985790347890 as unknown as WorldStateDate)).should.not.throw();
    });
  });
});
