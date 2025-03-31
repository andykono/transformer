import { greet } from './index';

describe('greet', () => {
  it('should return greeting with the provided name', () => {
    expect(greet('TypeScript')).toBe('Hello, TypeScript!');
  });
});
