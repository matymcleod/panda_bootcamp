const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const mobs = require("./mobs/mobs");

const prompt = require("prompt-promise");

async function gameLoop() {
  
  let character;
  let mob = mobs[0];

  const classChoice = await prompt("Select a character:\n 1 = mage\n 2 = Shaman\n 3 = warlock\n")

  switch(classChoice) { 
    case "1":
      character = new Mage("MAGE");
    break;
    case "2":
      character = new Shaman("SHAMAN");
    break;
    case "3":
      character = new Warlock("WARLOCK");
    break;
    default: console.log(`PLEASE CHOOSE A VALID CHARACTER(must be lower case). \nGame Over. \nPress 'control' + 'D' to exit the game.`);
  }
      
  console.log(`You have selected ((( ${character.name} ))) \nHealth = ${character.health}\nStrength = ${character.getDamage("lag")}\nLevel = ${character.level}`);
  
  // console.log(mobs);
  const mobChoice = await prompt(`Select a Mob to fight:\n 1 = ${mobs[0].name}\n 2 = ${mobs[1].name}\n 3 = ${mobs[2].name}\n`)

  switch(mobChoice) {
    case "1":
    mob = mobs[0];
    break;
    case "2":
    mob = mobs[1];
    break;
    case "3":
    mob = mobs[2];
    break;
    default: console.log("Please choose either 1, 2 or 3 for valid mob")
  }
  console.log("You are now fighting <<< " + mob.name + " >>>\n Health = " + mob.health + "\n Attack = " + mob.attack);

  const fight = await prompt("Begin the game by choosing to \n 1 = cast a spell\n 2 = use weapon\n 3 = attack with pet\n")

  switch(fight) {
    case "1":
      console.log(`You have chosen to cast a spell, which spell would you like to use?`)
      console.log(character.spells)
  }

  while((character.health > 0) && (mob.health > 0)) {
    // Mob
    mob.health = mob.health - damage;
    console.log(`\n${mob.name} STATS`);
    console.log("ATTACK = ", mob.attack);
    console.log(mob.health);
    
    if((mob.health < 0) && (mob.name === "BADGUY")){
      console.log(`\nYAY! you defeated ${mob.name}`)
      mob = mobs[1];
      console.log(`\nYou are now fighting <<< ${mob.name} >>>`);
    }
    
    // Character
    const move = await prompt(`${character.name}!!!\nCast a spell to begin the game\n`)

    // Need to find a way to handle mob health stat when no input is entered in this prompt
    const damage = character.getDamage(move);
    console.log("damage -->", damage);
    console.log(`\n${character.name} STATS`)
    console.log("DAMAGE = ", character.attack);
    console.log("CHARACTER HEALTH = ", character.health);
  }
  const gameOver = "GAME OVER";
  console.log(`${gameOver}\nctrl+d to exit`)
  return;
}
gameLoop();