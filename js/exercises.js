(function() {
  'use strict';

  // ---------------------
  // 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  // Input: are two numbers from the user. 
  // Output: is the maximum of the two numbers. 
  // One-line description: The function returns the largest number.

  // Function: max()
  // Parameter: number 1 and number 2
  // Return: the highest value

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

  // ---------------------
  // 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  // Input: Three numbers provided by the user
  // Output: The highest number of the three
  // One-line description: Return the largest number of three values

  // Function: maxOfThree()
  // Parameter: number 1, number 2, number 3
  // Return: the highest value

  function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }


  // ---------------------
  // 3. Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  // Input: A single character
  // Output: True or false
  // One-line description: If the character is a vowel, return true. Otherise, return false.

  // Function: isVowel()
  // Parameter: Character provided by user
  // Return: True or false


function isVowel(char1) {
  if (char1 === 'a' || char1 === 'e' || char1 === 'i' || char1 === 'o' || char1 === 'u') {
    return true;
  } else {
    return false;
  }
}

  // ---------------------
  // 4. Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  // Input: A string of characters
  // Output: Each consonant in the string has been replaced with "Character O Character"
  // One-line description: Modify the string in order to double each consonant and add an 'o' between the consonants.

  // Function: rovarspraket()
  // Parameter: string
  // Return: sostotrorinongog (The modified string)

function rovarspraket(sentence) {

  var splitString = sentence.split("");
  var tempWord;
  var final_word = [];

    for (let i = 0; i < sentence.length; i++) {
      if (isVowel(splitString[i]) || splitString[i] === " ") {
        final_word.push(splitString[i]);
      } else {
        tempWord = splitString[i] + 'o' + splitString[i];
        final_word.push(tempWord);
      }

    }


      final_word = final_word.join("");

      return final_word;


    

  }


/*

  var final_sentence = [];
  let sent_array = Array.from(sentence);


  for (let character = 0; character < sent_array.length; character++) {
    if (isVowel(sent_array[character]) == false) { 
      //If the character is NOT a vowel
      // Return the character as Original character + 'o' + original character
      // I need to just ADD these characters to a new array. 
      // var result = myArray.join(''); This will squeeze my array together and remove all of the delimiters.
      final_sentence.push(sent_array[character],'o',sent_array[character]);
      
    } else { // Just add the character to the end. What if its a space?
      final_sentence.push(sentence[character])
    } 

  }

  var string_time = final_sentence.join('');

return string_time;

}

*/

  // ---------------------
  // 5. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------


  // Input: an array greater than length 0
  // Output: each element of the array summed together
  // One-line description: Add together all of the numbers in the array.

  // Function: sum()
  // Parameter: array submitted by user
  // Return: all array elements added together

  function sum(nums) { //Does this need to use the rest parameter ...nums?
    var summationValue = 0;
    for (let value = 0; value < nums.length; value++) {
      summationValue = summationValue + nums[value];
    }
    return summationValue;
  }

  // Input: an array greater than length 0
  // Output: each element of the array is multiplied in sequence
  // One-line description: Take the elements in the array and multiply them 

  // Function: multiply()
  // Parameter: array submitted by user
  // Return: Each element of the array multiplied by each other

  function multiply(nums) {
    var multiplyValue = 1;
    for (let value = 0; value < nums.length; value++) {
      multiplyValue = multiplyValue * nums[value];
    }
    return multiplyValue;
  }


  // ---------------------
  // 6. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------


  // Input: A string provided by the user
  // Output: The string reversed
  // One-line description: Reverse the string that is provided. 

  // Function: reverse()
  // Parameter: string
  // Return: gnirts (the reversed string)

function reverse(string) {

  // Turn the string into an array.
  // Cycle through the array, adding each character to the front of the array
  // Return the new array

  let string_array = Array.from(string);
  let reversed_string = [];
  for (let character = 0; character < string.length; character++) {
    reversed_string.unshift(string_array[character]);
  }

  var string_time = reversed_string.join('');

  return string_time;
}


  // ---------------------
  // 7. Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  // Input: Array of words
  // Output: one word, that is the longest
  // One-line description: Take an array of words and return the length of the longest one. 

  // Function: findLongestWord()
  // Parameter: array of words
  // Return: the length of the longest word


  function findLongestWord(wordArray) {

    // Look at each word in the array
    // Check the length in the array
    // Store the lengths in another array
    // Now I have an array of lengths.
    // Find the maximum value
    // Maybe can recursively call max(max(array),max(array))

    let lengthWords = [];
    let highest_value = 0;

    for (let i = 0; i < wordArray.length; i++) {
      lengthWords.push(wordArray[i].length);
    }

    

    highest_value = lengthWords[0]; // Set the highest value to the first length value.

    for (let lens = 0; lens < lengthWords.length; lens++) {
      
      if (highest_value < lengthWords[lens]) {
        highest_value = lengthWords[lens];
      }
    }

    return highest_value;
    
  }



  // ---------------------
  // 8. Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  // Input: Array of words, an integer
  // Output: Array of words longer than integer
  // One-line description: Return words that are LONGER than the provided integer.

  // Function: filterLongWords()
  // Parameter: arrayWords, length_requirement
  // Return: longArrayWords
 


  function filterLongWords(wordArray, length_requirement) {

    // Get an array of words. [cat, dog, puppy]
    // Get a length requirement. 
    // Cycle through the array and compare array.length to the length requirement.
    // The word.length must be GREATER THAN than the word.
    // If the word.length is greater than, add that word to the long words array.
    // Return the long words array.

    let long_words = [];

    for (let word = 0; word < wordArray.length; word++) {
      if (wordArray[word].length > length_requirement) {
        long_words.push(wordArray[word]);
      }
    }

    return long_words;

  }

  // ---------------------
  // 9. Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  // Input: A string of characters.
  // Output: An object that identifies each character with the number of times it appears.
  // One-line description: Take in a string and return an object with each character and how often it appears. 

  // Function: charFreq()
  // Parameter: string
  // Return: {Obj}

  function charFreq(string) {

    // A string is input. 
    // Turn the string into an array.
    // Cycle through the string/array characters.
    // Check if the character is already in the object. // Could also create an object with every letter in it.
    // If it is not, add the character in with a 1 count. 
    // If the character is already listed, add 1 to the character in the object. 
    // Move to next character in big string. 
    // At end of string, end loop.
    // Return the object?

    var splitString = string.split(""); // This turns the entered string into an array

    console.log(splitString); //Print test

    let freqCount = {}; // Creates an empty object Access items by freqCount.property

    for (let i = 0; i < string.length; i++) {

      

        var letter = splitString[i];

        if(freqCount.hasOwnProperty(letter)) {
          freqCount.letter = freqCount.letter + 1;
        } else {
          freqCount.letter = 1;
        }


      /*

      if (freqCount.hasOwnProperty(splitString[i])) {
        freqCount.splitString[i] = freqCount.splitString[i] + 1;
      } else {
        freqCount.splitString[i] = 1;
        console.log("Timer");
      }
   */
    }

    return freqCount;

  }


  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
