class Character {
  constructor(name, className, attack, defense, speed, health) {
    this.name = name;
    this.className = className;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.health = health;
    this.level = 1;
    this.weapons = [];
    this.spells = [];
    this.activePet = null;
  }
  levelUp() {
    this.level += 1;
    if(this.className === "mage") {
      this.attack += 1;
      this.health += 50;
      this.defense += 25;
    } else if(this.className === "shaman") {
      this.attack += 2;
      this.health += 50;
      this.defense += 24;
    } else if(this.className === "warlock") {
      this.attack += 3;
      this.health += 50;
      this.defense += 26;
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
    for(let i = 0; i < this.spells.length; i++) {
      const spell = this.spells[i];
      if(spellName === spell.name) {
        // checking if there is a matching spellName this characters spells array
        if(!spell) return 0;
        // if no match return 0
        return this.defense += spell.power
        // if there is a spell in the spells array that matches what was passed in, set the spell to be saved as the matching arg.
      };

      if(this.activePet) {
        const petAttack = this.activePet.attack;
        return this.attack += petAttack;
        // if there is an eqquipped weapon, add its power to this character attack value
      } else if(this.equippedWeapon){
        const weaponPower = this.equippedWeapon.power;
        return this.attack += weaponPower;
      }
    } 
  }
}

module.exports = Character;