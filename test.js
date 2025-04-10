const { sum } = require('./app.js');
test('adds 14 + 9 to equal',() => {
    let total = sum(14,9);
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
})

test(" 1.07 dollars should be 156.5 yens", function() {
    const { fromDollarToYen } = require('./app.js');     
    const yens = fromDollarToYen(3.5); // Convierte 3.5 dólares a yenes
    const expected = 3.5 * 156.5; // Calcula el valor esperado
    expect(yens).toBe(expected);
})

test(" 156.5 yens should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');     
    const pounds = fromYenToPound(156.5); 
    const expected = 156.5 * 0.87; // Calcula el valor esperado
    expect(pounds).toBe(expected);
})