const express = require("express");
const router = express.Router();
const {
  createNote,
  allNotes
} = require("../controllers/note");

router.route("/").get(allNotes).post(createNote);
// router.route("/:id").get(findSingleNote).patch(updateNote).delete(deleteNote);

module.exports = router;
