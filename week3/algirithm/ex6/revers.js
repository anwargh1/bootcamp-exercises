// function reverseOnlyNumbers(array){
//     let index =[]
//    // let lastNumber ;
//    // let firstElemant;

//     for(let i =0; i<array.length ; i++){
//        {
//         if(typeof array[i] =="number" )
//             index.push(i)
//         } 
//         }
//    return index
// }
// const num =[1,w,e,2,r,7,8]
// console.log(reverseOnlyNumbers(num))

const ReverseOnlyNumbers = function (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'string') {
        newArr.push(arr[i]);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'string') {
        arr[i] = newArr.pop();
        console.log(arr[i])
      }
    }
  };
  let arr = [1, 'w', 'e', 2, 5, 3, 'r', 7, 8];
  ReverseOnlyNumbers(arr);
  console.log(arr);