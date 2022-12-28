const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema( {
    firstName : String,
    lastName : String,
    mobile : String,
    emailId : {
        type:String,
        require:true
    },
    password :{
        type:String,
        unique:true,
        require:true
    },
    gender : {
        type:String,
        enum:["male","female","other"]
    },
	isDeleted: {
        type:Boolean,
        default:false
    }, //default value is false 
    age :Number,
}, { timestamps: true });

module.exports = mongoose.model('User-new', UserSchema)