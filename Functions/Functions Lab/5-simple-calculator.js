// Write a function that receives three parameters – two numbers and an operator (string) –
// and calculates the result depending on the operator.
// Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.


function simpleCalculator(numOne, numTwo, operator){

    const mutiply = (numOne , numTwo) => numOne * numTwo;
    const divide = (numOne , numTwo) => numOne / numTwo;
    const add = (numOne , numTwo) => numOne + numTwo;
    const subtract = (numOne , numTwo) => numOne - numTwo;

    switch(operator){
        case 'multiply':
            console.log(mutiply(numOne, numTwo));
            break;
        case 'divide':
            console.log(divide(numOne, numTwo));
            break;
        case 'add':
            console.log(add(numOne, numTwo));
            break;
        case 'subtract':
            console.log(subtract(numOne, numTwo));
            break;
    }
}
simpleCalculator(5,7, 'multiply');