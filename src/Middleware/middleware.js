const middle = function(req,res,next){
    let value = 'x-auth-token' in req.headers
    console.log(req.headers)
    if(value == true){
        next()
    }
    else{
        res.send({error:"Important key not present in headers"})
    }
}


module.exports.middle=middle