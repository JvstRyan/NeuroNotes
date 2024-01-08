const express = require('express')
const router = express.Router()
const { getAllFolders,
    findSingleFolder,
    createFolder,
    updateFolder,
    deleteFolder } = require('../controllers/folder')

router.route('/').get(getAllFolders).post(createFolder)
router.route('/:id').get(findSingleFolder).patch(updateFolder).delete(deleteFolder)


module.exports = router