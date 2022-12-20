const card= require("../collection/card")
const customer= require("../collection/customer")

const getAllData = async function(req,res){
    let data = await customer.find({$and:[{status:{$eq:"ACTIVE"}},{isDeleted:false}]})
    res.send(data)
}

const deleteData = async function(req,res){
    let id = req.body.customerid
    let data1 = await customer.findOneAndUpdate({custumerID:{$eq:id}},{$set:{isDeleted:true}})
    res.send(data1)
}

const createCustomer = async function(req,res){
    let data = req.body
    if(data.mobileNumber.length != 10){
        res.send("Invalid Mobile Number")
        return -1
    }
    let data1 = await customer.create(data)
    res.send(data1)
}

//.............................................................................

const getCardData = async function(req,res){
    let data = await card.find()
    res.send(data)
}

const createCard = async function(req,res){
    let data = req.body
    let number = await card.find().count() 
    if(data.cardNumber == undefined){
        data.cardNumber = "C00" + number // C
    }
    let data1 = await card.create(data)
    res.send(data1)
}
module.exports={getAllData , deleteData , createCustomer , getCardData , createCard}