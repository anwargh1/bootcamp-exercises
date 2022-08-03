const commonElemant = function(arr1 , arr2 ){
 //const elemant1 =-1 , elemant2 = -1 ;
 const arr3 =[]
  for (let i = 0  ; i <arr1.length; i++){
    for (let j = 0 ; j <arr2.length ; j++){
        if(arr1[i]==arr2[j]){
            if(!(arr3.includes(arr1[i]))){
                arr3.push(arr1[i])

            }
            break;
            
       
       }

    }
  }console.log(arr3)
}
//const arr1 = [ 1,3,2]
//const arr2 = [1,3,1]
//console.log(commonElemant(arr1,arr2))



//the common numbers bettwen 2 array 

//anthour answer 
function findCommonNumber2(arr1,arr2){
  let commonsNumber = new set()
   let appearances = new set(arr2)
   for(let num of arr1){
       if(appearances.has(num)){
          commonsNumber.push(num)
      }
  }
}



//the common numbers bettwen 3 array
function findCommonNumbers(arr1,arr2 ,arr3){
    let commonsNumber = new Set()
    let appearances = new Set(arr2)
    let appearances2 = new Set(arr3)
    for(let num of arr1){
        if(appearances.has(num) && appearances2.has(num)){
            commonsNumber.add(num)
        }
       

    } console.log(commonsNumber)
}

const arr1 =[1,2,3]
const arr2 = [1,3,5]
const arr3 = [1,3,4]

console.log(findCommonNumbers(arr1,arr2,arr3))



//anouthr solution 
function findCommonNumbers3Arrs(arr1,arr2,arr3){
    let twoArrCommon = findCommonNumbers(arr1,arr2)
    let threeArrCommon =findCommonNumbers(twoArrCommon,arr3)
}
 



