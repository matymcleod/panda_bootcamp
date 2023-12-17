const Character = require("./character");
const Lag = require("../spells/lag");
const Knife = require("../weapons/knife");
const Pet = require("./pet");

class Mage extends Character {
  constructor(name) {
    super(name, "Mage", 2, 4, 6,  8, 10, 12);
    this.pets = [];
    const doggy = new Pet("doggy", 10);
    this.pets.push(doggy);
  }
}

module.exports = Mage;