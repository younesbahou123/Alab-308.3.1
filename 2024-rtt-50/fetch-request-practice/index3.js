const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
    }
    const results = adventurer.inventory[0]    ;
    console.log(results);
    let index;
    for (let index = 0; index <  adventurer.inventory.length; index++) {
        const element =  adventurer.inventory[index];
        console.log(element);
    }
    console.log(adventurer.companion.name)

    