const pumpFuel = function (plane) {
    const b=this.fly;
    plane.b += 1;
  };
  
  const airplane = {
    fly: function (fuel) {
      if (fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly(1));
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly(0));
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly(1));