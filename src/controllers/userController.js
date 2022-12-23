const User = require("../models/newUser")
const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

module.exports.createUser= createUser
