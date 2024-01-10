const Character = require("./character");
const Lag = require("../spells/lag");
const Knife = require("../weapons/knife");
const Pet = require("./pet");

class Mage extends Character {
  constructor(name) {
    super(name, "mage", 2, 4, 6,  100, 10);
    this.pets = [];
    
    const dusty = new Pet("dusty", 10);
    this.pets.push(dusty);
   
    const lag = new Lag("lag");
    this.spells.push(lag);

    const knife = new Knife("knife", 40);
    this.weapons.push(knife);
    

  }
}

module.exports = Mage;