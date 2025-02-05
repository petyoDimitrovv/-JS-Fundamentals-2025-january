function glafiator(arr) {
    let inventory = arr.shift().split(" ")
    for (const input of arr) {
        let both = input.split(" ");
        let command = both[0];
        let item = both[1];
        if(command.includes("Buy")) {
            (!inventory.includes(item)) ? inventory.push(item) : null

        }else if (command.includes("Trash")) {
           let indexToDel = inventory.indexOf(item)
            inventory.splice(indexToDel, 1);

        }else if (command.includes("Repair")) {
            if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item), 1);
                inventory.push(item);
            }

        }else if (command.includes("Upgrade")) {
            let equipment = item.split('-')[0];
            let upgrade = item.split('-')[1];
            if (inventory.includes(equipment)) {
                inventory.splice(inventory.indexOf(equipment) + 1, 0, `${equipment}:${upgrade}`);
            }

        }

    }
    console.log(inventory.join(" "))
}
glafiator(['SWORD Shield Spear',
    'Buy Spear',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)