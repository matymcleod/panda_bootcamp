const Spell = require('./spell');

class Lag extends Spell {
  constructor(name) {
    super(name, 25, 2)
  }
}

module.exports = Lag;