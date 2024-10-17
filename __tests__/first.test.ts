import { getName } from "../src/first";

describe('first function', () => {

  it('should be return name', () => {
    const result = getName()
    expect(result).toBe(`name`);
  });
});
