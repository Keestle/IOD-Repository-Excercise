const ernieFunction = require("./Ex 7 ernie.js");

// Excerise 7 -3 Tests for question 10
test('check if data type is a number', () => {
    var result = ernieFunction.simpleInt(1,2,3);
    expect(typeof result).toBe('number');
});

test('check if data type is an alphabet', () => {
    var result = ernieFunction.simpleInt(a,b,c);
    expect(typeof result).toBe('number');
});

test('check if compute correctly', () => {
    var result = ernieFunction.simpleInt(20000,5,2);
    expect(result).toBe(220000);
});