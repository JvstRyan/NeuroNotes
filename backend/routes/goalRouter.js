const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const {
    getAllGoals,
    getSingleGoal,
    createGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goals')

router.use(auth)

router.route('/').get(getAllGoals).post(createGoal)
router.route('/:id').get(getSingleGoal).patch(updateGoal).delete(deleteGoal)



module.exports = router