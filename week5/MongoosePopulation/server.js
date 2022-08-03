var mongoose = require("mongoose");

var { Visitor, Planet, SolarSystem } = require("./models/model");

mongoose.connect("mongodb://localhost/SolarSystem");

// let s1 = new SolarSystem({
//   starName: "Milky Way",
//   planets: [],
// });

// let p1 = new Planet({
//   name: "Earth",
//   system: s1,
//   visitors: [],
// });

// let p2 = new Planet({
//   name: "Mars",
//   system: s1,
//   visitors: [],
// });

// let v1 = new Visitor({
//   name: "omar",
//   homePlanet: p1,
//   visitedPlanets: [],
// });

// let v2 = new Visitor({
//   name: "bashar",
//   homePlanet: p2,
//   visitedPlanets: [],
// });

// s1.planets.push(p1);
// s1.planets.push(p2);

// p2.visitors.push(v1);
// v1.visitedPlanets.push(p2);

// p1.visitors.push(v2);
// v2.visitedPlanets.push(p1);

// s1.save();
// p1.save();
// p2.save();
// v1.save();
// v2.save();

//Find a visitor’s list of visited planets

// Visitor.findOne({})
//   .populate("visitedPlanets")
//   .exec(function (err, visitor) {
//     visitor.visitedPlanets.forEach((v) => console.log(v.name));
//   });

//Find all the visitors on a planet

// Planet.findOne({})
//   .populate("visitors")
//   .exec(function (err, planet) {
//     planet.visitors.forEach((v) => console.log(v.name));
//   });

// Find all the visitors in a system (subdocuments!)

SolarSystem.findOne({})
  .populate({
    path: "planets",
    populate: {
      path: "visitors",
    },
  })
  .exec(function (err, SolarSystem) {
    for (let planet of SolarSystem.planets) {
      planet.visitors.forEach((v) => console.log(v.name));
    }
  });
