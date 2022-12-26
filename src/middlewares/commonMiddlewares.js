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

module.exports.middle=middle
