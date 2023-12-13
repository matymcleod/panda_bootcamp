const Weapon = require("./weapon");

class Sword extends Weapon {
  constructor(name) {
    super("sword", 6)
    this.name = name;
  }
}

module.exports = Sword;