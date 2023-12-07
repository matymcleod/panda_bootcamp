const Pet = require("./pet");
const Character = require("./character");

class Warlock extends Character{
  constructor(name) {
    super(name, "Warlock", 6, 5, 4, 3, 2, 1);
    this.name = name;
    this.pets = [];
    const doggy = new Pet("Nikki");
    this.pets.push(doggy);
  }
}

module.exports = Warlock;