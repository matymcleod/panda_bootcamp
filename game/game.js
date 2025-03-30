const prompt = require("prompt-promise");
const mobs = require("./mobs/mobs");
const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const errorHandling = require("./Error handling/errors");
// const classChoice = require("./prompts");

async function gameLoop() {
  // Default players
  let character;
  let mob = mobs[0];

while(true) {
const classChoice = await prompt("SELECT CHARACTER:\n 1 MAGE\n 2 SHAMAN\n 3 WARLOCK\nEND GAME CTRL + C\n")
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
        continue;
    }
    break; // Exit the loop if a valid option is selected
  }
  // Once a charcter has been created, a message is displayed with the charcaters basic stats
  // console.log(`${character.name}\nHEALTH ${character.health}\nLEVEL ${character.level}`);
  
  while(true) {// This is a prompt that waits for the user to select a mob to fight
  const mobChoice = await prompt(`SELECT MOB:\n 1 ${mobs[0].name}\n 2 ${mobs[1].name}\n 3 ${mobs[2].name}\nEND GAME CTRL + C\n`)

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
        console.log(`${errorHandling.mobChoiceErr}`)
        continue;
    }
    break;
  }

  console.log(`ITS ${character.name} VS ${mob.name}\n`)
  console.log(`${character.name} STATS \nLEVEL ${character.level}\nHEALTH ${character.health}\n`);
  console.log(`${mob.name} STATS \nHEALTH ${mob.health}\nATTACK ${mob.attack}\n`);
  
  // The main loop that controls the flow of the game. Once all 3 mobs health is below zero, you win! If your characters health goes below zero, say bye bye charcter. Game Over for you :(
  while((character.health > 0) && (mob.health > 0)) {
    // This prompt allows users to to enter their choice of attack
    
    while(true) {
      const charAttack = await prompt(`WHAT WILL YOU USE TO FIGHT ${mob.name}? \n 1 SPELL\n 2 WEAPON\n 3 PET\n`)
      // This switch executes the users choice of attack on the mob and displays the mobs health as a result of your attack
      switch(charAttack) {
        
        case "1":
          // *** Find a way to print spells numbered so they are selectable by entering numbers into the charSpell prompt
          console.log(`CHOOSE A SPELL ${character.spells}`);
          console.log(character.spells);
          const charSpell = await prompt(``);
          const spellAttack = character.getDamage(charSpell);
          mob.health -= spellAttack;
          console.log(`YOU ATTACK ${mob.name} FOR ${spellAttack}\n${mob.name} HEALTH = ${mob.health}`)
          break;

        case "2":
          console.log(character.weapons);
          const weaponAttack = await prompt(`CHOOSE WEAPON\n`)
          break;

        case "3":
          console.log(character.pets);
          const attackPet = await prompt(`CHOOSE PET\n`)
          break;


        default: 
          console.log(`${errorHandling.invalidChoice}`)
          continue;
      } 
      break;
    }
      // This array is needed to hold mobs with health higher than zero 
      const livingMobs = [];

      // If mob health is greater than zero
      if(mob.health > 0){
        
        // mob attack calculation
        character.health -= mob.attack
        console.log(`${mob.name} HITS YOU BACK FOR ${mob.attack}`);
        console.log(`${character.name} HEALTH ${character.health}`)
        continue;
      } else {
        console.log(`\n((( YOU DEFEATED ${mob.name} )))`)
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