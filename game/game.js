const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const Mage = require("./characters/mage");
const Spell = require("./spells/spell");
const prompt = require("prompt-promise")

// const shaman = new Shaman("shaman");
// console.log('TEST::: shaman :::', shaman);

// const warlock = new Warlock("warlock");
// console.log('TEST::: warlock :::', warlock);

const mage = new Mage("mage");
console.log('TEST 0 --- mage ---', mage);

const spell = new Spell("test", 5, 6);
console.log('TEST::: spell :::', spell);

mage.levelUp();
console.log('TEST 1 ::: mage.levelUp :::', mage);

mage.summonPet("doggy");
console.log('TEST 2 ::: mage.summonPet :::', mage);

mage.getAttack("lag");
console.log('TEST 3 ::: mage.getAttack :::', mage);

mage.castSpell("lag");
console.log('TEST 4 ::: mage.castSpell :::', mage);