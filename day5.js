// Day 5 - object models with mixed logic
// SET: create a character with params health, level, weapon damage, getDamage function that logs this characters damage level and a function that allows this character to level up.

// const caveman = {
//   health: 100,
//   level: 1,
//   clubDamage: 10,
//   stinkDefense: 20,
//   getDamage: function(){ // When called, this function makes the damage level available to the rest of the program
//     return this.clubDamage;
//   },
//   levelUp: function() { // When this character levels up it's damage property also increases
//     this.level += 1; // The same as => this = this + 1
//     this.clubDamage += 10; // The same as => this = this + 10
//   },
//   getDefense: function() {
//     return this.stinkDefense;
//   }
// }
// // TEST: log initial charater values to the console, then instantiate the level up function and log the results of damage and level to the console and check if the logic is working 
// console.log('CAVEMAN initial level => ', caveman.level);
// console.log('CAVEMAN initial damage => ', caveman.clubDamage);
// caveman.levelUp();
// console.log('CAVEMAN level => ', caveman.level);
// console.log('CAVEMAN damage => ', caveman.clubDamage);
// caveman.levelUp();
// console.log('CAVEMAN level => ', caveman.level);
// console.log('CAVEMAN damage => ', caveman.clubDamage);
// caveman.levelUp();
// console.log('CAVEMAN level => ', caveman.level);
// console.log('CAVEMAN damage => ', caveman.clubDamage);

// // SET: create another character with similar properties but a different type of damage to demonstrate each objects versatility 
// const dinosour = {
//   health: 100,
//   level: 1,
//   biteDamage: 20,
//   armorDefense: 20,
//   getDamage: function(){ // This logic is the same as the logic in the caveman object. It returns the damage level to the program
//     return this.biteDamage
//   },
//   getDefense: function() {
//     return this.armorDefense;
//   }
// }

// // SET: create a fight function that logs each characters initial damage level to the console, then have the logic from one character affect the others.
// function fight(character1, character2) {
//   // SET: save each characters initial damage level to a variable 
//   const character1Damage = character1.getDamage();
//   const character2Damage = character2.getDamage();
//   // TEST: log initial character damage level to the console.
//   console.log("character 1 damage => ", character1Damage);
//   console.log("character 2 damage => ", character2Damage)
// }

// fight(caveman, dinosour); // 
// console.log("Caveman after fight funciton is called => ", caveman);
// console.log("Dinosour after fight function is called => ", dinosour);

// const userMaty = {
//   name: 'Maty',
//   isAdmin: false,
//   titles: ['bossman', 'admin', 'labor']
// }

// function checkIfUserIsAdminOrBossman(user) {
//   for(i = 0; i < user.titles.length; i++){
//     const title = user.titles[i]
//     if(title === 'bossman'){
//       user.titles = user.titles.filter(item => item !== 'bossman');
//     } else if(title === 'admin'){
//       console.log('USER IS ADMIN');
//       user.isAdmin = true;
//     } else {
//       continue;
//     }
//   }
// }

// console.log(userMaty);
// checkIfUserIsAdminOrBossman(userMaty);
// console.log(userMaty);

// Day 5 Homework:
// RECAP: We learned functions an be properties on objects too! We are going to build on the game example. If you re-typed my script from the lesson, DO NOT START FROM THERE. Open a new file. You can have it open for reference for sure, but let's start a new file so we re-type again and do it from csratch.

// 1) Our character model we want to create objects for:
// MUST have name, a string. ie: "Horseman"
// MUST have health, a number. ie: "100"
// MUST have level, a number, ie: 1.
// MUST have class, a string. ie: Warlock
// MUST have getDamage(), a function that returns a number.

// We want to create two characters: a Warrior, and a Warlock.

// The interesting thing here is, the Warlock does not do damage itself. It can summon Pets. Pets do damage too, and when a Warlock attacks, they attack as well.

// our pet model we want to create objects for:
// MUST have name, a string. ie: "Imp", or "Faerie"
// MUST have getDamage(), a function that returns a number.

// Create two pets, and two characters. The Warlock character should have an array of pets, which consists of the two pets you made, and when getDamage() is called on the warlock, instead of using this.damage, it should use the damage from the Warlock's pets instead, and return the total damage of all the Warlock's pets.

const imp = {
  name: 'imp',
  damage: 10,
  getDamage: function() {
    return this.damage;
  }
};

const fergie = {
  name: 'fergie',
  damage: 12,
  getDamage: function() {
    return this.damage;
  }
};

const warrior = {
  name: 'maty',
  level: 1,
  health: 100,
  class: 'warrior',
  getDamage: function() {
    return ;
  }
};

const warlock = {
  name: 'oliver',
  level: 1,
  health: 100,
  class: 'warlock',
  pets: [fergie, imp],
  getDamage: function(){
    let totalDamage = 0;
    for(let i = 0; i < this.pets.length; i++){
      const petDamage = this.pets[i];
      totalDamage += petDamage.getDamage();
    } 
    return totalDamage;
  }
};

console.log("warlock damage => ", warlock.getDamage());


// 2) Declare a fight method that takes two arguments, both of them are characters.
// Fight should get the damage from each character, and contain an if statement after that chooses the winner based on who has more damage, and then log out the winner's name