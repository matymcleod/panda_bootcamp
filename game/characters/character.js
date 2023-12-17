class Character {
  constructor(name, className, attack, magic, defense, speed, health, mana) {
    this.name = name;
    this.level = 1;
    this.className = className;
    this.attack = attack;
    this.magic = magic;
    this.defense = defense;
    this.speed = speed;
    this.health = health;
    this.mana = mana;
    this.weapons = [];
    this.spells = [];
    this.activePet = null;
  }
  levelUp() {
    this.level = this.level + 1;
    if(this.className === "Mage") {
      this.magic = this.magic + 1;
      this.health = this.health + 50;
      this.mana = this.mana + 25;
    } else if(this.className === "Shaman") {
      this.magic = this.magic + 2;
      this.health = this.health + 50;
      this.mana = this.mana +24;
    } else if(this.className === "Warlock") {
      this.magic = this.magic + 3;
      this.health = this.health + 50;
      this.mana = this.mana + 26;
    } 
  }

  summonPet(petName) {
    // check if the string passed into this function call has a pet with a matching name.
    for(let i =0; i < this.pets.length; i++) {
      const pet = this.pets[i];
      if(petName === pet.name) {
        this.activePet = pet;
      }
    }
  }

  getAttack() {
    if(this.activePet !== null) {
      return this.attack = this.attack + this.activePet.attack;
    } else {
      return this.damage;
    }
  }
}

module.exports = Character;