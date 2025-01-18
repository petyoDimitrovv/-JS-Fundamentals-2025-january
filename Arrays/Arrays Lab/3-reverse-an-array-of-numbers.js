// Write a program, which receives a number n and an array of elements. 
// Your task is to create a new array with n numbers from the original array,
//  reverse it and print its elements on a single line, space-separated.

function numArr(range, nums) {
    let newArr = [];
    for (let i = range - 1; i >= 0; i--) {
        newArr.push(nums[i])

    }
    console.log(newArr.join(" "));



}
numArr(3, [10, 20, 30, 40, 50])