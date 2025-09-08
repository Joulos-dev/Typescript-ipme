// méthode 1 (util 1 )
import {addDots, countVowels, isEven, reverseArray,longestWord, randomNumbers, areAnagrams, sumOfSquares, generatePassword, letterFrequency, sortByWordLenght} from "./utils";

// méthode 2 ( util 2 )
import arrayNames from "./utils_2";

console.log(addDots("coucou"));
console.log(arrayNames);

// Exercice 1

console.log(isEven(3));
console.log(isEven(10));
console.log(isEven(17));

// Exercice 2

console.log(countVowels("victor a encore braquer la banque"));

// Exercice 3

console.log(reverseArray([5,6,7]));

// Exercice 4

console.log(longestWord("Le feu sombre ne vous servira à rien contre moi"))

// Exercice 5

console.log(randomNumbers(1,10));

// Exercice 6

console.log(areAnagrams("chien", "niche"));

// Exercice 7

console.log(sumOfSquares(3));

// Exercice 8

console.log(generatePassword(8));

// Exercice 9

console.log(letterFrequency("le feu sombre ne vous servira a rien contre moi"));

// Exercice 10

console.log(sortByWordLenght("le feu sombre ne vous servira a rien contre moi"));