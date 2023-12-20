// Question 1: What are the results of these expressions? (answer first, then use console.log() to check) 
// console.log ("" + 1 + 0) // Ernie: Expression will provide 10 as the answer
// console.log("" - 1 + 0) // Ernie: answer = -1
// console.log(true + false) // Ernie: answer = 1  
// console.log (!true) // Ernie: answer = false
// console.log (6 / "3")  // Answer = 2
// console.log("2" * "3") // Answer is 6
// console.log(4 + 5 + "px") // answer =  9px
// console.log("$" + 4 + 5)  // answer = $45
// console.log("4" - 2) // Answer = 2
// console.log("4px" - 2) // answer = NaN
// console.log("  -9  " + 5); // Answer =  -9   5
// console.log("  -9  " - 5) //Answer =  -14
// console.log(null + 1) //Answer = 1 
// console.log (undefined + 1) //Answer = NaN 
// console.log(undefined == null) //Answer = true 
// console.log(undefined === null) //Answer = False 
// console.log (" \t \n" - 2) //Answer = new tab and new line -2

// Excercise 2: Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = 3 
let four = 4 
let thirty = 30 
 
//what is the value of the following expressions? 
let addition = three + four // This would not be an addition as the "+" will concatanate 3 and 4 giving us 34. Fix: ParseInt 
let multiplication = three * four // correct
let division = three / four // correct
let subtraction = three - four // correct
 
let lessThan1 = three < four // true 
let lessThan2 = thirty < four // since the above are strings, this would be compared lexiconally opposed to numerically. Therefore true as 30 lexicon wise is less than 4. 

// console.log(addition)
// console.log(multiplication)
// console.log(division)
// console.log(subtraction)
// console.log(lessThan1)
// console.log(lessThan2)


// Excercise 3: Which of the following console.log messages will print? Why?
// if (0) console.log('#1 zero is true') // Will not print. Empty numeric value therefore not truthy
// if ("0") console.log('#2 zero is true') // Prints. This is a string value, specifically the string "0". In JavaScript, any non-empty string is considered truthy when used in a boolean context.
// if (null) console.log('null is true')  // Will not print. Not truthy therefore is false
// if (-1) console.log('negative is true') // Prints. This is a numeric value, specifically -1. In JavaScript, any nonzero numeric value is considered truthy when used in a boolean context.
// if (1) console.log('positive is true') // Prints. 1 will convert to true


// Excercise 4: Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
// let a = 2, b = 3;
// let result = `${a} + ${b} is ${a + b} is ${a + b < 10 ? 'less than 10' : 'greater than or equal to 10'}`;
// console.log (result)
 
// Excercise 5: Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.
// function getGreeting(name) { 
//     return 'Hello ' + name + '!'; 
// }
    // function expression syntax
    // function sayHi(name) {
    //     console.log('Hello ' + name + '!')
    // }
    // sayHi('Ernie')
        
    // // Arrow function syntax
    // const getGreeting2 = (name) => 'Hello ' + name + '!';
    // console.log(getGreeting2('Ernie'));


// Excercise 6: 

// a) Complete the inigo object by adding a lastName property and including it in the greeting.

// const westley = { 
//     name: 'Westley', 
//     numFingers: 5 
// } 
// const rugen = { 
//     name: 'Count Rugen', 
//     numFingers: 6 
// } 
 
// const inigo = { 
//     firstName: 'Inigo',
//     lastName: 'Burger',
//     greeting(person) {  
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; 
//         console.log(greeting + this.getCatchPhrase(person)); 
//     },
//     getCatchPhrase: (person) => {
//         const catchPhrase = (person.numFingers > 5)
//           ? 'Hello. My name is Inigo Burger. You ate my father. Prepare to die.'
//           : 'Nice to meet you.';
      
//         console.log(catchPhrase);
//         return catchPhrase;
//       } 
// } 
 
// inigo.greeting(westley) 
// inigo.greeting(rugen)


// The following object represents a basketball game and keeps track of the score as the game progresses.

