function follow(array){
    let newArray=[]
    
   
    for(let i = 0 ; i < array.length ; i++ )
        {  
        if((array[i+1] - array[i] )==1 || (array[i+1] - array[i] )== -1 ){
          if(!(newArray.includes(array[i])))
            newArray.push(array[i])
            newArray.push(array[i+1])
        }
       
  }
  return newArray
}
  const arr = [5,4,5,5,1,2]
  console.log(follow(arr))
