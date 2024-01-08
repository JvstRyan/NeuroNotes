const express = require("express");
const router = express.Router();
const {
  createNote,
  allNotes,
  updateNote,
  deleteNote,
  singleNote
} = require("../controllers/note");

router.route("/").get(allNotes).post(createNote);
router.route("/:id").get(singleNote).patch(updateNote).delete(deleteNote)

module.exports = router;
