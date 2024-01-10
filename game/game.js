const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const Spell = require("./spells/spell");
const mobs = require("./mobs/mobs");
const prompt = require("prompt-promise");

async function gameLoop() {
  let character;
  let mob = mobs[0];
  const classChoice = await prompt("Select a character: mage, shaman or warlock")
  console.log(`You selected ${classChoice}`);
  
  switch(classChoice) { 
    case "mage":
    character = new Mage("Player");
    console.log(character);
    break;

    case "shaman":
    character = new Shaman("Player");
    console.log(character);
    break;

    case "warlock":
    character = new Warlock("Player");
    console.log(character);
    break;
    
    default: console.log(`PLEASE CHOOSE A VALID CHARACTER(must be lower case)`);
  }
}

gameLoop();