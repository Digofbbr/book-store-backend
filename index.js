const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

// pass CA9SbMrSHkapvikB

// middleware
app.use(express.json());
app.use(
	cors({
		origin: [
			"https://book-store-frontend-two-zeta.vercel.app/",
			"http://localhost:5173",
		],
		credentials: true,
	})
);

// routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

async function main() {
	await mongoose.connect(process.env.DB_URL);

	app.get("/", (req, res) => {
		res.send("Hello World!");
	});
}

main()
	.then(console.log("MongoDB connected"))
	.catch((err) => console.log(err));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
