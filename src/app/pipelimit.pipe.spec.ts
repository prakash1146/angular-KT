import { PipelimitPipe } from './pipelimit.pipe';

describe('PipelimitPipe', () => {
  it('create an instance', () => {
    const pipe = new PipelimitPipe();
    expect(pipe).toBeTruthy();
  });
});
