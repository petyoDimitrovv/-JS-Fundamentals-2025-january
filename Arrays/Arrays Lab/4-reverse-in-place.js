// Write a program, which receives an array of strings. 
// Your task is to reverse the array without creating a new array.
//  Print the resulting elements on a single line, space-separated. 
function stringReverser(numArr) {
    for (let i = 0; i < (numArr.length - 1) / 2; i++) {
        let k = (numArr.length - 1) - i;
        let swap = numArr[i];
        numArr[i] = numArr[k];
        numArr[k] = swap;
    }
    console.log(numArr.join(' '));


    // let newArr = [];
    // for (let i = numArr.length; i >= 0; i--) {
    //     newArr.push(numArr[i])
    // }
    // console.log(newArr.join(" "));

}

stringReverser(['a', 'b', 'c', 'd', 'e'])
stringReverser(['abc', 'def', 'hig', 'klm', 'nop'])