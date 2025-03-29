const prompt = require("prompt-promise");

async function classChoice(){
  // This is the first promt of the game that allows users to see which characters they can use to get the game started
  const choose = await prompt("SELECT CHARACTER:\n 1 MAGE\n 2 SHAMAN\n 3 WARLOCK\nEND GAME CTRL + C\n")
  return choose; 
}

module.exports = classChoice;