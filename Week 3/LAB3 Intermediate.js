// Excercise 1: Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings. 


// function capitalizeFirstLetters(inputString) {
//     // Check if the input is a string
//     if (typeof inputString !== 'string') {
//         return "Invalid input. Please provide a valid string.";
//     }

//     // Split the string into an array of words
//     let words = inputString.split(" ");

//     // Capitalize the first letter of each word
//     let capitalizedWords = words.map(word => {
//         // Check if the word is not empty
//         if (word.length > 0) {
//             return word[0].toUpperCase() + word.slice(1);
//         } else {
//             return ""; // Handle empty words
//         }
//     });

//     // Join the modified words back into a string
//     let resultString = capitalizedWords.join(" ");

//     return resultString;
// }

// // Test the function with different inputs
// let testString1 = "hello world";
// let testString2 = "javascript is fun";
// let testString3 = 123; // Invalid input

// console.log(capitalizeFirstLetters(testString1)); // Output: "Hello World"
// console.log(capitalizeFirstLetters(testString2)); // Output: "Javascript Is Fun"
// console.log(capitalizeFirstLetters(testString3)); // Output: "Invalid input. Please provide a valid string."


//Excercie 2: Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise. b)  Write another variant of the truncate function that uses a conditional operator.

// function stringShorten(str , max) {
//     if (str.length > max) {
//         let shortenedString = str.substring(0,max)
//         console.log(shortenedString + "...")
//     }
//     else {
//         console.log(str)
//     }
// }

// stringShorten("When you absolutely need to pee.", 6)

// // Another version - Conditional operator 

// stringShorten2 = (str,max) => console.log(str.length > max? str.substring(0,max) + "..." : str)

// stringShorten2 ("When the wind blows.", 5)

// Excerise 3: Use the following animals array for the below tasks. Test each one by printing the result to the console.
// a)  Add 2 new values to the end 
// b)  Add 2 new values to the beginning 
// c)  Sort the values alphabetically 
// d)  Write a function replaceMiddleAnimal(newValue) that replaces the value in the 
// middle of the animals array with newValue 
// e)  Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work 
// regardless of upper/lower case. 

// const animals = ['Tiger', 'Giraffe'];
// console.log(animals);

// // two new values to the end 
// add2NewAnimals = (a , b) => animals.push(a,b);
// add1NewAnimals = (a) => animals.push(a);
// add1NewAnimals("Eel");
// add2NewAnimals("Snake","Panda");
// console.log(animals);
 
// // add 2 new values to the beginning 
// add2NewAnimalsStart = (a , b) => animals.unshift(a,b);

// add2NewAnimalsStart("Ferret", "Elephant");
// console.log(animals);

// // sort the values alphabetically
// animals.sort()
// console.log(animals);

// // Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue 
// function replaceMiddleAnimal(a) {
//     if (animals.length % 2 !== 0){ // check if array is  odd numbered 
//         let middleIndex = Math.floor(animals.length/2); // calculating the index of the middle element.
//         animals.splice(middleIndex, 1 , a); // Splice and replace middle element with a
//     }
//     else {
//         console.log ("The array must be a odd value in order to replace the middle value.")
//     }
// }
// replaceMiddleAnimal("Owl");
// console.log(animals);

// e)  Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case. 

// function findMatchingAnimals(beginsWith) {
//     // Convert beginsWith to lowercase for case-insensitive comparison
//     let lowerCaseBeginsWith = beginsWith.toLowerCase();

//     // Use filter to create a new array with matching animals
//     let matchingAnimals = animals.filter(animal => animal.toLowerCase().startsWith(lowerCaseBeginsWith));
//     return matchingAnimals;
   
// }

// let result = findMatchingAnimals('e');
// console.log(result);

// Excercise 4: Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'. The function should remove all dashes, and uppercase the first letter of each word after a dash. 
// b) Create variants of the camelCase function that use different types of for loops, and  
// c) with and without the conditional operator. 

// Below is variation with a forloop and without the conditional operator 
// function camelCase(cssProp){
//     let words = cssProp.split('-');
    
//     for (let i = 1; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join('');
// }

// console.log(camelCase('margin-left')) // marginLeft 
// console.log(camelCase('background-image')) // backgroundImage 
// console.log(camelCase('display')) // display

// Below is variation with a forloop and without the conditional operator 
// function camelCase(cssProp) {
//     let hasHyphen = cssProp.includes('-');
//     let words = cssProp.split('-');

//     for (let i = 1; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     return hasHyphen ? words.join('') : cssProp;
// }

// console.log(camelCase('margin-left'));       // Output: marginLeft
// console.log(camelCase('background-image'));  // Output: backgroundImage
// console.log(camelCase('display'));           // Output: display
// console.log(camelCase('color'));             // Output: color

