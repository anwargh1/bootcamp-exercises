const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookModel = new Schema({
    title : String ,
    author :String ,
    pages : Number , 
    genres :[String] ,
    rating : Number
})

const Book = mongoose.model("Book",BookModel)
module.exports=Book