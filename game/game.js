const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const Spell = require("./spells/spell");

// const shaman = new Shaman("shaman");
// console.log('TEST::: shaman :::', shaman);

// const warlock = new Warlock("warlock");
// console.log('TEST::: warlock :::', warlock);

const mage = new Mage("mage");
console.log('TEST::: mage :::', mage);

// const spell = new Spell("test", 5, 6);
// console.log('TEST::: spell :::', spell);

mage.levelUp();
console.log('TEST 1 ::: mage.levelUp :::', mage);

mage.summonPet("doggy");
console.log('TEST 2 ::: mage.summonPet :::', mage);

mage.getAttack();
console.log('TEST 3 ::: mage.getAttack :::', mage);