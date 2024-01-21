const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const mobs = require("./mobs/mobs");

const prompt = require("prompt-promise");

async function gameLoop() {
  
  let character;
  let mob = mobs[0];

  const classChoice = await prompt("Select a character: mage, shaman or warlock \n")

  switch(classChoice) { 
    case "mage":
    character = new Mage("MAGE");
    break;
    case "shaman":
    character = new Shaman("SHAMAN");
    break;
    case "warlock":
    character = new Warlock("WARLOCK");
    break;
    default: console.log(`PLEASE CHOOSE A VALID CHARACTER(must be lower case). \nGame Over. \nPress 'control' + 'D' to exit the game.`);
  }
  // console.log("character", character)
  console.log(`You have selected ((( ${character.name} ))) \nHealth = ${character.health}\nStrength = ${character.getDamage()}\nLevel = ${character.level}`);
  console.log(`You are now fighting <<< ${mob.name} >>>\nHealth = ${mob.health} \nAttack = ${mob.attack}`);

  
  while((character.health > 0) && (mob.health > 0)) {
    // Character stuff
    console.log(`((( ${character.name} SPELLS )))`)
    console.log(character.spells)
    const move = await prompt(`${character.name}!!!\nCast a spell to begin the game\n`)
    const damage = character.getDamage(move);
    console.log(`\n${character.name} STATS`)
    console.log("DAMAGE = ", character.attack);
    console.log("HEALTH = ", character.health);
    
    // Mob stuff
    mob.health -= damage;
    console.log(`\n${mob.name} STATS`);
    console.log("ATTACK = ", mob.attack);
    console.log("HEALTH = ", mob.health);
    
    if((mob.health < 0) && (mob.name === "BADGUY")){
      console.log(`\nYAY! you defeated ${mob.name}`)
      mob = mobs[1];
      console.log(`\nYou are now fighting <<< ${mob.name} >>>`);
    }
    
  }
  const gameOver = "GAME OVER";
  console.log(`${gameOver}\nctrl+d to exit`)
  return;
}
gameLoop();