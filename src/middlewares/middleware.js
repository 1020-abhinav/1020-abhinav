const middle = function(req,res,next){
   let data = 'isfreeappuser' in req.headers
   console.log(req.headers)
   if(data == true){
    next()
   }
   else{
    res.send({error:"the request is missing a mandatory header"})
   }
}

module.exports.middle=middle