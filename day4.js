// Day 4 homework:
// RECAP:We learned objects are not just random key/value pairs, but modelled after things we want them to represent. Yesterday we actually modelled them after a message in discord. Today, we did anothe one - a user, and associated it to a message.

// HOMEWORK:
// We model a user and a message. Our user model looks like this:
// {
//    name: string
//    isAdmin: boolean
//    isYellow: boolean
//    roles: array of strings (ie: ["crane manager", "GMI", "diplys fan club"]
// }

console.log('////////// Question 1 //////////');
// 1) Declare a function that creates a new user object, createUser and returns it from the function (go back to day1/2 to see how return works in functions). The function should take three arguments: name, isAdmin, and isYellow. The user object should be created with those values, but we also want to initialize the user with the roles property to an empty array. Call that function and then log the result out to the console. 
// Hint: the createUser function itself will not be logging to the console. It will be returning the user. The console logging will happen outside the function.
function createUser(name, isAdmin, isYellow) {
  const user = {
    name,
    isAdmin,
    isYellow,
    roles: ['labor']
  }
  return user;
}
// TEST: create user and check the output matches the input value
console.log((createUser('user 1', false, true)))

console.log('////////// Question 2 //////////');
// 2) Declare a function called checkIfUserIsAdminAndYellow which takes a single argument, user. if the user is both admin AND yellow, log "user is both admin and yellow" to the console. Otherwise log out "user is not admin and yellow". This function should not return anything.
// Hint: we haven't done and before. We've done stuff like if(user.isAdmin), but how do we check two things in one if statement?
function checkIfUserIsAdminAndYellow(user) {
  if(user.isAdmin && user.isYellow === true) {
    console.log(`${user.name} is both admin and yellow`)
  } else {
    console.log(`${user.name} is not admin and yellow`)
  }
}
// TEST: checking that both conditions of checkIfUserIsAdminAndYellow run and log the appropriate statement
checkIfUserIsAdminAndYellow(createUser('user 2', true, true))
checkIfUserIsAdminAndYellow(createUser('user 3', true, false))


console.log('////////// Question 3 //////////');
// 3) Declare a function: addRoleToUser. This function accepts two arguments: a user, and newRole, which should be a string. ie: "crane manager". This function should PUSH this newRole to the user's roles property, which is an array. Log out the user object after this to see their updated roles.
// hint: Will require googling/AI bot. How to push to an array?

function addRoleToUser(user, newRole) {
  user.roles.push(newRole);
  console.log(user)
}
// TEST: create user and modify user's roles which adds an additional role to the end of the roles array.
addRoleToUser(createUser('user 4', true, true), 'crane manager')

console.log('////////// Bonus Question //////////');
// BONUS: Declare a function: postMessage, just like I did in my tutorial video, execpt the fucntion has one additional argument. The function should take THREE arguments: user, text, and parentMessage. 

// parentMessage will be the the message this message is RESPONDING to. Like when you click "reply" in discord instead of just posting in the main chat.  That means parentMessage will be an object model of type message. Which means parentMessage is part of our message model contract now. 
// At the end of the postMessage function, return the object. 
// Call the function and store the result in a variable. Then, log out that messge to the console.
// HINT: the parentMessage property should be optional (because not every message has a parent). Which means you should add the property to the message object ONLY if the parentMessage was passed in.

const adminUser = {
  name: "admin",
  isAdmin: true,
  isYellow: false,
  roles: ["admin", "yellow manager"]
}

// SET: create a message object for testing responseMessage function
const testMessage = {
  user: "test",
  posts: "test message"
}
// SET: create a function that creates a message template
function createMessage(user, text, likes){
  const message = {
    user,
    text,
    likes
  }
  return message;
}
// TEST: createMessage functions output
console.log("creatMessage test: ", createMessage('user 5', 'you are a god!', 5));

// SET: create a response message function with args: user, text, parentMessage
function responseMessage(user, text, parentMessage) {
  const response = {
    user,
    text,
    parentMessage
  }
  return response;
};
// TEST: call and log the responseMessage function with an existing user and an existing message.
console.log("responseMessage test: ", responseMessage(adminUser, "I am a god!", testMessage))