//Decimal number operations in JavaScript can lead to unexpected results, as in the following
// let twentyCents = 0.20 
// let tenCents = 0.10 
 
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)  // Results 0.2 + 0.1 = 0.30000000000000004

// let fixedTwenty = twentyCents.toFixed(2); 
// let fixedTen = tenCents.toFixed(2); 
 
// console.log (fixedTen)
// console.log (fixedTwenty)
// console.log(fixedTwenty + fixedTen) //why is this not working?

// // a. This is not working as the '+' is acting as a concatinator, therefore giving us the wrong answer. Refer below for fix.

// // b. Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result. 

// function currencyAddition(float1, float2){

//     let intNumber = parseFloat(float1);
//     let intNumber2 = parseFloat(float2);

//     console.log(intNumber+intNumber2);
// }

// currencyAddition(0.54 , 0.87)

// C. Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result

// function currencyOperation(float1,float2, operation){
//     let number1 = parseFloat(float1);
//     let number2 = parseFloat(float2);

//     switch (operation) {
//         case '+':
//             console.log(number1 + number2);
//             break;
//         case '-':
//             console.log(number1 - number2);
//             break;
//         case '*':
//             console.log(number1 * number2);
//             break;
//         case '/':
//             console.log(number1 / number2);
//             break;
//         default:
//             console.log('Invalid operation');
//     }
// }

// currencyOperation(0.54,0.87,'*')

// d. (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10

// function currencyOperation2(float1, float2, operation, numDecimals) {
//     let number1 = parseFloat(float1);
//     let number2 = parseFloat(float2);

//     switch (operation) {
//         case '+':
//             console.log((number1 + number2).toFixed(numDecimals));
//             break;
//         case '-':
//             console.log((number1 - number2).toFixed(numDecimals));
//             break;
//         case '*':
//             console.log((number1 * number2).toFixed(numDecimals));
//             break;
//         case '/':
//             if (number2 !== 0) {
//                 console.log((number1 / number2).toFixed(numDecimals));
//             } else {
//                 console.log('Error: Division by zero');
//             }
//             break;
//         default:
//             console.log('Invalid operation');
//     }
// }

// // Example usage with 2 decimal places
// currencyOperation2(0.54, 0.87, '*', 2);

// // Example usage with 4 decimal places
// currencyOperation2(10.5, 3, '/', 4);

// // 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray. Test with the following arrays and create another one of your own. 
 
// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'] 
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43] 
 
// function unique(duplicatesArray){
//     let uniqueValues =[]

//     // Filter to create new array of unique values
//     duplicatesArray.filter(function (value) {
//         if (!uniqueValues.includes(value)) {
//             uniqueValues.push(value);
//             return true;
//         }
//         return false
//     });
//     return uniqueValues;
// }

// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ];
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ];

// Excercise 7: Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks. 
const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a. Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.

// function getBookTitle(bookId){
//     const book = books.find(book => book.id === bookId);

//     if (book) {
//         return book.title;}
//         else {
//             return "Book not found";
//         }
//     }

// console.log(getBookTitle(3)); 
// console.log(getBookTitle(6));

// b.  Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.

// function getOldBooks() {
//     // Use the filter method to create an array of books written before 1950
//     const oldBooks = books.filter(book => book.year < 1950);

//     return oldBooks;
// }

// Call the function and store the result
// const oldBooks = getOldBooks();

// Log the result to the console
// console.log(oldBooks);

// c. Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.

    // function addGenre() {
    //     // Use the map method to create a new array of books with added genre property
    //     const booksWithGenre = books.map(book => ({ ...book, genre: 'classic' }));
    
    //     return booksWithGenre;
    // }
    // // Call the function and store the result
    // const booksWithGenre = addGenre();
    
    // // Log the result to the console
    // console.log(booksWithGenre);


// d. (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.

// function getTitles(authorInitial) {
//     // Use map and filter together to create an array of titles
//     const titles = books
//         .filter(book => book.author.startsWith(authorInitial))
//         .map(book => book.title);

//     return titles;
// }

// // Call the function and store the result
// const titlesByAuthorInitial = getTitles('J');

// // Log the result to the console
// console.log(titlesByAuthorInitial);

// // e. (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date. 
// function latestBook() {
//     let latestBook = null;

//     // Use forEach to iterate through each book
//     books.forEach(book => {
//         // Use find to get the book with the most recent publication date
//         if (!latestBook || book.year > latestBook.year) {
//             latestBook = book;
//         }
//     });

//     return latestBook;
// }

// // Call the function and store the result
// const mostRecentBook = latestBook();

