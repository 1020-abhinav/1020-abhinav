const newBook= require("../models/newBook")
const newPublisher = require("../models/newPublisher")
const newAuthor= require("../models/newAuthor")

const createBook= async function (req, res) {
    let book = req.body
    if(book.author_id == undefined){
        res.send({error : "Author_ID detail is required"})
        return -1
    }
    if( book.publisher == undefined){
        res.send("Publisher detail is required")
        return -1
    }
    const author = await newAuthor.findById(book.author_id)
    const publis = await newPublisher.findById(book.publisher)
    if(author == undefined){
        res.send(" Author_id is not present.")
        return -1
    }
    if(publis == undefined){
        res.send(" Publisher is not present.")
        return -1
    }
    let bookCreated = await newBook.create(book)
    res.send(bookCreated)
}

const getBookData = async function(req,res){
    let data = await newBook.find().populate(["author_id","publisher"])
    res.send(data)
}

const updateData = async function(req,res){
    var data = await newBook.find().populate(["author_id","publisher"])
    var book1=[]
    var book2=[]
    data.forEach(ele =>{
        let a = ele.publisher
        let author = ele.author_id
        let name = a.name //ele.publisher.name
        let rate = author.rating
        if(name ==  'Penguin'|| name == 'HarperCollins'){
            book1.push(ele.name)
        }
        if(rate > 3.5){
            book2.push(ele.name)
        }
    })
    let update1 = await newBook.updateMany({name:{$in:book1}},{$set:{isHardcover:true}})
    let update2 = await newBook.updateMany({name:{$in:book2}},{$inc:{price:10}})
    let updateData = await newBook.find()
    res.send(updateData)
}

//...................................................................................................
const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthor.create(author)
    res.send({data: authorCreated})
}
//.................................................................
const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await newPublisher.create(publisher)
    res.send({data: publisherCreated})
}


module.exports.createPublisher= createPublisher

module.exports.createAuthor= createAuthor

module.exports.createBook= createBook

module.exports.getBookData=getBookData

module.exports.updateData=updateData

