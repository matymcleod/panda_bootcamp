const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const Spell = require("./spells/spell");
const mobs = require("./mobs/mobs");
const prompt = require("prompt-promise");

async function gameLoop() {
  
  let character;
  let mob = mobs[0];
  const classChoice = await prompt("Select a character: mage, shaman or warlock \n")
  console.log(`You selected ((( ${classChoice} )))`);

  switch(classChoice) { 
    case "mage":
    character = new Mage("Player");
    break;

    case "shaman":
    character = new Shaman("Player");
    break;

    case "warlock":
    character = new Warlock("Player");
    break;
    
    default: console.log(`PLEASE CHOOSE A VALID CHARACTER(must be lower case). \nGame Over Loser. \nPress 'control' + 'D' to exit the game.`);
  }
  
  console.log(`You selected ${character} as your character`);
  // when mob[0] is defeted, mob[1]
   if(mob.health <= 0) {
    mob = mobs[1];
    console.log(`You are now fighting ${mob}`);
  }

  while(character.health > 0 && mobs[1].health > 0) {

  }

}

gameLoop();