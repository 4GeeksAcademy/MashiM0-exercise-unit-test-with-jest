test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("200 Yen should be 1.11 pounds", function() {
    const { fromYenToPound } = require('./app.js');

        // Use the function like its supposed to be used
        const pounds = fromYenToPound(200);

        // First convert Yen to Euro, then check that the amount 
        // in euro is 0.87 pounds per euro ((200 / 156.5) * 0.87)
        const expected = (200 / 156.5) * 0.87; 

    expect(fromYenToPound(200)).toBeCloseTo(1.11);
})

test("3 dollars should be 438.78 yen", function() {
    const { fromDollarToYen } = require('./app.js');

        // Use the function like its supposed to be used
        const dollars = fromDollarToYen(3);

        // First convert Dollar to Euro, then check that the amount 
        // in euro is 156.5 yen per euro ((3 / 1.07) * 156.5)
        const expected = (3 / 1.07) * 156.5; 

        expect(fromDollarToYen(3)).toBeCloseTo(438.78,1);
})