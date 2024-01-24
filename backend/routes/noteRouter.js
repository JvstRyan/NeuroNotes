const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')
const {
  createNote,
  allNotes,
  updateNote,
  deleteNote,
  singleNote
} = require("../controllers/note");

router.use(auth)

router.route("/").get(allNotes).post(createNote);
router.route("/:id").get(singleNote).patch(updateNote).delete(deleteNote)

module.exports = router;
