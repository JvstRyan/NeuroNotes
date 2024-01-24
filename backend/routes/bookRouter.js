const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')

const {
  getAllBooks,
  getReadingBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

router.use(auth)

router.route("/").get(getAllBooks).post(createBook)
router.route('/:id').patch(updateBook).delete(deleteBook)

module.exports = router