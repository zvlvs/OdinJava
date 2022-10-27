/*console.log("Hello, World!")

let message = 'Hello Mofos!';

alert(message);

let user = 'John';
let age = '25';

console.log(23+97);

console.log(2+2+2+2+2+2);
console.log((4 + 6 + 9) / 77);

let a = 10
console.log(a);

console.log(9 * a);

let b = 7 * a;
console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;

console.log(percentage);

const string = "The revolution will not be televised.";
/*console.log(string);

const sgl = 'Single Quotes';
const dbl = "double quotes";
console.log(sgl);
console.log(dbl);

const bigMouth = "I\'ve got no right to take my place";
console.log(bigMouth);


const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined);
*/
/*const button = document.querySelector("button");

function greet(){
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);

}

button.addEventListener("click", greet);
*/
/*
const name = "Front";
const number = 242;
console.log(`${name} ${number}`);

if (hour < 18) {
    greeting = "Good Day";
}

if (1 || 0) {
    alert ('Truthy!'); 
}
*/

/*number = Number(prompt("Enter a Number"));

function numberChecker() {
    if(number === 6) {
        return true;
} else {
    return false;
}
}

console.log(numberChecker);

*/

console.log("hello from Javascript"); // this is how you make an inline comment


var sum = 10+10;

console.log(sum);

var a = 3;
var b = 17;
var c = 12;

a = a + 12;
a += 12; //this is another way to write out the formula above
b = 9 + b;
b += 9 //this is another way to write out the formula above
c = c + 7;
c += 7 //this is another way to write out the formula above 

var myName = "Sal";
var myStr = "My name is " + myName + " and I am well!"; //constructing strings with variables

console.log(myStr);

myNameLength = myName.length;

console.log(myNameLength); //finding the length of a string

firstLetterOfFirstName = myName[0];
console.log(firstLetterOfFirstName); //finding the first letter of a string

lastLetterOfFirstName = myName[myName.length - 1]; //finding the last letter of a string even if you don't know how many characters are in the string/name
console.log(lastLetterOfFirstName);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;

}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

//arrays
/*var ourArray = ["John", 23];

var myArray = ["Sal", 1];
*/
/*
var ourArray = [["the universe", 42], ["everything", 101010]];

var myArray = [["Bulls", 23]. ["White Sox", 45]];
*/

/*var ourArray = [18,64,19];
ourArray[1] = 45; //ourArray would now equal 18,45,19 due to the [1] replacing the 64 in the array line to 45

console.log(ourArray);
*/

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

/*var removedFromMyArray = myArray.pop();

console.log(myArray);*/

var removedFromMyArray = myArray.shift(); //.shift removes the first array

//.unshift adds an element to the beginning of the array

//nested array

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]; //this creates an array of arrays

//functions let you reuse code. The code below for "Hey World" will come up in the console log anytime that the reusableFunction is used.
function reusableFunction() {
    console.log("Hey World!");
}

reusableFunction();

//passing data using arguments. a,b can be substituted for any variable
function functionWithArgs(a, b){
    console.log(a + b);
}
functionWithArgs(10, 5);

//global scope means that the code is visible anywhere in the code

//local variables are within a function whereas as global variables are independent and can be visible by your code anywhere
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

//return a value from a function
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(10));

//understanding undefinied value returned from a Function

var sum = 0;
function addThree(){
    sum = sum + 3;
}

function addFive() {
    sum += 5
} //if you don't add a return function to your code then it will return as an "undefined" in the console log

//assignment with a return value

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

console.log(changed);

//stand in line

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3 ,4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//boolean value

function welcomeToBooleans() {
    return false; //you can use true or false
}

//if statements help make decisions in code

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
   }
   return "No, that was false";
}
console.log(trueOrFalse(true));

//comparison with equality operators

function testEqual(val) {
    if (val == 12) {
        return "Equal";  
    }
    return "Not Equal";
}

console.log(testEqual(10));

// == is the symbol to check for equality but it attempts to convert the type i.e string to var and so on whereas === is the strict operator and this does not convert and only check to see if the items are equal in the way that they are written. 

function testStrict(val) {
    if (val === 7) {
        return "Equal";  
    }
    return "Not Equal";
}

console.log(testStrict(7));


function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";  
    }
    return "Equal";
}

console.log(testNotEqual(7));

function testStrictNotEqual(val) {
    if (val !== 99) { //!== strict not equal is !==
        return "Not Equal";  
    }
    return "Equal";
} 

console.log(testStrictNotEqual(7));

//comparisons with the logical and operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or under";
}

console.log(testGreaterThan(10));

//comparison with a less than operator

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
            }
    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}

console.log(testLessThan(75));

//comparison with a less than or equal to

function testLessThanOrEqual(val){
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "Greater than 24";
}

console.log(testLessThanOrEqual(10));

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));

function testLogicalOr(val) {
    if (val <= 50 || val >= 25) {
        return "Outside";
    }
    return "Inside";
}

console.log(testLogicalOr(10));

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller"
    }

    return result;
}

console.log(testElse(5));

function testElseIf(val) {
    if (val > 10){
        return "Greater than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(7));

function orderMyLogic(val) { //the order in which the if statements cascade matter
    if (val < 5) {
        return "Less than 5 ";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or Equal to 10";
    }
}

console.log(orderMyLogic(3));

//chaining if else statements

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else { //the conditions are not necessary on this one because the previous conditions cover everything under 20
        return "Huge";
    }
}

console.log(testSize(0));

//golf code

var names = ["Hole-In-One!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}

console.log(golfScore(5, 9));
