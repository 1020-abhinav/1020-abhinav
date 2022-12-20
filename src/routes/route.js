const express = require('express');
const router = express.Router();
const customerCard = require("../controllers/PROBLEM")

//-------------------------------------------------------------------------------------------------------------

router.get("/getCustomerData",customerCard.getAllData)

router.post("/deleteData",customerCard.deleteData)

router.post("/createCustomerData",customerCard.createCustomer)


//.........................................................................................................
router.get("/getCardData",customerCard.getCardData)

router.post("/createCardData",customerCard.createCard)


module.exports = router;