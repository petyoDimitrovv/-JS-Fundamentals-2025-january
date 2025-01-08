function solve(n){
    let sum = 0
    let currOddnum = 1

    for (let i = 0; i < n; i++){
        console.log(currOddnum);
        
        sum += currOddnum;
        currOddnum += 2;
    }
        
}
solve(12);