const expressAsyncHandler = require("express-async-handler");
const Task = require('../models/taskModal')

const getAllTasks = expressAsyncHandler(async (req, res) => {
 const tasks = await Task.find({})
 res.status(201).json({ tasks })
});

const getSingleTask = expressAsyncHandler(async (req, res) => {
  const {id: taskID} = req.params
  const task = await Task.findOne({_id: taskID})
  if(!task) {
    return res.status(500).json({succes: false, msg: `No task with id ${taskID} was found`})
  }
  res.status(201).json({task})
});

const createTask = expressAsyncHandler(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
});

const updateTask = expressAsyncHandler(async (req, res) => {
  const {id: taskID} = req.params
  const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
    new:true, runValidators:true
  })

  if(!task) {
    return res.status(500).json({succes: false, msg: `No task with id ${taskID} was found`})
  }
  res.status(200).json({task})
});

const deleteTask = expressAsyncHandler(async (req, res) => {
  const {id: taskID} = req.params
  const task = await Task.findOneAndDelete({_id: taskID})
  if(!task) {
    return res.status(500).json({succes: false, msg: `No task with id ${taskID} was found`})
  }
  res.status(200).json({ task })
});

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
