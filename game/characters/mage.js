const Character = require("./character");

class Mage extends Character {
  constructor(name) {
    super(name, "Mage", 2, 4, 6,  8, 10, 12);
    this.name = name;
  }
}

module.exports = Mage;