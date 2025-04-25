const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('1 euro should be 1.07 dollars', () => {
  expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test('1 dollar should be ~146.26 yenes', () => {
  expect(fromDollarToYen(1)).toBeCloseTo(146.26);
});

test('1 yen should be ~0.00556 pounds', () => {
  expect(fromYenToPound(1)).toBeCloseTo(0.00556);
});