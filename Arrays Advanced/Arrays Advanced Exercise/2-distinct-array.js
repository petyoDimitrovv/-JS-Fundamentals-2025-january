function distinct(numArr) {

    let distinctArr = new Set(numArr);

    console.log(Array.from(distinctArr).join(" "));
// let result = [];
// for (const iterator of arr) {
//     !result.includes(iterator) ? result.push(iterator) : null;
// }
// console.log(result.join(' '));
}

distinct([1, 7, 3, 4, 5, 6, 7, 8, 7, 10])