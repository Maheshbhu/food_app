const express = require("express");
const {protect}=require("../Middleware/authMiddleware.js")
const {createOrders,getUserOrders}=require("../Controllers/orderController.js")
const router = express.Router();


router.post("/",protect,createOrders)
router.get("/myorders",protect,getUserOrders);

module.exports = router;
