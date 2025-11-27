import { should } from 'chai';
import { insist } from '../../tools/integrity';

should();

describe('integrity', () => {
  it('should throw TypeError when required property is missing', () => {
    (() => insist({}, 'a')).should.throw(TypeError);
    (() => insist({ a: 1 }, 'a', 'b')).should.throw(TypeError);
  });
  it('should not throw when all required properties are present', () => {
    (() => insist({ a: 1, b: 2 }, 'a', 'b')).should.not.throw();
  });
  it('should allow falsy values (0, false, \'\') as property values', () => {
    (() => insist({ a: 0 }, 'a')).should.not.throw();
    (() => insist({ a: false }, 'a')).should.not.throw();
    (() => insist({ a: '' }, 'a')).should.not.throw();
  });
  it('should throw when object is null or undefined', () => {
    (() => insist(null as unknown as Record<string, unknown>, 'a')).should.throw();
    (() => insist(undefined as unknown as Record<string, unknown>, 'a')).should.throw();
  });
  it('should not throw when no properties are required', () => {
    (() => insist({ a: 0 })).should.not.throw();
  });
});
