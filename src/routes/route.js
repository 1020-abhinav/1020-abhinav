const express = require('express');
const router = express.Router();
const commonMW = require ("../middlewares/commonMiddlewares")
const Controller= require("../controllers/controller")

router.get('/Request1', commonMW.middle,Controller.control)
router.get('/Request2', commonMW.middle,Controller.contro2)
router.get('/Request3', commonMW.middle,Controller.contro3)
router.get('/Request4', commonMW.middle,Controller.contro4)
router.get('/Request5', commonMW.middle,Controller.contro5)

module.exports = router;
