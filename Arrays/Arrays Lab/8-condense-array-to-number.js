function solve(arr) {
    while (arr.length > 1) {
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            newArr.push(Number(arr[i] + arr[i + 1]));
        }
        arr = newArr;
    }
    console.log(Number(arr));
}

solve([5, 0, 4, 1, 2])