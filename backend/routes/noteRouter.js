const express = require('express')
const router = express.Router()
const {
    getAllNotes,
    findSingleNote,
    createNote,
    updateNote,
    deleteNote
} = require('../controllers/note')

router.route('/').get(getAllNotes).post(createNote)
router.route('/:id').get(findSingleNote).patch(updateNote).delete(deleteNote)


module.exports = router