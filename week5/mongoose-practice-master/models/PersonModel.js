const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PersonModel=new Schema({
    hair:String,
    eyes: String,
    weight: Number,
    height: Number,
    salary: Number,
    numKids: Number,
    kids: []
})

const Person = mongoose.model("Book",PersonModel)

module.exports =Person