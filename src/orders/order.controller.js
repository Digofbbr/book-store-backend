const Book = require("../books/book.model");
const Order = require("./order.model");

const getOrdersByEmail = async (req, res) => {
	try {
		const { email } = req.params;
		const orders = await Order.find({ email: email }).sort({ createdAt: -1 });
		if (!orders) {
			return res.status(404).json({ message: "Orders not found" });
		}
		res.status(200).json(orders);
	} catch (error) {
		console.error("Error fetching orders", error);
		res.status(500).send({
			message: "Failed to fetch orders!",
		});
	}
};

const createAnOrder = async (req, res) => {
	try {
		const newOrder = await Order(req.body);
		const savedOrder = await newOrder.save();
		res.status(200).json(savedOrder);
	} catch (error) {
		console.error("Error creating order", error);
		res.status(500).send({
			message: "Failed to create order!",
		});
	}
};

module.exports = {
	createAnOrder,
	getOrdersByEmail,
};
