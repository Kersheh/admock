import { BigIntegerPipe } from './big-integer.pipe';

describe('BigIntegerPipe', () => {
  it('create an instance', () => {
    const pipe = new BigIntegerPipe();
    expect(pipe).toBeTruthy();
  });
});
