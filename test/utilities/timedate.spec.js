import { should } from 'chai';

import { timeDeltaToString, parseDate } from '../../tools/timeDate.js';

should();

describe('timeDateUtils', () => {
  describe('timeDeltaToString()', () => {
    it('should throw TypeError when called without arguments', () => {
      (() => {
        timeDeltaToString();
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
      (() => parseDate()).should.not.throw();
      (() => parseDate(0)).should.not.throw();
      (() => parseDate(2340985790347890)).should.not.throw();
    });
  });
});
