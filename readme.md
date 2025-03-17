Day 5 Homework:
`RECAP`: We learned functions an be properties on objects too! We are going to build on the game example. If you re-typed my script from the lesson, DO NOT START FROM THERE. Open a new file. You can have it open for reference for sure, but let's start a new file so we re-type again and do it from csratch.

1) Our `character` model we want to create objects for:
MUST have name, a string. ie: "Horseman"
MUST have health, a number. ie: "100"
MUST have level, a number, ie: 1.
MUST have class, a string. ie: Warlock
MUST have getDamage(), a function that returns a number.

We want to create two characters: a Warrior, and a Warlock.

The interesting thing here is, the Warlock does not do damage itself. It can summon Pets. Pets do damage too, and when a Warlock attacks, they attack as well.

our `pet` model we want to create objects for:
MUST have name, a string. ie: "Imp", or "Faerie"
MUST have getDamage(), a function that returns a number.

Create two pets, and two characters. The `Warlock` character should have an array of `pets`, which consists of the two pets you made, and when `getDamage()` is called on the warlock, instead of using `this.damage`, it should use the damage from the Warlock's pets instead, and return the total damage of all the Warlock's pets.

2) Declare a `fight` method that takes two arguments, both of them are `characters`.
Fight should get the damage from each character, and contain an if statement after that chooses the winner based on who has more damage, and then log out the winner's name.

Day 6 
Video
https://cdn.discordapp.com/attachments/1046867475540738218/1050978444722315274/day6.mp4?ex=67d840b3&is=67d6ef33&hm=65d1144bb49d0fbbaf25717aa7fc49d9084e69a09b25bf2e7e9eb0ac13768ac3&

Day6 Homework:
We learned about
```ts
whatever.js

class Whatever {
    constructor(thing) {
         this.thing = thing;
    }
}

module.exports = Whatever
```
and consuming that in another file:
```
const Whatever = require("./whatever");
const myWhatever = new Whatever("something");
console.log(myWhatever);
```

so now, we will set up a file structure to make a game!

1) Create a new folder called `game`. (remember to `cd` into it if youre not in it in your terminal, to run node!)
2) Create a `mage.js`. Create a Mage class, with a constructor that takes a name. Set this.name to name in the constructor. Export the class from the file.
3) Create a `game.js` Import the Mage class using require, and create a new Mage with whatever name you want. Log it to the console.
4) Do the same thing for 7 classes total: Warrior, Shaman, Warlock, Paladin, Mage, Gambler, and Medic. making sure your `game.js` uses all 7 files to create one (or more!) of each class.
5) Create a `pet.js` file. Create a Pet class, with a constructor that types one parameter, `name`. Export Pet from the file.
6) in Warlock and then Shaman, import the Pet class, and in the constructor function, set `this.pets` to an empty array. Then, create a new Pet, then push it to the array. These classes start with a pet when they are made!



Day 7 Video
https://cdn.discordapp.com/attachments/1046867475540738218/1051703806729138296/day7.mp4?ex=67d8413f&is=67d6efbf&hm=1de8aa8bb82bd98fd35b9fd1d9d706ddec00edde569e65cfca52df7fd482b551&

Day 7 Homework:
1) Delete all but 3 of your character classes - you pick which 3 you want to keep! Update `game.js` accordinly, to remove your deleted characters.
2) Restructure your game. Your game should have a `characters` folder where your characters reside. 
3) Implement a base `Character` class that takes the following constructor arguments: name, className, attack, magic, defense, speed, health, mana, and sets them on the character.
4) The character initializer should also initialize an empty array of weapons, pets, and spells.
5) The 3 classes you use should now inherit from the Character class, usign the `class {className} extends Character` syntax.
6) Create a `spells` folder, and a `Spell` class, with a constructor that takes the following arguments: `name`, `power`, `mana`, and sets them on the spell.
7) Create a specific spell in a separate file: ie: `fireball.js`, and export that spell from the file.
8) In one of your characters, give them the spell in the constructor.
9) Do steps 6 through 8 for `weapons`.
10) Implement a `levelUp` function in the Character class that bumps up the characters level, and then stats depending on which character class is being levelled up.
11) Implement a `getDamage` function in the Character class according to the following spec:
```ts
- If a character has an activePet, we take the activePet's damage as starting value, and add it to the character's magic damage.
- If a character is casting a spell, we take the spell's damage and add it to the character's magic damage.
- If a character has neither an activePet, nor a spell, we take their weapon's damage (if they have an equipped one, if not, use 0), and add it to the character's attack damage.
```

HINT: All of this is implemented in my github repo for referencec.

11) Get familiar with git! Create new github repo on your account, and follow the new repo instructions to push! Make sure you toggle to `SSH` and not `HTTPS` on that page.
YOu will need to create an `SSH` key to authenticate your PC with git. https://www.inmotionhosting.com/support/server/ssh/how-to-add-ssh-keys-to-your-github-account/ this is good isntructions.

Push your game repo up to git! All homework should be completed via git from now on.
To push:
`git add .` <-- this wil ladd all changes.
`git commit -m "put your message here"` <-- this will tag all your changes with a commit message for readability when you push it up.
`git push origin main` <-- push up that commit to your git repo, default branch of main

Day 8 Video:
https://cdn.discordapp.com/attachments/1046867475540738218/1052790294468366396/day9.mp4?ex=67d8409e&is=67d6ef1e&hm=607b0119aea0c7dd82024e81348331f367a7d49f227dc538a0a6aca5d7181c95&

Day 8 homework:
- We learned about npm, the node package manager, to use other peoples code.
- We learned about `do while` loops, with the syntax:
```ts
while(condition) {
   // as long as condition is true, this block will loop and execute over and over
}
```
- We learned about async and await, to wait on Promises.

Using this, we can now complete our game!

HOMEWORK:
1) Create a mobs folder, mobs class, and some mobs, as well as a mobs array that stores all your mobs.
2) run `npm init` to initialize your repository, and `npm install --save prompt-promise` to install the prompt package.
3) in `game.js`, you can require the prompt-promise package the same way you require local stuff! `const prompt = require("prompt-promise")`
4) Create a fun game loop! The world is your oyster.
BARE MINIMUM:
- Choose a class, instantiate your character based on that class. Throw an error if that class is not available.
- Select random mobs to fight, in a "turn based" fighting system.
- Offer the ability to attack, equip weapon, summon pet, or cast a spell each turn.
- Level up after a mob is defeated, or game over if you are defeated.
- IF you defeat all mobs, you win!
5) Push your updated game to your git repo!
6) Get someone else to clone you repo and try your game!

You can add as much as you want other than this. Let users pick a new spell upon level up, add it to their spell array, or summon a new pet... even do different level up stuff based on their class! You can restore the user's HP to full after a level up, or choose not to.
You can give mobs levels to level up... it's up to you!



