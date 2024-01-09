const pistol = require("../weapons/pistol");
class Character {
  constructor(name, className, attack, defense, speed, health, mana) {
    this.name = name;
    this.level = 1;
    this.className = className;
    this.attack = attack;
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
      this.attack = this.attack + 1;
      this.health = this.health + 50;
      this.mana = this.mana + 25;
    } else if(this.className === "Shaman") {
      this.attack = this.attack + 2;
      this.health = this.health + 50;
      this.mana = this.mana +24;
    } else if(this.className === "Warlock") {
      this.attack = this.attack + 3;
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

  castSpell(spellName){
    for(let i = 0; i < this.spells.length; i++) {
      const spell = this.spells[i];
      if(spellName === spell.name) {
        return this.attack + spell.power
      }
    }
  }

  equippedWeapon(weaponName) {
    for(let i =0; i < this.weapons.length; i++) {
      const weapon = this.weapons[i];
      if(weaponName === weapon.name) {
        this.weapon.push(weapon)
      }
    }
  }
  
  getAttack(spellName){
    for(let i = 0; i < this.spells.length; i++) {
      const spell = this.spells[i];
      if(spellName === spell.name) {
        return this.attack + spell.power
      }
      if(!spell) {
        return 0;
      }
    }
      if(this.activePet) {
        return this.attack = this.attack + this.activePet.attack;
      } else {
        return this.attack + this.weapons;
      }
    }
}

module.exports = Character;