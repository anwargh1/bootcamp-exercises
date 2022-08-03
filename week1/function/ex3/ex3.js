const checkExists = function (numbers, int) {
    for(let number of numbers) {
      if(number === int) {
        return true
      }
    }
    return false
  }
      
  const numbers = [3, 5, 12, 4]
      
  console.log(checkExists(numbers, 1))