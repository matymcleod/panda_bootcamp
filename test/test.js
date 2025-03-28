class Gangster {
  constructor(name, crew, position, weapon, damage) {
    this.name = name;
    this.crew = crew;
    this.position = position; 
    this.weapon = weapon;
    this.damage = damage;
  }
  getDamage() {
    return this.damage;
  }
}
const avon = new Gangster("Avon", "West side", "Top dawg", "granade", 90);
// console.log(avon);

class Hopper extends Gangster{
  constructor(name) {
    super(name,)

  }
}

const bodi = new Hopper("Bodi", "West side", "crew chief", "nine", 45);
console.log("bodi ==>", bodi);

class FiveO {
  constructor(name, district, rank, damage) {
    this.name = name;
    this.district = district;
    this.rank = rank;
    this.damage = damage;
  }
}

const rawls = new FiveO("Rawls", "Central", "Commander", 90)

// console.log(rawls);