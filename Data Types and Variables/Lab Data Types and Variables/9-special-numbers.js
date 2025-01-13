function specialNumberFinder (range){
    isSpecial = false ;
    for (let i = 1; i <= range; i++) {
        const lastDigit = (i / 1) % 10;
        const firstDigit = (i - (i % 10)) / 10;
        const sum = lastDigit + firstDigit;
        const output = sum === 5 || sum === 7 || sum === 11 ? "True" : "False"
        console.log(`${i} -> ${output}`);
        
        
        
    }

}

specialNumberFinder(15);