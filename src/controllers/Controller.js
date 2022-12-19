const author= require("../scema/author")
const books= require("../scema/book")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await author.create(data)
    res.send({msg: savedData})
}

const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await books.create(data)
    res.send({msg: savedData})
}

const bookList = async function(req,res){
    let auid = await author.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    let a = auid.author_id
    let data = await books.find({author_id:{$eq:a}})
    res.send(data)
}

const findAndUpdate = async function(req,res){
    let data = await books.findOneAndUpdate({ name:"Two states"},{$set:{price:100}})
    let data2 = await author.findOne({author_id:data.author_id})
    let result = [data2.author_name , data.price]
    res.send(result)
}

const  costBetween = async function(req,res){
    let data = await books.find({price:{$gt:50 , $lt:100}})
    let data2 = await author.find()
    let data1 = []
    data.forEach(async function(ele){
        let id = ele.author_id
        data2.forEach(a => {
            if(a.author_id == id){
                data1.push(a.author_name)
            }
        })
    })
    res.send(data1)
}
module.exports={createAuthor , createBooks , bookList , findAndUpdate , costBetween}