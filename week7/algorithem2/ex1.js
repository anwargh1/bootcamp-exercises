function printStarSeries(num, count) {
  let string = "";
  
  for (let i =1 ;  i <= num; i++) {
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    
    string += "\n";
  }
  for (let i = 2; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      string += "*";
    }
    string += "\n";
  }
 
  return string;
}

console.log(printStarSeries(5, 2));

//////

// function profit(array) {
//   let max = array[array.length];
//   let min = array[0];
//   let profit = 0;

//   for (let i = 1; i < (array.length / 2)-1; i++) {
//     if (array[i] < array[Math.floor(array.length / 2)-1]) {
//       if (min < array[i]) {
//         console.log(min);
//       } else min = array[i];
//     } else min = array[Math.floor(array.length / 2)];
//   }
//   for (let i =array.length / 2; i < array.length-1; i++) {
//     if (array[Math.floor(array.length / 2)] < array[i]) {
//         if (max > array[i]) {
//           //  console.log(max);
//           } else max = array[i];

//     } else max = array[Math.floor(array.length / 2)];

//     profit = max - min;
//   }
//   return profit;
// }
// const array = [20,10, 30, 100, 110, 10];
// //console.log(array[Math.floor(array.length / 2)]);
// //console.log(array[Math.floor(array.length / 2)-1]);
// //console.log("---------");
// // console.log(profit([20, 110, 10]));
// // console.log(profit([20,10, 30, 100, 110, 10]));
// console.log(profit([10, 7, 5, 8, 5, 9])); // 4
// console.log(profit([200, 150, 180, 300, 10, 150])); //150
// console.log(profit([100, 50, 100, 30, 90])); //60
// console.log(profit([100, 90, 90, 80, 80])); //0
// console.log(profit([100, 90, 80, 60, 50])); //-10
