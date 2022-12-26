const Order = require("../models/newOrder")
const Product = require("../models/newProduct")
const User = require("../models/newUser")
const neworder = async function(req,res){
    let data = req.body
    if(	data.productId == undefined){
        res.send({error:"Please Enter the ProductId"})
    }
    if(data.userId == undefined){
        res.send({error:"Please Enter the UserId"})
    }
    let product = await Product.findById(data.productId)
    let user = await User.findById(data.userId)
    if(product == undefined){
        res.send({error:"Please Enter the correct ProductId"})
    }
    if(user == undefined){
        res.send({error:"Please Enter the correct UserId"})
    }

    if(req.headers.isfreeappuser =="true"){
        data.isFreeAppUser = true
        data.amount = 0
        let setData = await Order.create(data)
        res.send({msg:setData})
        return -1
    }

    if(req.headers.isfreeappuser =="false"){
        data.isFreeAppUser = false
        data.amount = product.price
        let setData = await Order.create(data)
        res.send({msg:setData})
        return -1
    }

}
const orderData  =  async function(req,res){
    let data = await Order.find().populate(["productId","userId"])
    res.send(data)
}
module.exports.neworder = neworder

module.exports.orderData = orderData