const multi = require('../src/multi');

it('should calculate the correct multiplication', () => {
    const result = multi(2,5);

    expect(result).toBe(10);
});