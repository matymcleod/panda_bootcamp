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
    default: 
      console.log(`PLEASE CHOOSE A VALID CHARACTER(must be lower case). \nGame Over. \nPress 'control' + 'D' to exit the game.`);
  }
      
  console.log(`You have selected ((( ${character.name} ))) \nHealth = ${character.health}\nStrength = ${character.getDamage("lag")}\nLevel = ${character.level}`);
  
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
    default: 
      console.log("Please choose either 1, 2 or 3 for valid mob")
  }
  console.log("You are now fighting <<< " + mob.name + " >>>\n Health = " + mob.health + "\n Attack = " + mob.attack);

  const initAttack = await prompt("Begin the game by choosing to \n 1 = cast a spell\n 2 = use weapon\n 3 = attack with pet\n")

  switch(initAttack) {
    case "1":
      const initSpell = await prompt(`You have chosen to cast a spell, which spell would you like to use?`)
      console.log(character.spells);
      break;
    case "2":
      const initWeapon = await prompt(`You have chose to attack with a Weapon, choose your weapon`)
      console.log(character.weapons);
      break;
    case "3":
      const initPet = await prompt(`You have chosen to attack with a Pet, choose your pet`)
      console.log(character.pets);
      break;
    default: 
      console.log("You entered something invalid, please quit and restart the game")
    } 

  while((character.health > 0) && (mob.health > 0)) {
    // Character
    const move = await prompt(`${character.name}!!!\nMake your next move\n`)
    const damage = character.getDamage(move);
  
    // Need to find a way to handle mob health stat when no input is entered in this prompt
    console.log(`${character.name} HEALTH = ${character.health}`);

    // Mob
    mob.health -= damage;
    console.log(`${mob.name} HEALTH = ${mob.health}`);
    
    if(mob.health < 0){
      console.log(`\nYAY! you defeated ${mob.name}`)
      // need an array method to place the current mob at the begining of the mobs array 
      // mobs.shift() // shift removes the first element of an array and changes the length of the array
    }
    const livingMobs = [];
    for(let i = 0; i < mobs.length; i++) {
      if(mobs[i].health > 0){
        
      }
    }
    const nextMob = await prompt("Please choose the next mob to fight")
    // if all mobs have been beaten/removed from the mobs array, you win the game
    if(.length < 1) {
      return "Game Over, You Won!"
    }
  }
}
gameLoop();