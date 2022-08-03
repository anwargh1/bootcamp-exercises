let boughtTesla1 = true
const yearOfTeslaPurchase1 = 1999
let isUSCitizen1 = false
let currentYear1 = 2022

if( boughtTesla1 && isUSCitizen1 ){
  let longago1 = currentYear1 - yearOfTeslaPurchase1
  console.log( longago1 )
  if(longago1 >= 4){
    console.log (" would you  like an upgrade?")
    
  }    else 
    prompt("are you satisfied with the car ")
  
} else 
  if( boughtTesla1 && !isUSCitizen1 ) {
      prompt(" would you like to move to the US ?")
    
    } else 
      if (!boughtTesla1 ){
       prompt(" Are you interested in buying one?")
    }