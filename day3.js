// SET: a character objects with attributes: name, age, sex, children

const personCharacter = {
  name: "person",
  age: 0,
  sex: "M of F?",
  kids: true
}

// TEST: personCharacter object
// console.log(personCharacter.name, personCharacter.age, personCharacter.sex, personCharacter.kids, personCharacter);

// SET: a character object with attributes: name, age, sex, offspring
const animalCharacter = {
  name: "animal",
  age: 800,
  sex: "M of F?",
  offspring: true
}

// TEST: animalCharacter object
// console.log(animalCharacter.name, animalCharacter.age, animalCharacter.sex, animalCharacter.offspring, animalCharacter);

// SET: AN ARRAY OF ALL CHARACTER OBJECTS
const allCharacters = [personCharacter, animalCharacter];

// LOOP: allCharacters array for access to character object properties
for(let i = 0; i < allCharacters.length; i++) {
  const characterNames = allCharacters[i];
  const characterAges = allCharacters[i];

// TEST: access to character objects(personCharacter, animalCharacter) within the allChracters array by logging some character model properties to the console
  // console.log("this characters name is: ", characterNames.name);
  // console.log("this characters name is: ", characterAges.age);
}

// SET: a practice function that increments the value of a characters AGE by +1
function aging(character) {
  character.age = character.age + 1;
}
// TEST: calling and logging the results to the console to check correct output
// aging(personCharacter);
// console.log(personCharacter);
// aging(personCharacter);
// console.log(personCharacter);
// aging(personCharacter);
// console.log(personCharacter);
// aging(personCharacter);
// console.log(personCharacter);


// Day 3 Homework:
// Recap: 
// - We learned about objects, and now most of the primitive data types for Javascript: strings, numbers, booleans, arrays, objects, and functions.
// - We also saw examples of real world use cases: discord messages, and world of warcraft characters. Arrays are collections or lists of items: this is especially useful  when you have an array of objects. A single discord post is an object, and ALL of the discord posts is an array of objects.

// HOMEWORK:
// I RECOMMEND YOU TYPE THE LECTURE FROM SCRATCH BEFORE DOING THIS SO YOU CAN USE IT AS A REFERENCE.
//  DO NOT COPY AND PASTE FROM ANYTHING.
// 1) Create an object that represents a discord message. It should have these properties:  text, sender, keks, isCraneManager. Text and sender should be strings, keks should be a number, isCraneManager a boolean. Log out the entire object to the console.
const firstMessage = {
  text: "a message from Buddy Uno",
  sender: "Buddy Uno",
  keks: 4,
  isCraneManager: false
}
console.log(firstMessage);

// 2) Create a function called deleteMessageKeks that takes one argument: message, which sets the keks property on the message to 0, and logs the new message.keks property to the console, which should display 0.
function deleteMessageKeks(message) {
  message.keks = 0;
}
deleteMessageKeks(firstMessage);
console.log(firstMessage);

// 3) Create a function called editMessageText that takes two arguments: message, and newText that can change the discord message's text property to the value of newText, and then log the new message.text property to the console.
function editMessageText(message, newText) {
  message.text = newText;
}
editMessageText(firstMessage, "this is the new text passed in from editMessageText function");
console.log("this is the new message text: ", firstMessage.text);
console.log("this is the new message object: ", firstMessage);


// 4) Create a second object that represents a different discord message, with the same properties as the first (but different values. ie: a different sender, different text). Create an array of messages, with both messages in the array, and a function called displayMessages that takes one argument: arrayOfMessages, which loops over the array and logs the message sender and the message text to the console.
const anotherMessage = {
  text: "a message from Bro dose",
  sender: "Bro dose",
  keks: 121,
  isCraneManager: true
}
const arrayOfMessages = [firstMessage, anotherMessage];

function displayMessages(messages) {
  for(let i = 0; i < messages.length; i++){
    const allMessages = messages[i];
    console.log(allMessages.sender);
    console.log(allMessages.text);
  }
}
displayMessages(arrayOfMessages);