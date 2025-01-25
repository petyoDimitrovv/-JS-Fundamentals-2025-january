function stringRepeater(word, count){
    let newArr = [];

    for (let i = 0; i < count; i++) {
        newArr.push(word);
    }
    console.log(newArr.join(""));
}
stringRepeater("abc", 3);