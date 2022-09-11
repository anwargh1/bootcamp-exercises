//ex1
// function highestScoring(string) {
//   let highestScoringWord = { word:'', score: 0 };
//   const words = string.split(" ");
//   let alphabetMap = {};
//   for (let i = "a".charCodeAt(), j = 1; i <= "z".charCodeAt(); i++, j++) {
//     alphabetMap[i] = j;
//   }
//   words.forEach((w) => {
//     const letters = w.split('');
//     const sumOfChars = letters.reduce(
//       (count, char) => count + alphabetMap[char.charCodeAt()], 0 );
//     if (sumOfChars > highestScoringWord.score) {
//       highestScoringWord = { word: w, score: sumOfChars };
//     }
//   });
//   return highestScoringWord.word;
// }
// console.log(highestScoring("some test text"));
// console.log(highestScoring('if you are a winner'))

//ex2
// (function () {
//     console.log(1);
//     setTimeout(function () { console.log(2) }, 1000);
//     console.log(3);
//     setTimeout(function () { console.log(4) }, 0);
//     setTimeout(function () { console.log(6) }, 0);
//     //console.log(5);
// 1
// 3
// 5
// 4
// 6
// 2
// })();

// ex3
// function uniqueCharacters(word) {
//   for (let i = 0; i < word.length-1; i++) {
//     for(let j= i+1 ; j<word.length;j++){
//         if(word[i]===word[j]){
//             return false
//         }else return true
//     }
// }
// }
// console.log(uniqueCharacters("aaaanw"));
// console.log(uniqueCharacters("Anwar"));
// console.log(uniqueCharacters("cat"));
// console.log(uniqueCharacters("  "));

// //ex4
function charsToLength(string) {
  let count = {};
  let str=[];
  for (let i of string) {
    if (count[i]) {
      count[i]++; 
    } else count[i] = 1;
   str.push(i+count[i])
   console.log(count);
  }return str
}
console.log(charsToLength("aanwar r"));

//ex5
// class camelCase {
//   constructor() {}

//   camelCaseWord(strings) {
//     var str = "";
//     for (let i = 0; i < strings.length; i++) {
//       if (strings[i] == " ") {
//         str += strings[i + 1].toUpperCase();i++
//       } else {
//         str += strings[i];
//       }
//     }
//     return str;
//   }
// }
// const camel = new camelCase();
// console.log(camel.camelCaseWord("camel case word"));
// console.log(camel.camelCaseWord("hello case"));
//////////////////////////////////////////////////////////////
// function add(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// console.log(add(2)(3));

// function add2(x, y) {
//   return function (y) {
//     return x + y;
//   };
//   if (typeof b == "undefined") {
//     return ddd;
//   } else {
//     return ddd(b);
//   }
// }

// console.log(add2(2)(3));
// console.log(add2(2, 3));
