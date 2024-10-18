import { StringCalculator } from "../src/StringCalculator";

describe('WHEN add without number', () => {
    it('should return empty string', () => {
        const expected = 0

        const result = StringCalculator.add('')

        expect(result).toBe(expected)
    });
});