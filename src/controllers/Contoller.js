const jwt = require("jsonwebtoken");
const userModel = require("../models/newUSER");

const createData = async function(req,res){
    // let data = req.body
    // let setData = await userModel.create(data)
    // res.send({msg:setData})
    try {
      let data = req.body
      //console.log(data)
      if ( Object.keys(data).length != 0) {
          let savedData = await userModel.create(data)
          res.status(201).send({ msg: savedData })
      }
      else res.status(400).send({ msg: "BAD REQUEST"})
  }
  catch (err) {
      console.log("This is the error :", err.message)
      res.status(500).send({ msg: "Error", error: err.message })
  }
}


const Userlogin = async function (req, res) {
    try{let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    // if (!user)
    //   return res.status(400).send({
    //     status: false,
    //     msg: "username or the password is not corerct",
    //   })
    let token = jwt.sign({
          userId: user._id.toString(),
          batch: "thorium",
          organisation: "FunctionUp",
        },
        "abhinav-secret-key"
      );
      res.setHeader("x-auth-token", token);
      res.status(200).send({ status: true, token: token });
    }catch(error){
      console.log("This is the error :", error.message)
      res.status(500).send({ msg: "Error", error: error.message })
    }

}


const getUserData = async function(req,res){
        let getData = await userModel.findOne({_id:req.params.userId},{isDeleted:false})
        res.status(200).send({msg:getData})
    }

const getUpData = async function(req,res){
        try{
          let getData = await userModel.findOneAndUpdate({_id:req.params.userId},{$set:req.body})
        res.status(200).send({msg:getData})
      }
      catch(error){
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
      }
    }    

const getDeleted = async function(req,res){
    let getdelet = await userModel.findOneAndUpdate({_id:req.params.userId},{$set:{'isDeleted':true}},{new:true})
    res.send({status:true,msg:getdelet})
}    

module.exports.createData = createData;

module.exports.Userlogin = Userlogin;

module.exports.getUserData = getUserData

module.exports.getUpData = getUpData

module.exports.getDeleted = getDeleted