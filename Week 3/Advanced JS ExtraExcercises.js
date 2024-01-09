// Excercise 1 (Version 1)

// function sumToN(n) {
//     let sum = 0;
//     for (let i = 1; i<= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumToN(5));

// function timeLogging(originalFunction) {
//     return function (name) {
//         console.time ('Function Timer');
//         console.log (`\n Excecuting function...`)
//         const result= originalFunction(name);
//         console.timeEnd('Function Timer'); // Stopping the timer
//         return result;
//     }
// }

// const decoratedsumToN = timeLogging(sumToN);
// console.log(decoratedsumToN(5));


// Excercise 1 (version2)
// function performanceDecorator(func) {
//     return function (...args) {
//         const start = performance.now(); // difference with time start and end
//         const result = func(...args);
//         const end = performance.now();
//         console.log(`Time taken: ${end - start} milliseconds`);
//         return result;
//     };
// }

// function sumToN(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// // Wrap the sumToN function with the performanceDecorator
// const timedSumToN = performanceDecorator(sumToN);

// // Now, when you call timedSumToN, it will log the time taken to execute the sumToN function
// const result = timedSumToN(1000000);
// console.log(`Result: ${result}`);


//Excercise 2: Function binding 

// Demo of how 'this' loses it's context
// const person = {
//     name: 'Alice',
//     sayName: function () {
//         console.log(this.name);
//     }
// }

// person.sayName() // This works - Called directly 
// setTimeout(person.sayName, 5000) // Result is undefined, called indirectly hence it fails!

// Method to solve this issue - bind()
// const person2 = {
//     name: 'Alicia',
//     sayName2: function () {
//         console.log(this.name);
//     }
// }
// const boundSayName2 = person2.sayName2.bind(person2)
// setTimeout(boundSayName2, 3000)

//Excerise 3: Managing 'this' in Different Contexts

const obj = { contextProp: 'Object context'};

function showContext() {
    console.log(this.contextProp)
}


obj.showContextMethod = showContext;
obj.showContextMethod(); // Output: Object context


showContext() // Calling the function as a standalone function in global context - result is undefined. 

// Use call() to explicitly set the context
const otherObj = { contextProp: 'Another object context' };
showContext.call(otherObj); // Output: Another object context

// Use apply() with an array of arguments (not necessary here)
const thirdObj = { contextProp: 'Yet another object context' };
showContext.apply(thirdObj); // Output: Yet another object context