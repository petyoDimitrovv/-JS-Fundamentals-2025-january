// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
function substractionOfOddAndEvenNum(numsArr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < numsArr.length; i++) {
        numsArr[i] = Number(numsArr[i])
    }
    for (const num of numsArr) {
        if (num % 2 === 0) {
            sumEven += num
        } else {
            sumOdd += num
        }

    }
    console.log(sumEven - sumOdd);


}
substractionOfOddAndEvenNum([1, 2, 3, 4, 5, 6]);