// You will be given a number that will be the distance in meters. Write a program that converts meters to kilometers and then kilometers to miles. Print the output in the following format:
// •	"{meters} meters is equal to {kilometers} kilometers."
// •	"{kilometers} kilometers is equal to {miles} miles."
// Format the miles to two places after the decimal point.
// Hint: 1 kilometer = 0.621371 miles

function distanceConverter(num){
    let meterToKm = (num / 1000);
    let kmToMiles = (meterToKm * 0.621371).toFixed(2);

    console.log( `${num} meters is equal to ${meterToKm} kilometers.\n ${meterToKm} kilometers is equal to ${kmToMiles} miles.`);
    

}

distanceConverter(1852);

