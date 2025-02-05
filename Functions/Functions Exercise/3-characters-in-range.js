function charactersInRange(startChar, endChar) {
    const startASCII = startChar.charCodeAt();
    const endASCII = endChar.charCodeAt();
    let charArr = [];
    const minAsci = Math.min(startASCII, endASCII);
    const maxAsci = Math.max(startASCII, endASCII);



    for (let cur = minAsci + 1; cur < maxAsci; cur++) {
        charArr.push(String.fromCharCode(cur));

    }


    console.log(charArr.join(" "));

}

charactersInRange('a',
    'd'
);
