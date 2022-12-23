const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const OrderController= require("../controllers/orderPurchase")
const commonMW = require ("../middlewares/middleware")


router.post("/createUse", commonMW.middle, UserController.createUser )

router.post("/createOrder", commonMW.middle, OrderController.neworder )

router.post("/createProduct",ProductController.createProduct  )

router.get("/getOrderdata", OrderController.orderData)

module.exports = router;