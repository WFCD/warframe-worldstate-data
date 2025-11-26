import { should } from 'chai';

import { timeDeltaToString, parseDate, ContentTimestamp, fromNow, toNow, weeklyReset, dailyReset } from '../../tools/timeDate';

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
    it('should should return seconds for timestamps under a minute', () => {
      timeDeltaToString(16).should.equal('0s');
    });
    it('should test non-number inputs', () => {
      (() => timeDeltaToString('poop' as unknown as number)).should.throw(TypeError);
    })
    it('should handle negative time deltas', () => {
      timeDeltaToString(-120000).should.equal('-2m 0s');
    })
  });
  describe('parseDate()', () => {
    it('should parse even if date provided is undefined', () => {
      (() => parseDate(undefined as unknown as ContentTimestamp)).should.not.throw();
      (() => parseDate(0 as unknown as ContentTimestamp)).should.not.throw();
      (() => parseDate(2340985790347890 as unknown as ContentTimestamp)).should.not.throw();
    });
  });
  describe('fromNow() and toNow()', () => {
    const now = 1609459200000; // January 1, 2021 00:00:00 GMT
    const date = new Date(1609455600000); // December 31, 2020 23:00:00 GMT

    it('fromNow() should return correct milliseconds difference', () => {
      const diff = fromNow(date, () => now);
      diff.should.equal(-3600000); // -1 hour in milliseconds
    });
    it('toNow() should return correct milliseconds difference', () => {
      const diff = toNow(date, () => now);
      diff.should.equal(3600000); // 1 hour in milliseconds
    });
  });
  describe('weeklyReset()', () => {
    it('should return the correct next weekly reset date', () => {
      const nowFunc = () => new Date('2021-09-15T10:00:00Z'); // Wednesday
      const reset = weeklyReset(nowFunc);
      reset.activation.toISOString().should.equal('2021-09-13T00:00:00.000Z'); // Closest Monday
      reset.expiry.toISOString().should.equal('2021-09-20T00:00:00.000Z'); // Following Monday
    });
  });
  describe('dailyReset()', () => {
    it('should return the correct next daily reset date', () => {
      const nowFunc = () => new Date('2021-09-15T10:00:00Z'); // Any day
      const reset = dailyReset(nowFunc);
      reset.activation.toISOString().should.equal('2021-09-15T00:00:00.000Z'); // Closest day
      reset.expiry.toISOString().should.equal('2021-09-16T00:00:00.000Z'); // Following day
    });
  });
});
