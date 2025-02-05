function train(arr) {
    let wagons = (arr.shift().split(' ')).map(Number);
    const capacity = Number(arr.shift());

    for (const command of arr) {

        if (command.includes("Add")) {
            let token = command.split(" ");
            let passenger = Number(token[1]);
            wagons.push(passenger);

        } else {
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + Number(command) <= capacity) {
                    wagons[i] += Number(command);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));


}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);
