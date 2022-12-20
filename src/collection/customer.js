const mongoose = require('mongoose');
require('mongoose-type-email');

const customerSchema = new mongoose.Schema( {
    firstName:String,
    lastName:String,
    mobileNumber:{
        type: String,
    },
    DOB: Date,
    emailID:{type:mongoose.SchemaTypes.Email},
    address:String,
    customerID:{
        type:String,
        unique: true,
        required: true
    },
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"]
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });


module.exports = mongoose.model('customer', customerSchema)