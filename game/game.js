const prompt = require("prompt-promise");
const mobs = require("./mobs/mobs");
const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const errorHandling = require("./Error handling/errors");

async function gameLoop() {
  // Default players
  let character;
  let mob = mobs[0];

  // This is the first promt of the game that allows users to see which characters they can use to get the game started
  const classChoice = await prompt("SELECT CHARACTER:\n 1 = MAGE\n 2 = SHAMAN\n 3 = WARLOCK\n END GAME: CTRL + C\n")

  // This switch allows users to create a new character based on which case number is input by the user.
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
      console.log(`${errorHandling.classChoiceError}`);
      classChoice;
  }
  
  // Once a charcter has been created, a message is displayed with the charcaters basic stats
  console.log(`${character.name}\nHEALTH ${character.health}\nLEVEL ${character.level}`);
  
  // This is a prompt that waits for the user to select a mob to fight
  const mobChoice = await prompt(`SELECT MOB:\n 1 = ${mobs[0].name}\n 2 = ${mobs[1].name}\n 3 = ${mobs[2].name}\n`)

  // Used if user selects a mob that is not valid 
  const mobChoiceErr = "INVALID CHOICE";

  // This switch allows users to select a mob based on whichever case number is input by the user
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
      console.log(`${mobChoiceErr}`)
  }
  console.log(`ITS ${classChoice} VS ${mobChoice} !!!`)
  console.log(`${classChoice} LEVEL ${character.level} HEALTH ${character.health}`);
  console.log(`${mobChoice} HEALTH ${mobChoice} ATTACK ${mob.attack}`)
  
  // The main loop that controls the flow of the game. Once all 3 mobs health is below zero, you win! If your characters health goes below zero, say bye bye charcter. Game Over for you :(
  while((character.health > 0) && (mob.health > 0)) {
    // This prompt allows users to to enter their choice of attack
    const charAttack = await prompt(`Your move ${character.name}\n 1 = cast a spell\n 2 = use weapon\n 3 = attack with pet\n`)
    
    // This switch executes the users choice of attack on the mob and displays the mobs health as a result of your attack
    switch(charAttack) {
      case "1":
        console.log(character.spells);
        const charSpell = await prompt(`You have chosen to cast a spell, which spell would you like to use?\n`);
        const spellAttack = character.getDamage(charSpell);
        mob.health -= spellAttack;
        console.log(`You hit ${mob.name} for ${spellAttack}\n ${mob.name} Health = ${mob.health}`)
        break;
      case "2":
        console.log(character.weapons);
        const weaponAttack = await prompt(`You have chosen to attack with a Weapon, choose your weapon\n`)
        break;
      case "3":
        console.log(character.pets);
        const attackPet = await prompt(`You have chosen to attack with a Pet, choose your pet\n`)
        break;
      default: 
        console.log("You entered something invalid, please quit and restart the game")
    } 
      // This array is needed to hold mobs with health higher than zero 
      const livingMobs = [];

      // If mob health is greater than zero
      if(mob.health > 0){
        
        // mob attack calculation
        character.health -= mob.attack
        console.log(`${mob.name} hits you back for ${mob.attack}`);
        console.log(`${character.name} Health = ${character.health}`)
        continue;
      } else {
        console.log(`\nYAY! you defeated ${mob.name}`)
        // Search through each mob in the mobs array. Mobs with health greater than zero get pushed into the living mobs array
        for(let i = 0; i < mobs.length; i++) {
          let livingMob = mobs[i];
          if(mobs[i].health > 0){
            livingMobs.push(livingMob);
          } else {
            // if all mobs have been beaten/removed from the mobs array, you win the game
            return "Game Over, You Won!"
          }
        }
        if(livingMobs.length > 1) {
        console.log(livingMobs);
        const nextMob = await prompt(`Please choose the next mob to fight\n 1 = ${livingMobs[0].name}\n 2 = ${livingMobs[1].name}\n`)

        switch(nextMob) {
          case "1":
            mob = livingMobs[0];
            break;

          case "2":
            mob = livingMobs[1];
            break;
          
          default:
            console.log(`${mobChoiceErr}`)
        }
      
      } else {
        mob = livingMobs[0];
        console.log(`You are now fighting the final Mob boss ${mob}, good luck!`)
        continue;
      }
    }
  }
}
gameLoop();