const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema( {
    cardNumber: String,
    cardType:{
        type:String,
        emp:["REGULAR","SPECIAL"]
    },
    customerName:String,
    status:{
        type:String,
        emp:["ACTIVE","INACTIVE"],
        default:"ACTIVE"
    },
    vision:String,
    customerID:{
        type:String,
        required: true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });


module.exports = mongoose.model('card', cardSchema)