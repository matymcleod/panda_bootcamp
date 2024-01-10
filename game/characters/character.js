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
  
  equipWeapon(weaponName) {
    // check to see if this character has a weapon that matches the value that is being passed in, if so, set equippedWeapon to that value
    for(let i =0; i < this.weapons.length; i++) {
      const weapon = this.weapons[i];
      if(weapon.name === weaponName) {
        this.equippedWeapon = weapon;
      }
    }
  }
  
  getDamage(spellName){
    // checking if there is a matching spellName this characters spells array
    for(let i = 0; i < this.spells.length; i++) {
      // if there is a spell in the spells array that matches what was passed in, set the spell to be saved as the matching arg.
      const spell = this.spells[i];
      if(spellName === spell.name) {
        return this.defense + spell.power
      }
      // if no match return 0
      if(!spell) {
        return 0;
      } else if(this.activePet) {
        const petAttack = this.pets.attack;
        return petAttack + this.attack;
        // if there is an eqquipped weapon, add its power to this character attack value
      } else if(this.equippedWeapon){
        const weaponPower = this.equippedWeapon.power;
        return this.attack + weaponPower;
      }
    } 
  }
}

module.exports = Character;