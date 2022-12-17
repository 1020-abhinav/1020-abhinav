const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let listall = await BookModel.find().select({bookName:1, authorName:1,_id:0})
    res.send({msg:listall })
}

const getBooksInYear= async function (req, res) {
    let yearBook = await BookModel.find({year:{$eq:req.params.year}})
    res.send({msg:yearBook})
}

const getParticularBooks= async function (req, res) {
    let books = await BookModel.find({$or:[{authorName:{$eq:req.body.authorName}},{bookName:{$eq:req.body.bookName}},{year:{$eq:req.body.year}}]})
    res.send({msg:books})
}

const getXINRBooks= async function (req, res) {
    let INRbooks = await BookModel.find({'prices.indianPrice':{$in:["100 INR","200 INR","500 INR"]}})
    res.send({msg: INRbooks})
}

const getRandomBooks= async function (req, res) {
    let random = await BookModel.find({$or:[{ stockAvailable:{$eq:true}},{totalPages:{$gt:500}}]}).count()
    res.send({msg: random})
}

module.exports={createBook,bookList,getBooksInYear,getParticularBooks,getXINRBooks,getRandomBooks}
