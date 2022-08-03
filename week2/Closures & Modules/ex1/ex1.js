const  StringFormatter = function()
{
  const capitalizeFirst = string =>
  {
   return console.log(string[0].toUpperCase()+ string.slice(1))
  }
  
   const skewerCase = string =>console.log(string.replaceAll(' ', '-'));
 
    return {
      cFirst : capitalizeFirst ,
      sCase : skewerCase ,
    }   

}


const formatter = StringFormatter() 

formatter.cFirst("dorothy") //should print Dorothy
formatter.sCase("blue box") //should print blue-box