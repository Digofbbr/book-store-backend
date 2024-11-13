const express = require("express");
const Book = require("./book.model");
const {
	postABook,
	getAllBooks,
	getBook,
	deleteBook,
	updateBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

// post a book
router.post("/create-book", verifyAdminToken, postABook);

// get all books
router.get("/", getAllBooks);

// get single book
router.get("/:id", getBook);

// update a book
router.put("/edit/:id", verifyAdminToken, updateBook);

// delete book
router.delete("/:id", verifyAdminToken, deleteBook);

module.exports = router;
