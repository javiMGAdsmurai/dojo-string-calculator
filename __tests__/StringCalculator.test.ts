import { StringCalculator } from "../src/StringCalculator";

describe('WHEN add without number', () => {
    it('should return empty string', () => {
        const expected = 0

        const result = StringCalculator.add('')

        expect(result).toBe(expected)
    });

  test.each([{value: "4", expected: 4}, {value: "15", expected: 15}, {value: "25", expected: 25}, {value: "1", expected: 1}])
    ('should return the number itself when there is only one', (value) => {

    const result = StringCalculator.add(value.value)

    expect(result).toBe(value.expected)
  });

  it('should return sum when split string', () => {
    const expected = 3;

    const result = StringCalculator.add('1,2');

    expect(result).toBe(expected);
  });
});
