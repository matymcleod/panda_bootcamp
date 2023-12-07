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
}

module.exports = Character;