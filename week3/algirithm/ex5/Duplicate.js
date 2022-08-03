function duplicateAnArray(newArray){
 //const x=newArray;
 const newArrayy =[...newArray] 
console.log(newArray);
     for(let i =0;i<newArray.length;i++){
         newArrayy.push(newArray[i])

    }
    console.log( newArrayy);
 }

let arr =[1,2,3]
duplicateAnArray(arr) 