function solve(firtArr, secondArr) {

    let sum = 0;
    isEqual = true;

    for (let i = 0; i < firtArr.length; i++) {
        firtArr[i] = Number(firtArr[i]);
    }
    for (let i = 0; i < secondArr.length; i++) {
        secondArr[i] = Number(secondArr[i]);
    }
    for (let i = 0; i < firtArr.length; i++) {
        if (firtArr[i] !== secondArr[i]) {
            isEqual = false
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;

        } else {
            sum += firtArr[i]
        }

    }
    if (isEqual === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);

    }

}

solve(['10', '20', '30'], ['10', '20', '30'])
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])