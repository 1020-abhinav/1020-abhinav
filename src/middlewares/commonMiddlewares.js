
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const middle = function( req, res, next){
    let condition = true
    if(condition == true)
    {
    const dataTime = new Date()
    var ip = req.socket.remoteAddress
    var path = req.url
    console.log(dataTime , ip , path)
    next()
}
    else{
        res.send({error:"Please Enter true condition"})
    }
}

module.exports= {mid1, mid2, mid3, mid4, middle}