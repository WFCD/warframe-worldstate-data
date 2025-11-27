import { insist } from '../../tools/integrity';

describe('integrity', () => {
  it('should insist', () => {
    (() => insist({}, 'a')).should.throw(TypeError);
    (() => insist({ a: 1 }, 'a', 'b')).should.throw(TypeError);
    (() => insist({ a: 1, b: 2 }, 'a', 'b')).should.not.throw();
  });
});
