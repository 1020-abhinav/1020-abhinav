const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const Usercontroller= require("../controllers/usercontroller")
// const Bookcontroller= require("../controllers/bookcontroller")
const commonMW = require ("../middlewares/commonMiddlewares")
const Controller= require("../controllers/controller")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })




// router.post("/createBook", Bookcontroller.createBook  )




// router.post("/createUser", Usercontroller.createUser  )
// router.get("/getUsersData", Usercontroller.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, Usercontroller.feeds)
// router.get('/profileDetails', mid1, Usercontroller.profileDetails)
// router.get('/friendList', mid1, Usercontroller.friendList)
// router.get('/changePassword', mid1, Usercontroller.changePassword)

// router.get('/termsAndConditions',  Usercontroller.termsAndConditions)
// router.get('/register',  Usercontroller.register)


router.get('/Request1', commonMW.middle,Controller.control)
router.get('/Request2', commonMW.middle,Controller.contro2)
router.get('/Request3', commonMW.middle,Controller.contro3)
router.get('/Request4', commonMW.middle,Controller.contro4)
router.get('/Request5', commonMW.middle,Controller.contro5)





 //router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, Usercontroller.basicCode)



// router.get("/basicRoute2", commonMW.mid1, Usercontroller.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, Usercontroller.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, Usercontroller.basicCode4)



module.exports = router;