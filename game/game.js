const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const Spell = require("./spells/spell");
const prompt = require("prompt-promise");

// const shaman = new Shaman("shaman");
// console.log('TEST::: shaman :::', shaman);

// const warlock = new Warlock("warlock");
// console.log('TEST::: warlock :::', warlock);

const mage = new Mage("mage");
console.log('TEST ::: mage DEFAULT ::: TEST ', mage);

const shaman = new Shaman("shaman");
console.log('TEST ::: shaman DEFAULT ::: TEST ', shaman);

const warlock = new Warlock("warlock");
console.log('TEST ::: warlock DEFAULT ::: TEST ', warlock);
// const spell = new Spell("test", 5, 6);
// console.log('TEST ::: spell :::', spell);

// mage.levelUp();
// console.log('TEST ::: mage.levelUp :::', mage);
mage.summonPet('dusty');
shaman.summonPet('sophie');
warlock.summonPet('nikki');
// console.log('TEST ::: mage.summonPet :::', mage);

mage.equipWeapon("knife");
shaman.equipWeapon("pistol");
warlock.equipWeapon("sword");
// console.log('TEST ::: equip knife ::: ', shaman.equippedWeapon);

mage.getDamage();
shaman.getDamage();
warlock.getDamage();
console.log('TEST ::: mage.getDamage ::: TEST ', mage);
console.log('TEST ::: shaman.getDamage ::: TEST ', shaman);
console.log('TEST::: warlock.getDamage ::: TEST ', warlock);