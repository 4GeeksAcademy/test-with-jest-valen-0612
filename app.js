let oneEurosIs = { 
    "JPY":156.5,
    "USD":1.07,
    "GBP":0.87,
}  

const fromEuroToDollar = function (valueInEuros){

    let valueInDollar = valueInEuros  * oneEurosIs.USD;

    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    // Paso 1: convertir de dólares a euros (1 EUR = 1.07 USD)
    let valueInEuros = valueInDollar / oneEurosIs.USD;

    // Paso 2: convertir de euros a yenes (1 EUR = 156.5 JPY)
    let valueInYen = valueInEuros * oneEurosIs.JPY;

    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    // Paso 1: convertir de yenes a euros (1 EUR = 156.5 JPY)
    let valueInEuro = valueInYen / oneEurosIs.JPY;

    // Paso 2: convertir de euros a libras (1 EUR = 0.87 GBP)
    let valueInPound = valueInEuro * oneEurosIs.GBP;

    return valueInPound;
}

module.exports = { fromEuroToDollar , fromDollarToYen , fromYenToPound}
