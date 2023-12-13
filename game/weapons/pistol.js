const Weapon = require("./weapon");

class Pistol extends Weapon {
  constructor(name) {
    super("pistol", 9)
    this.name = name;
  }
}

module.exports = Pistol;