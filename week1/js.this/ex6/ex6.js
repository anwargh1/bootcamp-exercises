const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      // TODO: Finish this method
      if( drinkType == "latte" )
        {
           // console.log( coffeeShop.beans);
              if(coffeeShop.beans <this.drinkRequirements.latte) {
                 console.log("Sorry, we’re all out of beans")
            } else 
              {
                 console.log("done");
                 this.beans -= this.drinkRequirements.latte;
               //  console.log( coffeeShop.beans);
              }
       }
       else if( drinkType == "americano" ){
         // console.log( coffeeShop.beans);
              if(coffeeShop.beans <this.drinkRequirements.americano) {
                 console.log("Sorry, we’re all out of beans")
            } else 
              {
                 console.log("done");
                 this.beans -= this.drinkRequirements.americano;
                // console.log( coffeeShop.beans);
              }
        }
         else if( drinkType =="doubleShot" ){
           // console.log( coffeeShop.beans);
              if(coffeeShop.beans <this.drinkRequirements.doubleShot) {
                 console.log("Sorry, we’re all out of beans")
            } else 
              {
                 console.log("done");
                 this.beans -= this.drinkRequirements.doubleShot;
                // console.log( coffeeShop.beans);
              }
          }
         else if(drinkType == "frenchPress"){
            //console.log( coffeeShop.beans);
              if(coffeeShop.beans <this.drinkRequirements.frenchPress) {
                 console.log("Sorry, we’re all out of beans")
            } else 
              {
                 console.log("done");
                 this.beans -= this.drinkRequirements.frenchPress;
                // console.log( coffeeShop.beans);
              }
          }
      
      else
        console.log("Sorry, we don’t make")
    }
  };
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"