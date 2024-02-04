const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const mobs = require("./mobs/mobs");

const prompt = require("prompt-promise");

async function gameLoop() {
  
  let character;
  let mob = mobs[0];

  const classChoice = await prompt("Select a character:\n 1 = mage\n 2 = Shaman\n 3 = warlock\n")
  const classChoiceErr = "PLEASE CHOOSE A VALID CHARACTER. \nGame Over. \nPress 'control' + 'D' to exit the game.";
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
      console.log(`${classChoiceErr}`);
  }
      
  console.log(`You have selected ((( ${character.name} ))) \nHealth = ${character.health}\nLevel = ${character.level}`);
  
  const mobChoice = await prompt(`Select a Mob to fight:\n 1 = ${mobs[0].name}\n 2 = ${mobs[1].name}\n 3 = ${mobs[2].name}\n`)

  const mobChoiceErr = "Please choose a valid Mob yo"
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
  console.log("You are now fighting <<< " + mob.name + " >>>\n Health = " + mob.health + "\n Attack = " + mob.attack);
  
  while((character.health > 0) && (mob.health > 0)) {
    const charAttack = await prompt(`Your move ${character.name}\n 1 = cast a spell\n 2 = use weapon\n 3 = attack with pet\n`)
    
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
          
      if(mob.health > 0){
        // mob attack
        character.health -= mob.attack
        console.log(`${mob.name} hits you back for ${mob.attack}`);
        console.log(`${character.name} Health = ${character.health}`)
      } else {
        console.log(`\nYAY! you defeated ${mob.name}`)
        const livingMobs = [];
        for(let i = 0; i < mobs.length; i++) {
          let livingMob = mobs[i];
          if(mobs[i].health > 0){
            livingMobs.push(livingMob);
          }
        }
        console.log(livingMobs);
        const nextMob = await prompt(`Please choose the next mob to fight\n 1 = ${livingMobs[0]}\n 2 = ${livingMobs[1]}`)

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

    }

    // if all mobs have been beaten/removed from the mobs array, you win the game
    if(livingMobs.length < 1) {
      return "Game Over, You Won!"
    }
  }
}
gameLoop();