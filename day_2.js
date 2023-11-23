// SET: string variable with the value of 'hello'
const myStringVariable = 'hello';

// SET: number variable with the value of 5
const myNumberVariable = 5;

// SET: boolean variable with the value of TRUE
const myBooleanVariable = true;

// SET: function that results printing the passed in arg to the console
function printString(string) {
  console.log('string ==>>',string);
}
// TEST: function printString function w/arg
printString('hello');

// SET: function that returns the arg that is passed in
function returnString(string) {
  return string;
}
// TEST: function returnString
console.log(returnString("return String"));
