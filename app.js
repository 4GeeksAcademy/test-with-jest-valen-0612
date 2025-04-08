// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
//Mi funciones

let valueInEuro ={
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

const fromDollarToYen = (valueInDollar) => {
    return parseFloat(((valueInDollar / valueInEuro["USD"]) * valueInEuro["JPY"]).toFixed(2))
}

const fromYenToPound = (valueInYen) => {
    return parseFloat(((valueInYen / valueInEuro["JPY"]) * valueInEuro ["GBP"]).toFixed(2))

}
console.log(fromYenToPound(10))

const sum = (a,b) => {
    return a + b
};

console.log(fromDollarToYen(1));
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};