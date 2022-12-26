const Product  = require('../models/newProduct')

const product = async function(req,res){
    let data = req.body
    let setData = await Product.create(data)
    res.send({msg:setData})
}

module.export.product = product