
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected, 2); 
});

test("One dollar should be 146.26 about  yen", function() {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected, 2);
});

test("One yen should be 0.00556  about  pounds", function() {
    const pound = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(pound).toBeCloseTo(expected, 4);
});
