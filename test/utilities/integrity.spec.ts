import { should } from 'chai';
import { insist } from '../../tools/integrity';

should();

describe('integrity', () => {
  it('should insist', () => {
    (() => insist({}, 'a')).should.throw(TypeError);
    (() => insist({ a: 1 }, 'a', 'b')).should.throw(TypeError);
    (() => insist({ a: 1, b: 2 }, 'a', 'b')).should.not.throw();
    (() => insist({ a: 0 }, 'a')).should.not.throw();
    (() => insist({ a: false }, 'a')).should.not.throw();
    (() => insist({ a: '' }, 'a')).should.not.throw();
    (() => insist(null as unknown as Record<string, unknown>, 'a')).should.throw();
    (() => insist({ a: 0 })).should.not.throw();
  });
});
