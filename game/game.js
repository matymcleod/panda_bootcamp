const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const mobs = require("./mobs/mobs");

const prompt = require("prompt-promise");

async function gameLoop() {
  
  let character;
  let mob = mobs[0];

  const classChoice = await prompt("Select a character: mage, shaman or warlock \n")
  console.log(`You selected ((( ${classChoice} )))`);

  switch(classChoice) { 
    case "mage":
    character = new Mage("mage");
    break;

    case "shaman":
    character = new Shaman("shaman");
    break;

    case "warlock":
    character = new Warlock("warlock");
    break;
    
    default: console.log(`PLEASE CHOOSE A VALID CHARACTER(must be lower case). \nGame Over. \nPress 'control' + 'D' to exit the game.`);
  }

  console.log(`You are now fighting ${mob.name}`);

  if(mob.health < 0 && mob.name === "badgay"){
    console.log(`congrats! you defeated ${mob.name}`)
    mob.slice()
    console.log(`You are now fighting ${mob.name}`);
  }
  // while((character.health > 0) && (mob.health > 0)) {

  // }
}
gameLoop();