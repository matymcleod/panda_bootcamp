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
    this.pets = [];
    this.spells = [];
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
  getDamage() {
    
  }
}

module.exports = Character;