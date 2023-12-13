const Spell = require('./spell');

class Phase extends Spell {
  constructor(name) {
    super(name, 3, 2)
  }
}

module.exports = Phase;