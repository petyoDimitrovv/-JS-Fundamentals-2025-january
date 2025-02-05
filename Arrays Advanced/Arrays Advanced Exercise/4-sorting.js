function sort(num) {
    let sortedArr = num.sort((a, b) => b - a);
    let resultArr = [];

    while (sortedArr.length > 0) {
        let leftSide = sortedArr.shift();
        let rightSide = sortedArr.pop();
        resultArr.push(leftSide);
        resultArr.push(rightSide);

    }
    console.log(resultArr.join(" "));

}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
