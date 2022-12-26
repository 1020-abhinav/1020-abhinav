const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema( {
    firstName : String,
    lastName : String,
    mobile : String,
    emailId : String,
    password :String,
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