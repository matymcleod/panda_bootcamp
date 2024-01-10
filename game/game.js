const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const Spell = require("./spells/spell");
const prompt = require("prompt-promise");

// Mage tests
// const mage = new Mage("mage");
// console.log('TEST ((( mage DEFAULT )))');
// console.log(mage);
// mage.levelUp();
// console.log('TEST ((( mage.levelUp )))', mage.level);
// mage.summonPet("dusty");
// console.log('TEST ((( mage.summonPet )))', mage.activePet);
// mage.equipWeapon("knife");
// console.log('TEST ((( mage.equipWeapon )))', mage.equippedWeapon);
// mage.getDamage();
// console.log('TEST ((( mage.getDamage )))');
// console.log(mage);

// Shaman tests
// const shaman = new Shaman("shaman");
// console.log('TEST ((( shaman DEFAULT )))');
// console.log(shaman);
// shaman.levelUp();
// console.log('TEST ((( shaman.levelUp )))', shaman.level);
// shaman.summonPet("sophie");
// console.log('TEST ((( shaman.summonPet )))', shaman.activePet);
// shaman.equipWeapon("pistol");
// console.log('TEST ((( shaman.equipWeapon )))', shaman.equippedWeapon);
// shaman.getDamage("phase");
// console.log('TEST ((( shaman.getDamage )))');
// console.log(shaman);

// Warlock tests
// const warlock = new Warlock("warlock");
// console.log('TEST ((( warlock DEFAULT )))');
// console.log(warlock);
// warlock.levelUp();
// console.log('TEST ((( warlock.levelUp )))', warlock.level);
// warlock.summonPet("nikki");
// console.log('TEST ((( warlock.summonPet )))', warlock.activePet);
// warlock.equipWeapon("sword");
// console.log('TEST ((( warlock.equipWeapon )))', warlock.equippedWeapon);
// warlock.getDamage("stun");
// console.log('TEST ((( warlock.getDamage )))');
// console.log(warlock);