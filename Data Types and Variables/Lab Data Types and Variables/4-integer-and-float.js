function solve(furstNum, secondNum, thirdNum){
    let sum = furstNum + secondNum + thirdNum;
    
    let res = sum % 1 == 0 ? "Integer" : "Float"

    console.log(`${sum} - ${res}`);
    
}


solve("9, 100, 1.1")