function houseParty(arr){
    let guests = [];

    for (const command of arr) {
        let token = command.split(' ');
        if (!guests.includes(token[0]) && !(token.includes("not")) ) {
            guests.push(token[0]);
        }else if (guests.includes(token[0]) && (token.includes("not")) ) {
            guests.splice(guests.indexOf(token[0]), 1);
        }else if(!guests.includes(token[0]) && (token.includes("not")) ) {
            console.log(`${token[0]} is not in the list!`)
        }else if(guests.includes(token[0]) && (!token.includes("not")) ) {
            console.log(`${token[0]} is already in the list!`)
        }

    }
    console.log(guests.join('\n'));


}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']

)