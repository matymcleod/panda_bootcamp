const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const Spell = require("./spells/spell");
const prompt = require("prompt-promise");

// Mage tests
const mage = new Mage("mage");
console.log('TEST ((( mage DEFAULT )))', mage);

mage.levelUp();
console.log('TEST ((( mage.levelUp )))', mage.level);

mage.summonPet("dusty");
console.log('TEST ((( mage.summonPet )))', mage.activePet);

mage.equipWeapon("knife");
console.log('TEST ((( mage.equipWeapon )))', mage.equippedWeapon);

mage.getDamage();
console.log('TEST ((( mage.getDamage )))', mage);

// Shaman tests
// const shaman = new Shaman("shaman");
// console.log('TEST ((( shaman DEFAULT )))', shaman);
// shaman.levelUp();
// console.log('TEST ((( shaman.levelUp )))', shaman);
// shaman.getDamage();
// console.log('TEST ((( shaman.getDamage )))', shaman);

// // Warlock tests
// const warlock = new Warlock("warlock");
// console.log('TEST ((( warlock DEFAULT )))', warlock);
// warlock.levelUp();
// console.log('TEST ((( warlock.levelUp )))', warlock);
// warlock.getDamage();
// console.log('TEST ((( warlock.getDamage )))', warlock);