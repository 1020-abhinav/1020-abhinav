const express = require('express');
const router = express.Router();

const Controller = require("../controllers/Contoller")

const Middleware = require("../Middleware/middleware")



router.post("/user", Controller.createData )

router.post("/logIn",Middleware.middle,Controller.Userlogin  )


router.get("/users/:userId",Middleware.middle,Controller.getUserData)

router.get("/users/:userId",Middleware.middle,Controller.getUpData)

router.get("/user/:userId",Middleware.middle,Controller.getDeleted)

module.exports = router