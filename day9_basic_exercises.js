const prompt = require('prompt-promise');
// 1.
// Declare a function that takes 4 arguments, and adds them all together, and returns the sum.
function add(a,b,c,d){
  return a+b+c+d
}
// console.log(add(1,2,3,4));

// 2.
// Declare a function that takes two arguments, and if the first argument is greater than the second one, return true, otherwise return false.
function checkIfGreater(a,b){
  if (a > b){
    return true
  } else {
    return false
  }
}
// console.log(checkIfGreater(5,3));

// 3.
// Declare a function that takes a single argument, an array of numbers, and loops over all the elements of the array, adding them together, and returning the total sum of all the elements in the array.
function sumArray(arr){
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
// console.log(sumArray([1,2,3,4,5]));

// 4.
// Declare an object that two properties, "numberOne", and "numberTwo", and a function on that object called "addAllNumbers", that returns the difference of numberOne minus numberTwo.
const addNumbers = {
  numberOne: 1,
  numberTwo: 2,
  getDifference: function() {
    return this.numberOne - this.numberTwo;
  }
}
// console.log(addNumbers.getDifference());

// 5.
// Declare an array that takes in a single argument, a string, and returns the string lower-cased. ie: I pass in "Crane Juice", it should return "crane juice".
function makeLowerCase(str){
  return str.toLowerCase();
}

// console.log(makeLowerCase("Crane Juice"));

// 6.
// Declare a function that checks if an element is in an array. It takes two arguments, the array, and the element to look for. If the element is found, return true, otherwise, return false.
function checkIfInArray(arr, thing) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === thing) {
      return true;
    }
  }
  return false;
}
// console.log(checkIfInArray([1,2,3,4], 2))
// console.log(checkIfInArray([1,2,3,4], 5))

// 7.
// Declare an object that has a single property, "clothes", which is an empty array, a function on that object called "putOnClothes" which take a single argument, an item of clothes you want to put on (which will be a string, like "hat"). If the object is already wearing that piece of clothing, throw an error, otherwise, add the clothes to the array and log out the new clothes array.
const getDressed = {
  clothes: [],
  putOnClothes: function(item) {
    for(let i = 0; i < this.clothes.length; i++) {
      if(this.clothes.includes(item)) {
        throw new Error ("You fucked up, item is already in the array");
      }
    }
    return this.clothes.push(item)
  }
}
// console.log('getDressed.clothes ==>>',getDressed.clothes);
// getDressed.putOnClothes("hat");
// console.log('getDressed.clothes ==>>',getDressed.clothes);
// getDressed.putOnClothes("pants")
// console.log('getDressed.clothes ==>>',getDressed.clothes);
// getDressed.putOnClothes("pants")
// console.log('getDressed.clothes ==>>',getDressed.clothes);


// 8.
// Declare a function that takes in a single argument, a name, and then says hi to that name via the console, UNLESS that name is one of the leaver's names: tums, piccle, or interesting, in which case it instead tells that user to fuck off via the console.
function helloOrFuckOff(name) {
  if(name === "tums" || name === "piccle" || name === "interesting") {
    console.log(`Fuck off ${name}`)
  }
   else console.log(`Hello ${name}`)
}
// helloOrFuckOff("Maty");
// helloOrFuckOff("tums");
// helloOrFuckOff("Oliver");

// 9.
// ROCK PAPER SCISSORS! Declare a function that plays rock paper scissors with you via the prompt-promise npm package. The function should prompt you for your decision, then cheat, and always pick the winning move, so you can never lose.
async function rockPaperScissors(){
  console.log("Welcome to the game Rock Paper Scissors!");
  console.log("Choose 1 for Rock, 2 for Paper or 3 for Scissors");
  try {
    // Get user response
    const userInput = await prompt("Your choice: ");
    const userChoice = parseInt(userInput);
    
    // Validate input
    if(![1, 2, 3].includes(userChoice)) {
      console.log("Invalid choice. Please choose 1, 2, or 3.");
      return;
    }
    
    // Map choices to string names
    const choices = {
      1: "Rock",
      2: "Paper",
      3: "Scissors"
    };

    // Generate computer choice
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    
    console.log(`You chose: ${choices[userChoice]}`);
    console.log(`Computer chose: ${choices[computerChoice]}`);
    
    // Determine winner
    if (userChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (userChoice === 1 && computerChoice === 3) || // Rock beats Scissors
      (userChoice === 2 && computerChoice === 1) || // Paper beats Rock
      (userChoice === 3 && computerChoice === 2)    // Scissors beats Paper
      ) {
        console.log("You win!");
      } else {
        console.log("Computer wins/ you lose");
      }
    } catch (err) {
      console.error("Error:");
    } finally {
      // Close the prompt
      prompt.end();
    }
  };
  
  rockPaperScissors()
  
  // 10.
  // Do your rock paper scissors function again, but it selects randomly, not cheating.
  
  // 11.
  // Modify your rock paper scissors function to keep track of the score, and log it out after every round. So more than 1 round can be played at a time, in a loop. AFter every round it should say "Your Score: {yourScore}, ComputerScore: {computerScore}.
  
  // 12.
  // Modify your rock paper scissors function so that after one player gets to 5 points, the game ends.
