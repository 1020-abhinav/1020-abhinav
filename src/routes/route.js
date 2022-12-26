const express = require('express');
const router = express.Router();
//const userController= require("../controllers/userController")
const Controller = require("../controllers/Contoller")

const Middleware = require("../Middleware/middleware")

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

router.post("/user", Controller.createData )

router.post("/logIn",Middleware.middle,Controller.Userlogin  )

// router.post("/users", Controller.createUser  )

router.get("/users/:userId",Middleware.middle,Controller.getUserData)

router.get("/users/:userId",Middleware.middle,Controller.getUpData)

router.get("/user/:userId",Middleware.middle,Controller.getDeleted)

module.exports = router