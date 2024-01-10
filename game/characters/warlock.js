const Pet = require("./pet");
const Character = require("./character");
const Stun = require("../spells/stun");
const Sword = require("../weapons/sword");
class Warlock extends Character{
  constructor(name) {
    super(name, "warlock", 6, 5, 4, 100, 2);
    this.name = name;
    this.pets = [];

    const nikki = new Pet("nikki", 10);
    this.pets.push(nikki);

    const stun = new Stun("stun")
    this.spells.push(stun);

    const sword = new Sword("sword");
    this.weapons.push(sword);
  }
}

module.exports = Warlock;