// const basketballGame = { 
//     score: 0, 
//     freeThrow() { 
//         this.score++;
//         return this;
//     }, 
//     basket() { 
//         this.score += 2;
//         return this; 
//     }, 
//     threePointer() { 
//         this.score += 3; 
//         return this;
//     }, 
//     halfTime() { 
//         console.log('Halftime score is '+this.score + ' Game Fouls: ' + gameFouls.fouls);
//         return this;
//     }, 
//     fullTime() {
//         console.log('Fulltime score is' , this.score + ' Game Fouls: ' + gameFouls.fouls);
//         return this;
//     }
// } 
 
// const gameFouls = {
//     fouls: 1, 
//     carryFoul() {
//         this.fouls ++;
//         return this;
//     },
//     handleFoul() {
//         this.fouls += 2;
//         return this;
//     }
// }

// //modify each of the above object methods to enable function chaining as below: 
// gameFouls.carryFoul().handleFoul();
// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime();

// Excercise 8 The object below represents a single city. 
// a)  Write a function that takes an object as an argument and uses a for...in loop to access 
// and print to the console each of those object properties and their values. Test it using 
// the sydney object below. 
// b)  Create a new object for a different city with different properties and call your function 
// again with the new object

// const sydney = { 
//     name: 'Sydney', 
//     population: 5_121_000, 
//     state: 'NSW', 
//     founded: '26 January 1788', 
//     timezone: 'Australia/Sydney' 
// }
// const bombad = { 
//     name: 'Bombad', 
//     population: 1_000_000, 
//     state: 'boom', 
//     founded: '26 January 1888 B.C', 
//     timezone: 'Unknown' }

//     for (let key in bombad) {
//         console.log(`${key}: ${bombad[key]}`);
//     }


// 9.  Use the following variables to understand how JavaScript stores objects by reference. 
// a)  Create a new moreSports variable equal to teamSports and add some new sport 
// values to it (using push and unshift) 
// b)  Create a new dog2 variable equal to dog1 and give it a new value 
// c)  Create a new cat2 variable equal to cat1 and change its name property 
// d)  Print the original teamSports, dog1 and cat1 variables to the console. Have they 
// changed? Why? 
// e)  Change the way the moreSports and cat2 variables are created to ensure the 
// originals remain independent

// let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
// let dog1 = 'Bingo'; 
// let dog2 = dog1;
// dog2 = "dingo"
// let cat1 = { name: 'Fluffy', breed: 'Siberian' }
// let cat2 = {...cat1 }
// cat2 = { name: 'Buffy', breed: 'Siberian' }
// let moreSports = {...teamSports};


// teamSports.push ('Golf,', 'Bowling, ', 'Football');
// console.log (teamSports);

// teamSports.unshift ('Rugby,');

// console.log (moreSports)
// console.log (cat2)


// Excercise 10: The following constructor function creates a new Person object with the given name and age values.
// a)  Create a new person using the constructor function and store it in a variable 
// b)  Create a second person using different name and age values and store it in a separate 
// variable 
// c)  Print out the properties of each person object to the console  
// d)  Rewrite the constructor function as a class called PersonClass and use it to create a 
// third person using different name and age values. Print it to the console as well. 
// e)  Add a canDrive method to both the constructor function and the class that returns 
// true if the person is old enough to drive.

class Person{   
    constructor(name,age){  
    this.name = name; 
    this.age = age; 
    this.human = true; 
    }
}
Person.prototype.canDrive = function() {
    return this.age >= 16; // Adjust the driving age as needed
};


let Ernie = new Person('Ernie', 25);
console.log(Ernie.name);
console.log(Ernie.age);
console.log(Ernie.canDrive());

let Barion = new Person ('Barion', 33); 
console.log (Barion.name);
console.log (Barion.age);
console.log(Barion.canDrive());
let Bilbo = new Person ('Bilbo',25);
console.log (Bilbo.name);
console.log (Bilbo.age);
console.log(Barion.canDrive());





