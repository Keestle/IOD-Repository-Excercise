//  Excercise 1: makeCounter below is a decorator function which creates and returns a function that increments a counter.

// function makeCounter(startFrom, incrementBy = 1) { // incrementBy = 1 so that this is the default increment number to start from if no args are passed.
//     let currentCount = startFrom; 
 
//     return function() { 
//         currentCount += (incrementBy); // currentCount =  currentCount + incrementBy
//         console.log(currentCount) 
//         return currentCount; 
//     }; 
// } 
 
// let counter1 = makeCounter(1,2); 
// let counter2 = makeCounter(5)
 
// counter1(); // 1 
// counter1(); // 2 
// counter2(); // Answer 1a. Post test: Counter is independent to counter1 because counter 2 is utilising the makeCounter with it's own parameters to acheive its own results independent of counter1

// 1a. Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
// 1b. Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0) 
// 1c. Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.

// Ernie: 1b and 1c answers per code above. 


// Excercise 2: The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// a) What order will the four tests below print in? Why? // Answer: #3, #4 together first as they are not delayed at all, followed by #2 and #1 which was delayed the longest. 
// b) Rewrite delayMsg as an arrow function // Answer: Per below
// c) Add a fifth test which uses a large delay time (greater than 10 seconds) 
// d) Use clearTimeout to prevent the fifth test from printing at all.

// delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`)

// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// let cancelled = setTimeout(delayMsg, 20000, '#5: Delayed by 20s');
// clearTimeout(cancelled);

// 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// similar requests until there's a brief pause, then only executing the most recent of those
// requests. See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// requests being initiated if a user clicks repeatedly on a button.
// Using the following code to test and start with:
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most recent call to func should be executed and any others ignored.
// b) Extend the debounce decorator function to take a second argument ms, which defines the length of the period of inactivity instead of hardcoding to 1000ms
// c) Extend debounce to allow the original debounced function printMe to take an argument msg which is included in the console.log statement.

// function printMe() {
//     console.log('printing debounced message')
//     }
//     printMe = debounce(printMe); //create this debounce function for a)
//     //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
//     setTimeout( printMe, 100, 'msg #1');
//     setTimeout( printMe, 200, 'msg #2');
//     setTimeout( printMe, 300, 'msg #3');

// function debounce(func) {
//     let timeout;
//     return function() { //clear the timer to cancel the previously queued function call
//         clearTimeout(timeout);
//         timeout= setTimeout(func, 1000); // reset the timer id for this most recent call to happen after the ms delay
//     };
// }

// function debounceB(func, ms) { //answer for b)
//     let timeout;
//     return function() {
//     //clear the timer to cancel the previously queued function call
//     clearTimeout(timeout);
//     //reset the timer id for this most recent call to happen after the ms delay
//     timeout = setTimeout(func, ms);
//     };
//     }

//     function printMeC(msg) {
//         console.log(`printing debounced message c: ${msg}`)
//         }
//         printMeC = debounceC(printMeC, 1200)
//         setTimeout( printMeC, 100, 'msg #1');
//         setTimeout( printMeC, 200, 'msg #2');
//         setTimeout( printMeC, 300, 'msg #3');
    
//         function debounceC(func, ms) { //answer for c)
//         let timeout;
//         return function(msg) {
//         //clear the timer to cancel the previously queued function call
//         clearTimeout(timeout);
//         //reset the timer for this most recent call to happen after the ms delay
//         timeout = setTimeout(func, ms, msg);
//         };
//     }

// The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2. e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
// c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping


// Call the function to start printing Fibonacci numbers every second

// Excercise 4a.
// function printFibonacci() {
//     let first = 1;
//     let second = 1; 
//     console.log(first)
//     console.log(second)
//     setInterval(function printNext(){
//         let next = first + second;
//         console.log(next)
//         first = second;
//         second = next;
//     },1000)
// }

// printFibonacci()

// Excercise 4b.
// function printFibonacci() {
//     let [first,second] = [1,1]
//     console.log(first)
//     console.log(second)
//     setTimeout(function printNext(first,second) {
//         let next = first + second;
//         console.log(next)
//         setTimeout(printNext, 1000, second, next);
//     },1000, first, second);
// }


// function printFruit (msg) {
//     console.log(`Message: ${msg}`)
// }

// let timer = setTimeout(printFruit, 1000, 'Dragonfruit')


// Excercise 4c

// function printFibonacciC(limit) {
//     let first = 1;
//     let second = 1; 
//     console.log(first)
//     console.log(second)

//     let count =2 

//     const intervalID = setInterval(function printNext(){
//         let next = first + second;
//         console.log(next)
//         first = second;
//         second = next;

//         count++;

//         if (count >= limit) {
//             clearInterval(intervalID)
//         }

