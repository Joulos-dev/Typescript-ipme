// première méthode d'export (plusieurs éléments).
export function addDots(sentence : string): string {
    return sentence + "..." ;
}

// Exercice 1

export function isEven(nb:number): boolean {
    if(nb % 2 === 0) {
        return true
    } else {
        return false
    }
}

// Exercice 2

export function countVowels(sentence:string): number {
    let vowelsArray: Array<string> = ["a","e","i","o","u","y"]
    let countVowels = 0;
    let sentenceSplit: Array<string> = sentence.split("");
    for(let i = 0; i < sentence.length; i ++){
        if(vowelsArray.includes(sentenceSplit[i])){
            countVowels ++;
        }
    }
    return  countVowels;
}

// Exercice 3

export function reverseArray(array: Array<number>): Array<number> {
    return array.reverse();
}

// Exercice 4

export function longestWord(sentence:string): string|null {
    let sentenceSplit: Array<string> = sentence.split(" ");
    let longest: number = 0;
    let word: null | string = null;
    for(let i: number=0;i < sentenceSplit.length; i++ ) {
        if(longest < sentenceSplit[i].length) {
            longest = sentenceSplit[i].length;
            word = sentenceSplit[i];
        }
    }
    return word;
}

// Exercice 5

export function randomNumbers(min:number, max:number): Array<number> {
    let newArray : Array<number> = [];
    for(let i : number = 0; i < 3; i++) {
        newArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return newArray;
}

// Exercice 6

export function areAnagrams(firstWord:string,secondWord:string): boolean {
    let firstWordCleaned : string = firstWord.split("").sort().join("");
    let secondWordCleaned : string = secondWord.split("").sort().join("");
    return firstWordCleaned === secondWordCleaned
}

// Exercice 7

export function sumOfSquares(n:number):number {
    let sum : number = 0;
    for(let i: number = 1 ; i <= n ; i++){
        sum = sum + i**2;
    }
    return sum;
}

// Exercice 8
export function generatePassword(length: number): string {
    let letter:string = 'abcdefghijklmnopqrstuvwxyz';
    let number:string = '0123456789';
    let allChars:string = letter + number ;
    let newPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        newPassword += allChars[randomIndex];
    }
    return newPassword;
}

// Exercice 9

export function letterFrequency(sentence:string): Record<string,number> {
    let resultat:Record <string , number> = {};
    // let resultat: { [key: string]: number } = {};
    let cleanSentence: Array<string> = sentence.split("");
    for(let i : number = 0 ; i <= cleanSentence.length; i++){
        const letter = cleanSentence[i];

        if (resultat[letter]) {
            resultat[letter]++;
        } else {
            resultat[letter] = 1;
        }
    }
    return resultat;
}

// Exercice 10

export function sortByWordLenght(sentence:string):Array<string>{
     let splitedSentence : Array<string> = sentence.split(" ");
     console.log(splitedSentence)
    //for(let i : number = 0; i <= splitedSentence.length; i++) {
        splitedSentence.sort((a, b) => a.length - b.length);
   // }
    return splitedSentence;
}