// // Log the result to the console
// console.log(mostRecentBook);

// Excercise 8: The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.
// const phoneBookABC = new Map() //an empty map to begin with 
// phoneBookABC.set('Annabelle', '0412312343')  
// phoneBookABC.set('Barry', '0433221117') 
// phoneBookABC.set('Caroline', '0455221182')

// // a)  Create a new phoneBookDEF Map to store names beginning with D, E or F
// // b)  Initialise the contents of phoneBookDEF by passing in an array of keys/values

// const phoneBookDEF = new Map()
// phoneBookDEF.set('Annabelle', '0412312343')  
// phoneBookDEF.set('Barry', '0410321538')  
// phoneBookDEF.set('Alan', '042026485')  

// // C. Update caroline 

// phoneBookABC.set('Caroline', '0445215849')

// d. Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map

// function printPhoneBook(contacts) {
//     // Iterate through the entries of the Map using forEach
//     contacts.forEach((phoneNumber, name) => {
//         console.log(`${name}: ${phoneNumber}`);
//     });
// }

// Example usage with phoneBookABC
// printPhoneBook(phoneBookABC);


// e. Combine the contents of the two individual Maps into a single phoneBook Map 
// f. Print out the full list of names in the combined phone book 

// const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF])
// printPhoneBook(phoneBook);

// function printPhoneBook(contacts) {
//     contacts.forEach((phoneNumber, name) => {
//         console.log(`${name}: ${phoneNumber}`);
//     });
// }


// Excercise 9: Given the below salaries object, perform the following tasks. 
// let salaries = { 
//     "Timothy" : 35000, 
//     "David" : 25000, 
//     "Mary" : 55000, 
//     "Christina" : 75000, 
//     "James" : 43000 
// };

// // a. Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

// function sumSalaries(salaries) {
//     // Use Object.values to get an array of salary values and then use reduce to sum them up
//     return Object.values(salaries).reduce((total, salary) => total + salary, 0);
// }

// // Call the function and store the result
// const totalSalaries = sumSalaries(salaries);

// // Log the result to the console
// console.log(totalSalaries);

// b. Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

// function topEarner(salaries) {
//     // Use Object.entries to get an array of [name, salary] pairs
//     // Then use reduce to find the person with the highest salary
//     const [topEarnerName] = Object.entries(salaries).reduce((max, entry) => {
//         return entry[1] > max[1] ? entry : max;
//     }, ['', 0]);

//     return topEarnerName;
// }

// // Call the function and store the result
// const highestEarner = topEarner(salaries);

// // Log the result to the console
// console.log(highestEarner);


// // Excercise 10: The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:
// // a)  Print the total number of minutes that have passed so far today 
// // b)  Print the total number of seconds that have passed so far today
// const today = new Date(); 
// const totalMinutesPassed = today.getHours() * 60 + today.getMinutes();
// const totalSecondsPassed = totalMinutesPassed * 60 + today.getSeconds();
// console.log('Current time is ' + today.toLocaleTimeString()) 
 
// console.log(today.getHours() + ' hours have passed so far today')
// console.log(totalMinutesPassed + ' minutes have passed so far today')
// console.log(totalSecondsPassed + ' seconds have passed so far today')

// C. Calculate and print your age as: 'I am x years, y months and z days old' 
// //My birthdate
// const birthDate = new Date('1998-01-01');

// // Current date
// const currentDate = new Date(); 

// // Calculate age

// const ageInMilliseconds = currentDate - birthDate;
// const ageInSeconds = ageInMilliseconds / 1000;
// const ageInMinutes = ageInSeconds / 60;
// const ageInHours = ageInMinutes / 60;
// const ageInDays = ageInHours / 24;

// // Extract years, months, and days
// const years = Math.floor(ageInDays / 365);
// const remainingDays = ageInDays % 365;
// const months = Math.floor(remainingDays / 30);
// const days = Math.floor(remainingDays % 30);

// // Print the age
// console.log(`I am ${years} years, ${months} months, and ${days} days old.`);


// d)  Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates. 
 
// function daysInBetween(date1, date2) {
//     // Convert both dates to UTC to avoid issues with daylight saving time
//     const utcDate1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
//     const utcDate2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

//     // Calculate the difference in milliseconds
//     const millisecondsDiff = Math.abs(utcDate2 - utcDate1);

//     // Convert the difference to days
//     const daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));

//     return daysDiff;
// }

// // Example usage:
// const startDate = new Date('2023-01-01');
// const endDate = new Date('2023-12-31');

// const daysBetween = daysInBetween(startDate, endDate);
// console.log(`The number of days between the two dates is: ${daysBetween} days.`);

 
