// "Town {town name} has population of {population} and area {area} square km."
// "Town name must be at least 3 characters!"
// •	If the population or the area is a negative number, print the following message:
// "{Population/Area} must be a positive number!"


function printer(town, population, area) {
    let isTwoDigit = (`${town}`);
    isTrue = true;


    if (isTwoDigit.length <= 2) {
        console.log("Town name must be at least 3 characters!");
        isTrue = false


    }
    if (population < 0) {
        console.log('Population must be a positive number!');
        isTrue = false

    }
    if (area < 0) {
        console.log('Area must be a positive number!');
    
        isTrue = false
    }

        if (isTrue == true) {

            console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
        }
    

}

printer('LA', -1481353, 512)
printer('Sofia',1286383,492)
