const jwt = require("jsonwebtoken");
const userModel = require("../models/newUSER");

const createData = async function(req,res){
    let data = req.body
    let setData = await userModel.create(data)
    res.send({msg:setData})
}

const Userlogin = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      })
    let token = jwt.sign({
          userId: user._id.toString(),
          batch: "thorium",
          organisation: "FunctionUp",
        },
        "abhinav-secret-key"
      );
      res.setHeader("x-auth-token", token);
      res.send({ status: true, token: token });
}


const getUserData = async function(req,res){
        let value = req.headers["x-auth-token"]
        if(!value)return res.send({error:"Token is not present"})
        let getData = await userModel.findOne({_id:req.params.userId})
        res.send({msg:getData})
    }

const getUpData = async function(req,res){
        let getData = await userModel.findOneAndUpdate({_id:req.params.userId},{$set:req.body})
        res.send({msg:getData})
    }    

const getDeleted = async function(req,res){
    let getdelet = await userModel.findOneAndUpdate({_id:req.params.userId},{$set:{'isDeleted':false}},{new:true})
    res.send({status:true,msg:getdelet})
}    
module.exports.createData = createData;

module.exports.Userlogin = Userlogin;

module.exports.getUserData = getUserData

module.exports.getUpData = getUpData

module.exports.getDeleted = getDeleted