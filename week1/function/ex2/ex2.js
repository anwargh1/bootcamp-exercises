
const isEven = function(num) {
    if(num% 2 === 0)
    return true
    else false 
}
    
 
console.log(isEven(4))


const printOdds = function (numbers) {
    for(let number of numbers) {
      if(!isEven(number)) {
        console.log(number)
      }
    }
  }
      
  const numbers = [5, 33, 5, 1, 8, 13, 34, 9, 56, 12, 80, 31]
      
  printOdds(numbers)