//     },1000)
// }

// printFibonacciC(5);

// Excercise 5. The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?

// a) Fix the setTimeout call by wrapping the call to car.description() inside a function

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//     }
//     };
//     car.description(); //works
//     setTimeout(() => car.description() ,100); 

// // b) Change the year for the car by creating a clone of the original and overriding it

// const cloneCar = {...car};
// cloneCar.year = 1999;
// car = cloneCar;

// let describeCar = car.description.bind(car);
// setTimeout(describeCar, 200)
// // Does the delayed description() call use the original values or the new values from b)? Why? // Answer: Old value first and due to time delay the second timeout printout will give us the overridden answer. 

// // Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function // Answer per above: 

// // Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)
// setTimeout(car.description.bind(car),200);


// cloneCar2 = {...cloneCar}
// cloneCar2 = cloneCar
// cloneCar2.make = "Ford"
// cloneCar2.model = "Mustang"

// Excercise 6
function multiply(a, b, c, d) { // 6c. Modified to take in 4 parameters, delay prototype still works. 
    console.log( a * b * c * d );
    }

// 6a. adding in delay(ms) function
Function.prototype.delay = function (ms) { // Coded in as Function.protype.delay and not multiply.prototype delay so that this can be used across all functions.
    const originalFunction = this;

    return function (...args) {
        setTimeout(() => {
            originalFunction.apply(null,args); // 6b. added in apply to take in more parameters. (Unsure what null and args here mean.)
        }, ms);
    };
};

multiply.delay(500)(5, 5, 5 ,5);


// Excercise 7
// 7a. Define custom toString method or person object, format and print their details.
const Person1 = {
name: "Ernie",
age: 25,
toString(){
    return (this.name +", " + this.age)
}
}
console.log("User: " + Person1)

// 7b. Test Method using below code to create 2 ppl and print them in console.

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.toString = function () {
        return this.name + ", " + this.age;
    };
}

const person2 = new Person('James Brown', 73, 'male');
const person3 = new Person('Harry Potter', 17, 'male');

console.log('person2: ' + person2); // prints person2: James Brown, 73
console.log('person3: ' + person3.toString()); // prints person3: Harry Potter, 17


// 7c. new constructr func Student, use call to inherit from person and add extra property cohort

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
    this.toString = function () {
        return this.name + ", " + this.age + ", Cohort: " + this.cohort;
}
}
const newStudent = new Student ('Jane Doe', 22, 'female', '2022');
// 7.d CustomtoString for 2 students
const newStudent2 = new Student ('John Doe', 17, 'male', '2026');

console.log('Student1: ' + newStudent.toString())
console.log('Student2: ' + newStudent2.toString())

//Excercise 8
// Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'. This precision parameter should default to 1 second if not supplied.
// class DigitalClock {
//     constructor(prefix) {
//     this.prefix = prefix;
//     }
//     display() {
//     let date = new Date();
//     //create 3 variables in one go using array destructuring
//     let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
//     date.getSeconds()];
//     if (hours < 10) hours = '0' + hours;
//     if (mins < 10) mins = '0' + mins;
//     if (secs < 10) secs = '0' + secs;
//     console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }
//     stop() {
//     clearInterval(this.timer);
//     }
//     start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), 1000);
//     }
//     }
//     const myClock = new DigitalClock('my clock:')
//     myClock.start()

// class PrecisionClock extends DigitalClock {
//     constructor(prefix, precision = 1000) {
//         super(prefix);
//         this.precision = precision;
//         }

    
//     start() {
//         this.display();
//         this.timer= setInterval(() => this.display(), this.precision);
//     }
//     }

// // Create an instance of PrecisionClock with the prefix 'precision clock:' and a precision of 500 milliseconds
// const precisionClock = new PrecisionClock('precision clock:', 500);

// // Start the precision clock
// precisionClock.start();


// 8b. 
// class AlarmClock extends DigitalClock {
//     constructor(prefix, wakeupTime = '07:00') {
//         // Call the constructor of the parent class (DigitalClock)
//         super(prefix);
//         this.wakeupTime = wakeupTime;
//     }

//     checkDisplay() {
//         const now = new Date();
//         const wakeupHours = this.wakeupTime.substring(0,2);
//         const wakeupMins = this.wakeupTime.substring(3)
//         if (now.getHours()==wakeupHours && now.getMinutes()==wakeupMins) {
//             console.log('Wake Up!');
//             this.stop();
//         }
//         else{
//             this.display();
//         }
//     }
//     start() {
//         this.checkDisplay();
//         this.timer = setInterval(() => this.checkDisplay(), 1000);
//     }
//     }

//     const alarmClock = new AlarmClock('alarm clock:', '08:30');
//     alarmClock.start();
