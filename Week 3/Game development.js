class Item {
    constructor(name, type, strength) {
        this.ItemName = name;
        this.ItemType = type;
        this.strength = strength;
    }
}

class Character {
    constructor(name, health = 100, strength = 5) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.items = [];
        this.level = 1;
        this.inventory = new Inventory(this.items);
    }

    // Implement attack method.
    attack(target) {
        const initialAttack = this.strength;
        if (this.items.length > 0) {
            const attackModifier = this.items[0].strength;
            const totalAttack = initialAttack + attackModifier;
            target.receiveDamage(totalAttack);
            return totalAttack; // Return the damage dealt
        } else {
            // If no items in the inventory, use the base attack
            target.receiveDamage(initialAttack);
            return initialAttack; // Return the base attack damage
        }
    }

    // Implement receiveDamage method.
    receiveDamage(damage) {
        this.health -= damage;
    }
}

class Inventory {
    constructor(items) {
        this.items = items;
    }

    add(item) {
        this.items.push(item);
    }

    remove() {
        this.items.pop();
    }
}

// Simulate combat rounds for combat system
const numberOfRounds = 10;

// Function to display combat results in the console
function displayResults(roundNumber, attack, target, damage, level) {
    console.log(`Round ${roundNumber}: ${attack.name} attacked ${target.name} with ${attack.inventory.items[0].ItemName}. Damage dealt: ${damage}. ${target.name}'s health remaining: ${target.health}`);


}

// Character rosters
let bilbo = new Character('Bilbo');
let barion = new Character('Barion');

// Item distribution
let axe = new Item('Axe Of Glory (+8 strength)', 'Axe', 8); // For bilbo
bilbo.inventory.add(axe);

let bow = new Item('Bow of Accuracy (+3 strength)', 'Bow', 3); // For barion
barion.inventory.add(bow);

// Check if Characters have items after adding to characters.
// console.log(`${bilbo.name} has a ${bilbo.inventory.items[0].ItemName}`);
// console.log(`${barion.name} has a ${barion.inventory.items[0].ItemName}`);

// Simulate combat rounds
for (let round = 1; round <= numberOfRounds; round++) {
    // Bilbo attacks Barion
    const damageToBarion = bilbo.attack(barion);//combat system 
    displayResults(round, bilbo, barion, damageToBarion);
    if (barion.health <= 0){
        console.log("Barion has fallen!");
        break;
    }
    if (damageToBarion <= 20){ //Exp and level system - use damage dealt to track exp
        bilbo.level++
        bilbo.strength++
        console.log(`${bilbo.name} leveled up! New level: ${bilbo.level}`)
    }

    // Barion attacks Bilbo
    const damageToBilbo = barion.attack(bilbo);
    displayResults(round, barion, bilbo, damageToBilbo);
    if (bilbo.health <= 0){ //combat system 
        console.log("Bilbo has fallen!");
        break;
    }
    if (damageToBilbo <= 20){ //Exp and level system - use damage dealt to track exp
        barion.level++
        barion.strength++
        console.log(`${barion.name} leveled up! New level: ${barion.level}`)

    console.log("------");
    }
}
