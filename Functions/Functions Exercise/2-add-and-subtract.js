function addAndSubtract(numOne, numTwo, numThree) {
    const sumOfFirstTwo = (numOne, numTwo) => numOne + numTwo;
    return sumOfFirstTwo(numOne, numTwo) - numThree;

}
console.log(addAndSubtract(23,
    6,
    10
));