function perfectNumber(number) {
    let sumOfDivison = 0;

    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            sumOfDivison += i;
        }
    }
        sumOfDivison === number ? console.log("We have a perfect number!") : console.log("It's not so perfect.");
}
perfectNumber(24);