const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){    
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("1.2 Dollar is 127.9 yen", function(){
    expect(fromDollarToYen(1.2)).toBe(127.9)
})
test("127.9 Yen is 0.8 pound", function(){
    expect(fromYenToPound(127.9)).toBe(0.8)
})