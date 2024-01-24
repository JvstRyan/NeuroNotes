const expressAsyncHandler = require("express-async-handler");
const Goal = require('../models/goalModal')
const ErrorHandler = require("../errors/error");

const getAllGoals = expressAsyncHandler( async(req, res) => {
    const goal = await Goal.find({ userId: req.user._id })
    res.status(201).json({goal})
})

const getSingleGoal = expressAsyncHandler(async (req, res) => {
    const {id: goalID} = req.params
    const goal = await Goal.findOne({_id: goalID})
    if (!goal) {
        throw new ErrorHandler(404, `No goal with id: ${goalID}, could be found`)
    }
    res.status(201).json({goal})
})

const createGoal = expressAsyncHandler(async (req, res) => {
   const goal = await Goal.create({...req.body, userId: req.user._id})
   res.status(201).json({goal})
})

const updateGoal = expressAsyncHandler(async (req, res) => {
    const {id: goalID} = req.params
    const goal = await Goal.findOneAndUpdate({_id: goalID}, req.body, {
    new:true, runValidators:true
    })

    if (!goal) {
        throw new ErrorHandler(404, `No goal with id: ${goalID}, could be found`)
    }
    res.status(201).json({goal})
})

const deleteGoal = expressAsyncHandler(async (req, res) => {
    const {id: goalID} = req.params
    const goal = await Goal.findOneAndDelete({_id: goalID})
    if(!goal) {
        throw new ErrorHandler(404, `No goal with id: ${goalID}, could be found`)
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