const Weapon = require("./weapon");

class Knife extends Weapon {
  constructor(name) {
    super(name, 7)
  }
}

module.exports = Knife;