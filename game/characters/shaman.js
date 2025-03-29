const Pet = require("../pets/pet");
const Character = require("./character");
const Phase = require("../spells/phase");
const Pistol = require("../weapons/pistol");

class Shaman extends Character{
  constructor(name) {
    super(name, "shaman", 1, 2, 3, 100, 6);
    this.name = name;
    this.pets = [];
    
    // Default loadout
    const sophie = new Pet("sophie", 5);
    this.pets.push(sophie);

    const phase = new Phase("phase");
    this.spells.push(phase);

    const pistol = new Pistol("pistol");
    this.weapons.push(pistol);
  }
}

module.exports = Shaman;