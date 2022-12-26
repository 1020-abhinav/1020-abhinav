const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
	name:String,
	category:String,
	price:{
        type:Number,
        require:true 
    } //mandatory property
})

module.exports = mongoose.model('newProduct', productSchema)