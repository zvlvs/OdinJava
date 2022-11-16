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

//case switch

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(3));

//default option in switch statements

function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break; 
        case "c":
            answer = "cat";
            break;
        case "d":
            answer = "dog";
            break;   
        default: //default operates as an else function
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(switchOfStuff(4));

//mutliple identical options in switch statements

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9: 
            answer = "high";
            break;
    }
    return answer;
}

console.log(sequentialSizes(5));

//replacing If Else Chains with switch

function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob": //case replaces else if statements
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}

//returning boolean values from functions

function isLess(val) {
    if (a < b) { //this is one way of returning boolean functions
        return true;
    } else {
        return false;
    }
}

console.log(isLess(10,15));

//a more compact way of returning boolean values would be the following
function isLessAlso(val){
    return a < b;
}

console.log(isLessAlso(10,15));

//returning early pattern from function

function abTest(val) {
    if (a < 0 || b < 0) {
        return undefined;
    }
}

console.log(abTest(-2,2));


//counting cards
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        //we will omit 7,8,9 because the program will do nothing with these numbers
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;
}

cc(2); cc("K"); cc(10); cc("K"); cc("A");
console.log(cc(4));

//build javascript objects

var ourDog = {
    "name": "Camper",
    "legs": "4",
    "tails": "1",
    "friends": ["everything"],
};

var myDog = {
    "name": "Quincy",
    "legs": "3",
    "tails": "2",
    "friends": [],
};

//dot notation

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//accesing object properties with bracket notation
// anytime an onject has a space you have to use bracket notation
var testObject = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
};

var entreeValue = testObject["an entree"];
var drinkValue = testObject["the drink"];

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];

//updating object property
var ourDog = {
    "name": "Camper",
    "legs": "4",
    "tails": "1",
    "friends": ["everything"],
};

ourDog.name = "Happy Camper" //this changes the name from Camper to Happy Camper

//Adding New Properties to Objects
//this can be done with either dot notation or bracket notation

var myDog = {
    "name": "Quincy",
    "legs": "3",
    "tails": "2",
    "friends": [],
};

myDog.bark = "bow wow"

var ourDog = {
    "name": "Camper",
    "legs": "4",
    "tails": "1",
    "friends": ["everything"],
};

ourDog['bark'] = "woof!"

//delete properties from an object

var ourDog = {
    "name": "Camper",
    "legs": "4",
    "tails": "1",
    "friends": ["everything"],
    "bark": "woof!",
};

delete ourDog.bark;

<<<<<<< HEAD
<<<<<<< HEAD
//object lookup
function phoneticLookup(val) {
    var result = "";

=======
=======
>>>>>>> 207acdc (more training)
var myDog = {
    "name": "Happy Coder",
    "legs": "4",
    "tails": "1",
    "friends": ["freedomCamp Campers"],
    "bark": "woof"
};

delete myDog.tails;

//object for lookup

function phoneticLookup(val){
    var result = "";


<<<<<<< HEAD
>>>>>>> 207acdc05a665bb9ec6cf7b6c4cfe8d5a77e6220
=======
>>>>>>> 207acdc (more training)
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
<<<<<<< HEAD
<<<<<<< HEAD
        "forxtrot": "Frank",
    }
=======
        "foxtrot": "Frank",
    };
>>>>>>> 207acdc05a665bb9ec6cf7b6c4cfe8d5a77e6220
=======
        "foxtrot": "Frank",
    };
>>>>>>> 207acdc (more training)

    result = lookup[val];

    return result;
}

<<<<<<< HEAD
<<<<<<< HEAD
console.log(phoneticLookup("charlie"));
=======
=======
>>>>>>> 207acdc (more training)
console.log(phoneticLookup("charlie"));

//testing objects for properties

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj("gift"));

// manipulating complex objects

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": "1973",
        "formats": [
            "cd",
            "8T",
            "LP",
        ],
        "gold": true,
    },

    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": "2003",
        "formats": [
            "Youtube Video",
        ],
    }
]

//accessing nested objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs",
        },
        "outside": {
            "trunk": "jack",
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

//nested arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion",
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch",
        ]
    },
]

var secondTree = myPlants[1].list[1];

console.log(secondTree);

//record collection

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love A Bad Name",
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette",
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold",
    },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
      //if the tracks property is empty
      collection[id][prop] = collection[id][prop] || []; //if collection exists, it'll equal itself. If it doesn't it will create an empty array
      collection[id][prop].push(value); //push pushes in the value that was entered into the end of the array 
    } else {
        collection[id][prop] = value;
    }

    return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));

//iterate with While Loops

var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

//Iterate with For loop

var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

console.log(ourArray);

//odd numbers with a for loop

var oddArray = [];

for (var i = 1; i < 10; i += 2){
    oddArray.push(i);
}

console.log(oddArray);

//count backwards with a for loop

var negArray = [];

for (var i = 10; i > 0; i -= 2) {
    negArray.push(i);
}

console.log(negArray);

var oddNegArray = [];

for (var i = 9; i > 0; i -=2 ) {
    oddNegArray.push(i);
}

console.log(oddNegArray);

//iterate through an array with a for loop

var ourArr = [2, 3, 4, 5, 6];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);

//nesting for loops

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

<<<<<<< HEAD
console.log(product);
>>>>>>> 207acdc05a665bb9ec6cf7b6c4cfe8d5a77e6220
=======
console.log(product);
>>>>>>> 207acdc (more training)
