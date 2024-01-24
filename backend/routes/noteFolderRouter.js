const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { getAllFolders,
    findSingleFolder,
    createFolder,
    updateFolder,
    deleteFolder } = require('../controllers/folder')

router.use(auth)

router.route('/').get(getAllFolders).post(createFolder)
router.route('/:id').get(findSingleFolder).patch(updateFolder).delete(deleteFolder)


module.exports = router