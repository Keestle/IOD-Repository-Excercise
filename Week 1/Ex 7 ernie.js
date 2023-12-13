function ernieWork(){
    const Sentiment = require('sentiment');
    const sentiment = new Sentiment();
    const result = sentiment.analyze('cats are stupid');
    console.log('result');
    console.log(calFahrenheit(32));
    console.log(rectangleArea(10,50));
    console.log(circleValues(10));
    console.log(reverseNum(123));
    console.log(flattenArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    console.log(checkPalindrome("madam"));
    console.log(simpleInt(20000,5,2));
    console.log(genRandom());
    console.log(getFactorial(12));
    console.log(letterCount("Banana" , 'a'));



    // question 7 
    const inputString = "Hello";
    const result7 = countVowels(inputString);
    console.log(`Number of vowels in "${inputString}": ${result7}`);
}

module.exports = {simpleInt, checkPalindrome}

function calFahrenheit(cel){
return (cel*9/5)+32;
}

function rectangleArea(a,b){
    return `Area rectangle ${a * b}`;
}

function circleValues(radius){
    return `perimeter: ${2 * Math.PI* radius}, Area: ${Math.PI* radius *radius}`;
}

function reverseNum(num) {
    var reverse = 0;
    while(num != 0)
    {
      reverse = reverse * 10;
      reverse = reverse + num%10;
      num = Math.trunc(num/10);
    }
    return reverse;
  }

  function countVowels(inputString) {
    const lowercaseString = inputString.toLowerCase(); // converting the string to lowercase
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']); //creating a vowel set for the below to count the relevant vowels

    let vowelCount = 0;
    for (let char of lowercaseString) {
        if (vowels.has(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

function flattenArr(arr){
    return arr.reduce((result,array) => result.concat(array));
}

// Question 9 : Write a function to check if an input string is a palindrome (meaning another word when reversed).

function checkPalindrome(str){
    // Convert to lowercase to avoid confusion
    str = str.toLowerCase()
    // creating a var as a reversedstring
    var reversedStr = str.split('').reverse().join('');

    //check if palindrome 
    if (str === reversedStr){
        return true;
    }
    else{
        return false;
    }
}

// Question 10
function simpleInt(principle, rate, time){
    return finalAmt = principle + (principle*rate*time);
}

// Question 12: Write a function to generate a random number

function genRandom(){
    randomNumber = Math.floor(Math.random()*10) + 1;
    return randomNumber;
}

// Question 13 write a function to find the factorial of a number

function getFactorial(number){
    // make sure factorial is 0 or 1
    if (number ===0 || number === 1){
        console.log(1);
    }

    else{
        var result = 1;
        num = 4
        for (let i=2; i <= num; i ++) {
            result *= i;
        }
    }
    console.log("factorial:" + result)
    
}

// Question 16 Write a function to find the count of a letter in a string
 
function letterCount(str , c){
    var count=0;
    str = str.toLowerCase();
    for (var i=0; i<str.length; i++) 
    if(str.charAt(i)==c){ 
        count++;
      }
      return count;
    }
    
    