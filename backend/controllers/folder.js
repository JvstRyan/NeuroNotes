const expressAsyncHandler = require("express-async-handler");
const ErrorHandler = require("../errors/error");
const Folder = require("../models/folderModal");

//CRUD = Create, Read, Update and Delete
//Get all Folders

const getAllFolders = expressAsyncHandler(async (req, res) => {
  const folders = await Folder.find({ userId: req.user._id });
  res.status(201).json({ folders });
});

//Find Folder

const findSingleFolder = expressAsyncHandler(async (req, res) => {
  const { id: folderID } = req.params;
  const folder = await Folder.findOne({ _id: folderID });
  if (!folder) {
    throw new ErrorHandler(404, `No folder could be found`);
  }
  res.status(201).json({ folder });
});

//Create Folder
const createFolder = expressAsyncHandler(async (req, res) => {
  const folder = await Folder.create({...req.body, userId: req.user._id});
  res.status(201).json({ folder });
});

//Update Folder
const updateFolder = expressAsyncHandler(async (req, res) => {
  const { id: folderID } = req.params;
  const folder = await Folder.findOneAndUpdate({ _id: folderID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!folder) {
    throw new ErrorHandler(404, `No folder could be found`);
  }
  res.status(201).json({ folder });
});

//Delete Folder
const deleteFolder = expressAsyncHandler(async (req, res) => {
  const { id: folderID } = req.params;
  const folder = await Folder.findOneAndDelete({ _id: folderID });
  if (!folder) {
    throw new ErrorHandler(404, `No folder could be found`);
  }
  res.status(201).json({ folder });
});

module.exports = {
  getAllFolders,
  findSingleFolder,
  createFolder,
  updateFolder,
  deleteFolder,
};
