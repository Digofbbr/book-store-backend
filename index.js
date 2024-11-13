const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

// pass CA9SbMrSHkapvikB

// middleware
app.use(express.json());

/* app.use(
	cors({
		origin: ["https://book-store-frontend-two-zeta.vercel.app"],
		credentials: true,
	})
); */

// CORS Configuration (Tailored to Your Requirements)
const allowedOrigins = [
	"https://book-store-frontend-two-zeta.vercel.app",
	"http://localhost:5173", // Remove if not needed for development
];

const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || allowedOrigins.indexOf(origin) !== -1) {
			callback(null, true); // Allow requests from allowed origins
		} else {
			callback(new Error("Origin not allowed by CORS")); // Block unauthorized requests
		}
	},
	credentials: true, // Enable cookies for cross-origin requests (if applicable)
	optionsSuccessStatus: 200, // Send a 200 response on preflight OPTIONS requests
};

app.use(cors(corsOptions)); // Apply CORS middleware for all routes

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
