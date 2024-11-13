const express = require("express");
const Order = require("./order.model");
const { createAnOrder, getOrdersByEmail } = require("./order.controller");
const router = express.Router();

// post an order
router.post("/create-order", createAnOrder);

// get orders by user email
router.get("/email/:email", getOrdersByEmail);

// get single order
//router.get("/:id", getOrder);

// update an order
//router.put("/edit/:id", updateOrder);

// delete order
// router.delete("/:id", deleteOrder);

module.exports = router;
