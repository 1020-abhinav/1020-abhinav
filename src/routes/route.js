const express = require('express');
const router = express.Router();
const commonMW = require ("../middlewares/commonMiddlewares")
const Controller= require("../controllers/controller")

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
