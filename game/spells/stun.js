const Spell = require('./spell');

class Stun extends Spell {
  constructor(name) {
    super(name, 2, 1)
  }
}

module.exports = Stun;