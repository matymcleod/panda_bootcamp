const Character = require("./character");
const Lag = require("../spells/lag");
const Knife = require("../weapons/knife");

class Mage extends Character {
  constructor(name) {
    super(name, "Mage", 2, 4, 6,  8, 10, 12);
    this.name = name;
    this.spell = Lag;
    this.weapon = Knife;
    this.doggy = new Pet("doggy", 10);
    this.pets.push(doggy);
  }
}

module.exports = Mage;