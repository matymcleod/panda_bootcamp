class Gangster {
  constructor(name, crew, position, weapon, damage) {
    this.name = name;
    this.crew = crew;
    this.position = position; 
    this.weapon = weapon;
    this.damage = damage;
  }
}

class FiveO {
  constructor(name, district, rank, damage) {
    this.name = name;
    this.district = district;
    this.rank = rank;
    this.damage = damage;
  }
}

const avon = new Gangster("Avon", "West side", "Top dawg", "granade", 90);
const rawls = new FiveO("Rawls", "Central", "Commander", 90)

console.log(avon);
console.log(rawls);