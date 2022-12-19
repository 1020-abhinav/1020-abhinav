const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id:{
        type:String,
        unique:true,
        require:true
    },
    author_name:{
        type:String,
        require:true
    },
    age:Number,
    address:String

}, { timestamps: true });


module.exports = mongoose.model('Author-Data', authorSchema)
