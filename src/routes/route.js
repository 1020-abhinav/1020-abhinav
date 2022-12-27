const express = require('express');
const router = express.Router();

const Controller = require("../controllers/Contoller")

const Middleware = require("../Middleware/middleware")



router.post("/user", Controller.createData )

router.post("/logIn",Controller.Userlogin  )


router.get("/users/:userId",Middleware.middle,Middleware.middle2,Controller.getUserData)

router.get("/useres/:userId",Middleware.middle,Middleware.middle2,Controller.getUpData)

router.get("/user/:userId",Middleware.middle,Middleware.middle2,Controller.getDeleted)

module.exports = router