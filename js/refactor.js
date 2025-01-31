//////////////////////////////////////////////////
//////////////////////////////////////////////////
//     ___  ___________  _______________  ___   //
//    / _ \/ __/ __/ _ |/ ___/_  __/ __ \/ _ \  //
//   / , _/ _// _// __ / /__  / / / /_/ / , _/  //
//  /_/|_/___/_/ /_/ |_\___/ /_/  \____/_/|_|   //
//                                              //
// The below assignment has 10 questions with 1 //
// bonus question. Each question has a specific //
// area for you to put your answer. That is the //
// only part that should be changed. Do not     //
// edit the code in the question. Your answers  //
// should be valid javascript and any comments  //
// should be commented out. When finished this  //
// entire document should be valid javascript.  //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

(function() {
  'use strict';


// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

function doSomethingCool() {
  console.log("Something Cool!");
}

// Put your answer below -------------------------

// Input:  No user input
// Output: Calls the console.log
// One-line description: Print the phrase "Something cool!"

// Function: = () =>
// Parameter: n/a
// Return: nothing returned

var cool = () => console.log("Something Cool!");


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

function sayHi() {
  alert("Hello, World!");
}

setTimeout(sayHi, 2000);

// Put your answer below -------------------------

// Input: sayHi(), 2000
// Output: a delayed Hello, World!
// One-line description: Call the function sayHi() after pausing for 2000ms.

// Function: function () {}
// Parameter:{body code}
// Return: "Hello, World!"


setTimeout(function () {alert("Hello, World!");}, 2000);



// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 1);

letter = "z";
console.log("The letter is", letter);

// Put your answer below -------------------------

// Letter [c]: z then y

// Input: variable set to X
// Output: Two console.logs
// One-line description: The code calls the setTimeout then runs console.log.


//Letter is x set by VAR. 
// First timeout after 1ms sets letter to y and prints the letter is y.


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

var reverseStr = function(str) {
  var arr;
  arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
};

// Put your answer below -------------------------


// Input: str
// Output: reversed string
// One-line description: Take the string and reverse the characters.

// Function: function(str) {}
// Parameter:
// Return:

var reverseStr = function(str) {
  return str.split("").reverse().join("");
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

var spanishColor = function(colorName) {
  if (colorName.toLowerCase() === "rojo") {
    return "#ff0000";
  }
  else if (colorName.toLowerCase() === "blanco") {
    return "#ffffff";
  }
  else if (colorName.toLowerCase() === "azul") {
    return "#0000ff";
  }
  else if (colorName.toLowerCase() === "verde") {
    return "#00ff00";
  }
  else if (colorName.toLowerCase() === "negro") {
    return "#000000";
  }
};

// Put your answer below -------------------------

// Input: colorName
// Output: hex code
// One-line description: Convert the spanish word for a color to the hex code. 

// Function: function()
// Parameter: colorName
// Return: Hex value


var spanishColor = function(colorName) {
  const colorCodes = {
    "rojo": "#ff0000",
    "blanco": "#ffffff",
    "azul": "#0000ff",
    "verde": "#00ff00",
    "negro": "#000000",
  }

  return colorCodes[colorName.toLowerCase()];
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

var foo = "bar";

// Put your answer below -------------------------

var foo;

foo = "bar";

// Input:
// Output:
// One-line description:

// Function:
// Parameter:
// Return:



// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {
  var range = Array.from(Array(10).keys());
  range.forEach(callback);
};

// callTenTime(functionName);

// Put your answer below -------------------------

// Input: another function
// Output: the function called 10 times
// One-line description: Use the function to call another function 10 times

// Function: function callNtimes()
// Parameter: function, Ntimes
// Return: the called function N times


function callNtimes(func,number) {
  for (let count = 0; count < number; count++) {
    func;
  }
}








// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};

// Put your answer below -------------------------

// Since score is a var and is globally accessible, you need to hide the variable from being directly accessed by the console
// This refactor wraps the score variable inside of a function. 

(function (){

var score = 0;

var increaseScore = function() {
  score++;
};

let decreaseScore = function() {
  score--;
};

})();








// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
};

var twoPlusTwo = addNumbers(2,2);

// Put your answer below -------------------------

// Input: number A, number B
// Output: console.log(sum)
// One-line description: The function takes two numbers and prints the sum to the console.

// Function: function(num1, num2)
// Parameter:num1,num2
// Return: return the sum


var addNumbers = function(numberA, numberB) {
  return numberA + numberB;
};

var twoPlusTwo = addNumbers(2,2);






// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

var speed = 0;

var accelerate = function(amount) {
  speed += amount;
};

// Put your answer below -------------------------



// If no amount is given, the function passes "nothing" to the amount variable. 
// The function then takes the speed number and adds it to "nothing". This causes speed to return as NaN.


var speed = 0;

var accelerate = function(amount = 1) {
  speed += amount;
};

// The function now has a default value of 1 to add to the speed. 



// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many miliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};

// Put your answer below -------------------------


// -----------------------------------------------

//////////////////////////////////////////////////
})();
