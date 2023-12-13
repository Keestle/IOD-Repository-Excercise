const dicefunction = require("./dice.js");

test('check if dice is function provides result from 1-6 correctly', () => {
    var result = dicefunction.rolld6(6);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
})