const Pet = require("./pet");
const Character = require("./character");

class Shaman extends Character{
  constructor(name) {
    super(name, "Shaman", 1, 2, 3, 4, 5,6);
    this.name = name;
    this.pets = [];
    const kitty = new Pet("dusty");
    this.pets.push(kitty);
  }
}

module.exports = Shaman;