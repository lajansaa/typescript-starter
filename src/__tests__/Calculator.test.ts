import Calculator from "../Calculator";

describe('#Test', () => {
    it('should add 2 numbers together', () => {
        const calculator = new Calculator();

        const result = calculator.sum(2, 3);

        expect(result).toEqual(5);
    })
})