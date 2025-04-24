
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
//module.exports = { sum };


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(num){
    let euros=fromDollarToEuro(num) 
    return euros * oneEuroIs.JPY;
}
function fromYenToPound(num){
    //YEN a EURO
    let euros=num / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}
function fromEuroToDollar(num){
    return num * oneEuroIs.USD;
}
function fromDollarToEuro(num){
    return num / oneEuroIs.USD;
}

module.exports = { fromEuroToDollar, fromDollarToEuro, fromDollarToYen,fromYenToPound,sum };
console.log(fromDollarToYen(1));
console.log(fromDollarToEuro(1));
console.log(fromEuroToDollar(3.5));
//(fromDollarToEuro(1));


