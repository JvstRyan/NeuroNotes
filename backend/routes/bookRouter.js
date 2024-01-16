const express = require('express')
const router = express.Router();

const {
  getAllBooks,
  getReadingBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

router.route("/").get(getAllBooks).post(createBook)
router.route('/:id').patch(updateBook).delete(deleteBook)

module.exports = router