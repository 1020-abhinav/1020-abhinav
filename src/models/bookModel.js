const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        unique: true,
        required: true
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{
        type:Number,
        default:2021
    }, 
    tags: {
        type:String,
        enum:["Romance","Sci-Fi","Horror","Development","Motivational","Adventure"]
    },
    authorName: String, 
    totalPages:Number,
    isPublished: Boolean,
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book-Collection', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
