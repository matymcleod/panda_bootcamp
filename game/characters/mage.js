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
   
    const lag = new Lag("lag");
    this.spells.push(lag);

    const knife = new Knife("knife");
    this.weapons.push(knife);
    

  }
}

module.exports = Mage;