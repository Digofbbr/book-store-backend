const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: String,
		category: String,
		trending: Boolean,
		coverImage: String,
		oldPrice: Number,
		newPrice: Number,
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
