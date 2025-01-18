function sumOdd(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        numArr[i] = Number(numArr[i]);
        sum = numArr[i] % 2 == 0 ? sum += numArr[i] : sum += 0;

    }
    console.log(sum);

}
sumOdd(['2', '4', '6', '8', '10'])