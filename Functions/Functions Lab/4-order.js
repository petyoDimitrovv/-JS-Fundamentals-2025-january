function productSum(price, quantity) {
    return price * quantity;
}
function orderProduct(product, quantity) {
    let result =  0 ;
    switch (product) {
        case 'coffee':result = productSum(1.5, quantity);
        break;
        case 'water' :result = productSum(1, quantity);
        break;
        case coke :result = productSum(1.4, quantity);
        break;
        case snacks :result = productSum(2, quantity);
        break;
    }
    return result;
}

console.log(orderProduct("water", 5));

// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
