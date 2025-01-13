function solve(str, chr, match){

    let temp = '';
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] == '_') {
            temp += chr;
        } else {
            temp += str[i];
        }
    }
    let output = temp === match ? "Matched" : "Not Matched";
        
    console.log(output);
    }
    




solve('Str_ng', 'o', 'Strong')