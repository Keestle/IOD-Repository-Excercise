// Monster Collection 
const monsterCollection = new Set(); 

monsterCollection.add("Red Dragon");
monsterCollection.add("Banderhob");
monsterCollection.add("Hobgoblin");
monsterCollection.add("Spectre");
monsterCollection.add("Lich");

function monsterAdd (name){
    if (monsterCollection.has(name)){
        console.log("It's Already in There!")
    }
    else{
    monsterCollection.add(name)
    console.log (monsterCollection)
    }
}

monsterAdd("Goblin")
monsterAdd("Goblin")

// Each monster in collection mapped to a treasure location and clue.

const treasureMap = new Map();
treasureMap.set("Dragon", "Hidden in the Volcano's Heart");
treasureMap.set("Banderhob", "Inside the rusty bin under the bridge");
treasureMap.set("Hobgoblin", "Speak with the Bartender of the Dancing Pony");
treasureMap.set("Goblin", "My sheep ate it, it lives outside of town");
treasureMap.set("Spectre", "Search by the riverbed, you will find the black diamonds you seek.");
treasureMap.set("Lich", "My phalactary is in my left eye.");

// console.log(treasureMap)

function revealTreasure(key) {
    console.log(treasureMap.get(key))
}
revealTreasure("Spectre")

// Messaging system between players.

let player1 = { name: "Alice" };
let player2 = { name: "Barion" };
let secretMessages = new WeakMap();

function sendingSecretMessage(sender, receiver, message) {
  // Retrieve existing messages or create new ones
  let senderMessages = secretMessages.get(sender) || {};
  let receiverMessages = secretMessages.get(receiver) || {};

  // Add the message to sender's and receiver's messages
  senderMessages.message = message;
  receiverMessages.message = message;

  // Store the updated messages back in the WeakMap
  secretMessages.set(sender, senderMessages);
  secretMessages.set(receiver, receiverMessages);
}

sendingSecretMessage(player1, player2, "Please buy me a health potion please.");
sendingSecretMessage(player2, player1, "I've got your potion.");

console.log(secretMessages.get(player1));
console.log(secretMessages.get(player2));


// Save and Load functions to JSON files.

// Function to save game state to JSON
function saveGameStateToJson() {
  const gameState = { monsters: Array.from(monsterCollection), treasures: Array.from(treasureMap) };
  const gameStateJSON = JSON.stringify(gameState);
  console.log("Game state saved to JSON:");
  console.log(gameStateJSON);
  return gameStateJSON;
}

// Function to load game state from JSON and reconstruct Sets and Maps
function loadGameStateFromJson(jsonData) {
  try {
    const loadedGameState = JSON.parse(jsonData);

    // Reconstruct Sets and Maps
    const loadedMonsterCollection = new Set(loadedGameState.monsters);
    const loadedTreasureMap = new Map(loadedGameState.treasures);

    console.log("Game state loaded from JSON:");
    console.log("Monsters:", loadedMonsterCollection);
    console.log("Treasures:", loadedTreasureMap);

    return { monsterCollection: loadedMonsterCollection, treasureMap: loadedTreasureMap };
  } catch (error) {
    console.error("Error loading game state from JSON:", error.message);
    return null;
  }
}

// Example usage
const savedGameState = saveGameStateToJson();
const loadedGameState = loadGameStateFromJson(savedGameState);

// Update references to loaded game state
if (loadedGameState) {
  monsterCollection.clear();
  monsterCollection.add(...loadedGameState.monsterCollection);
  treasureMap.clear();
  loadedGameState.treasureMap.forEach((value, key) => treasureMap.set(key, value));
}

