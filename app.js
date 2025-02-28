// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


// function that sums two numbers
const sum = (a,b) => {
    return a + b
}

//console log
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / oneEuroIs['USD'];
    let valueInYen = valueInEuro * oneEuroIs['JPY'];
    return valueInYen;

}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / oneEuroIs['JPY']
    let valueInPound = valueInEuro * oneEuroIs['GBP']
    return valueInPound;
}
console.log(fromDollarToYen(3),fromYenToPound(200))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}