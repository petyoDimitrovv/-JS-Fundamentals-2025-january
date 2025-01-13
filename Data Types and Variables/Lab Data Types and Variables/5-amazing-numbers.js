function solve(num) {
    let numAsStr = `${num}`
    let result = 0;
    for (let i = 0; i < numAsStr.length; i++) {
        result += Number(numAsStr[i])

    }
    let isAmazing = false;
    let resultToStr = `${result}`
    for (let j = 0; j < resultToStr.length; j++) {
        if(resultToStr[j] === '9'){
            isAmazing = true
            break;
        }
        
    }


    console.log(`${num} Amazing? ${isAmazing ? "True" : "False"}`);

}
solve(999)