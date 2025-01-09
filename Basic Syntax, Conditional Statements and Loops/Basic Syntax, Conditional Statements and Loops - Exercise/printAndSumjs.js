function solve(start, end) {
    sum = 0;
    numArr = []
    for (let i = start; i <= end; i++) {
        sum += i
        numArr.push(i)
        
    }
    console.log(numArr.join(' '))
    console.log(`Sum: ${sum}`)

} 
solve(5,10)