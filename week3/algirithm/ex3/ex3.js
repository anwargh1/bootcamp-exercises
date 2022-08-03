const secendeMax = function(array){
    let firstMax = -Infinity;
    let secendMax = -Infinity;
    let arr= [];
      for(let m  = 0 ; m<array.length ; m++){
            if(array[m]>firstMax)
           { 
             secendMax=firstMax
             firstMax=array[m] 
           }else if(secendMax<array[m])
           {
            secendMax=array[m]
           }
        } return secendMax
}
//const b = [10,33,45,7,23,4,0]
const b = [-1, -5, -43, -7, -23, -4, 0];
const arr2 = secendeMax(b)
console.log(arr2)

