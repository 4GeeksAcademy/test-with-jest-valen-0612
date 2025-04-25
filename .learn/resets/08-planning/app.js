// 1 Euro equivale a:
let oneEuroIs = {
    JPY: 156.5,
    USD: 1.07,
    GBP: 0.87
  };
  
  const fromEuroToDollar = function(euro) {
    return euro * oneEuroIs.USD;
  };
  
  const fromDollarToYen = function(dollar) {
    let euro = dollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY;
  };
  
  const fromYenToPound = function(yen) {
    let euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
  };
  
  module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
  