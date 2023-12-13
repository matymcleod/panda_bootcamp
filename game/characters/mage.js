const Character = require("./character");
const Lag = require("../spells/lag")
class Mage extends Character {
  constructor(name) {
    super(name, "Mage", 2, 4, 6,  8, 10, 12);
    this.name = name;
    this.spell = Lag;
  }
}

module.exports = Mage;