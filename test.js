// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

// mi parte (en desarrollo)
test("One dollar should be 146.26 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(10)).toBe(1462.62); // 1 dollar son 146.26 yenes, entonces 10 dollares deberían ser = (10 * 146.26)
});

test("100 yenes son 0.56 GBP", function() {
    const {fromYenToPound} = require('./app.js');
    expect(fromYenToPound(100)).toBe(0.56);
});
