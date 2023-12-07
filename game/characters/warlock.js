const Pet = require("./pet");
const Character = require("./character");

class Warlock extends Character{
  constructor(name) {
    super(name);
    this.name = name;
    this.pets = [];
    const doggy = new Pet("Nikki");
    this.pets.push(doggy);
  }
}

module.exports = Warlock;