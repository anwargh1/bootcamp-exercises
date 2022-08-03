const express = require("express");
const router = express.Router();

const Person = require("../models/Person");

router.get("/people", function (req, res) {
  Person.find({}, function (err, people) {
    res.send(people);
  });
});

//ex1
router.post("/person", function (req, res) {
  console.log(req.body);
  let person = req.body;
  let p = new Person({
    firstName: person.firstName,
    lastName: person.lastName,
    age: person.age,
  });
  p.save();
  res.send("ok");
  p.end();
});

//ex2
router.put("/person/:id", function (req, res) {
  let id = req.params.id;
  Person.findByIdAndUpdate(id, { age: 80 }, function (err, person) {
    res.end();
  });
});

//ex3
router.delete("/apocalypse", function (req, res) {
  Person.find({}, function (err, person) {
    person.forEach((p) => {
      p.remove();
    });
  });
  res.end();
});

module.exports = router;
