function solve(number,endNUmb){
    if (endNUmb > 15){
        endNUmb = 15;
    }
    let roundedNum =parseFloat(number.toFixed(endNUmb))
    console.log (roundedNum)

}

solve(3.1467986873583)