const expressAsyncHandler = require("express-async-handler");
const Goal = require('../models/goalModal')

const getAllGoals = expressAsyncHandler( async(req, res) => {
    const goal = await Goal.find({})
    res.status(201).json({goal})
})

const getSingleGoal = expressAsyncHandler(async (req, res) => {
    const {id: goalID} = req.params
    const goal = await Goal.findOne({_id: goalID})
    if (!goal) {
        res.status(500).json({msg: `There is no goal with id: ${goalID}`})
    }
    res.status(201).json({goal})
})

const createGoal = expressAsyncHandler(async (req, res) => {
   const goal = await Goal.create(req.body)
   res.status(201).json({goal})
})

const updateGoal = expressAsyncHandler(async (req, res) => {
    const {id: goalID} = req.params
    const goal = await Goal.findOneAndUpdate({_id: goalID}, req.body, {
    new:true, runValidators:true
    })

    if (!goal) {
        res.status(500).json({msg: `There is no goal with id: ${goalID}`})
    }
    res.status(201).json({goal})
})

const deleteGoal = expressAsyncHandler(async (req, res) => {
    const {id: goalID} = req.params
    const goal = await Goal.findOneAndDelete({_id: goalID})
    if(!goal) {
        res.status(500).json({msg: `There is no goal with id: ${goalID}`})
    }
    res.status(201).json({goal})
})

module.exports = {
    getAllGoals,
    getSingleGoal,
    createGoal,
    updateGoal,
    deleteGoal
}