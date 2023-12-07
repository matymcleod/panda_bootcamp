Day 6
1) Create a new folder called game. (remember to cd into it if youre not in it in your terminal, to run node!)
2) Create a mage.js. Create a Mage class, with a constructor that takes a name. Set this.name to name in the constructor. Export the class from the file.
3) Create a game.js Import the Mage class using require, and create a new Mage with whatever name you want. Log it to the console.
4) Do the same thing for 7 classes total: Warrior, Shaman, Warlock, Paladin, Mage, Gambler, and Medic. making sure your game.js uses all 7 files to create one (or more!) of each class.
5) Create a pet.js file. Create a Pet class, with a constructor that types one parameter, name. Export Pet from the file.
6) in Warlock and then Shaman, import the Pet class, and in the constructor function, set this.pets to an empty array. Then, create a new Pet, then push it to the array. These classes start with a pet when they are made! 
Next lesson is Sunday, was going to do tomorrow but this gives some people time to catch up too and practice previous for loops and shit

3 days to do homework, next lecture Wednesday 6PM
Day 7 Homework:
1) ~Delete all but 3 of your character classes - you pick which 3 you want to keep! Update game.js accordinly, to remove your deleted characters~
2) ~Restructure your game. Your game should have a characters folder where your characters reside.~ 
3) ~Implement a base Character class that takes the following constructor arguments: name, className, attack, magic, defense, speed, health, mana, and sets them on the character.~
4) The character initializer should also initialize an empty array of weapons, pets, and spells.
5) The 3 classes you use should now inherit from the Character class, usign the class {className} extends Character syntax.
6) Create a spells folder, and a Spell class, with a constructor that takes the following arguments: name, power, mana, and sets them on the spell.
7) Create a specific spell in a separate file: ie: fireball.js, and export that spell from the file.
8) In one of your characters, give them the spell in the constructor.
9) Do steps 6 through 8 for weapons.
10) Implement a levelUp function in the Character class that bumps up the characters level, and then stats depending on which character class is being levelled up.
11) Implement a getDamage function in the Character class according to the following spec:
- If a character has an activePet, we take the activePet's damage as starting value, and add it to the character's magic damage.
- If a character is casting a spell, we take the spell's damage and add it to the character's magic damage.
- If a character has neither an activePet, nor a spell, we take their weapon's damage (if they have an equipped one, if not, use 0), and add it to the character's attack damage.


HINT: All of this is implemented in my github repo for reference

11) Get familiar with git! Create new github repo on your account, and follow the new repo instructions to push! Make sure you toggle to SSH and not HTTPS on that page.
YOu will need to create an SSH key to authenticate your PC with git. https://www.inmotionhosting.com/support/server/ssh/how-to-add-ssh-keys-to-your-github-account/ this is good isntructions.

Push your game repo up to git! All homework should be completed via git from now on.
To push:
git add . <-- this wil ladd all changes.
git commit -m "put your message here" <-- this will tag all your changes with a commit message for readability when you push it up.
git push origin main <-- push up that commit to your git repo, default branch of main

NO LECTURE UNTIL WEDNESDAY, 3 DAY HOMEWORK! 
