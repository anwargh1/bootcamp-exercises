let meal = JSON.parse(JSON.stringify(require("./name.json")));

meal.ingredients.push({ name: "bashar", count: 2, unit: "teaspoons" });
meal.healthy = false;
meal.calories = 3000;
meal.directions = [
  "Cut potatoes into half inch thick slices",
  ...meal.directions,
];

console.log(meal.ingredients.filter((i) => i.name == "bashar")[0].count); //should print 2
console.log(meal.healthy); //should print true
console.log(meal.calories); //should print 250
console.log(meal.directions);
