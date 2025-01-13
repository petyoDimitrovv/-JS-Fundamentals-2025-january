function solve(n) {
    for (let i = 0; i < n; i++) {

        const fisrtLette = String.fromCharCode(97+i)

        for (let j = 0; j < n; j++) {
            const secondLette = String.fromCharCode(97+j)

            for (let k = 0; k < n; k++) {
                const thirdLette = String.fromCharCode(97+k)
                
                console.log(`${fisrtLette}${secondLette}${thirdLette}`);
                

                
            }

        }

    }
}
solve(10);