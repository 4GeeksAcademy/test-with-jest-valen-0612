// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

console.log("Hola mundo!");
const sum = (a,b) => {
    return a + b
};
console.log(sum(7,3));
console.log(fromDollarToYen);
module.exports = {sum, fromEuroToDollar, fromDollarToYen};