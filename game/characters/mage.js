const Character = require("./character");

class Mage extends Character {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

module.exports = Mage;