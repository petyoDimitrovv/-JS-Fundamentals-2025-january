function sum(num){
    let numToString = (`${num}`)
    let result = 0;
    for (let i = 0; i < numToString.length; i++) {
        result += Number(numToString[i]);
        
    }

    console.log(result);
    
}

sum(999);