const jwt = require("jsonwebtoken");
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

const middle2 = async function(req,res,next){
    let token = req.headers["x-auth-token"]
    let decode = await jwt.verify(token,"abhinav-secret-key",(err,decode)=>{
    if (err)
    return res.send({ status: false, msg: "token is invalid" });
    return decode
    })

    let loginID = decode.userId
    let UserId = req.params.userId
    if(loginID != UserId) return res.send({status:false,msg:"Please Enter the valid UserId"})
   next()
}

// const middle3 = async function(req,res,next){
//     let token = req.headers["x-auth-token"]
//     let decode = await jwt.verify(token,"abhinav-secret-key")
//     let loginID = decode.userId
//     let UserId = req.params.userId
//     if(loginID != UserId) return res.send({status:false,msg:"Please Enter the valid UserId"})
//     next()
// }
module.exports.middle=middle

module.exports.middle2=middle2

// module.exports.middle3=middle3