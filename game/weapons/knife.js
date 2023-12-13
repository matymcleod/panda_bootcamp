const Weapon = require("./weapon");

class Knife extends Weapon {
  constructor(name) {
    super("knife", 7)
  }
}

module.exports = Knife;