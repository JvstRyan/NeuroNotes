const expressAsyncHandler = require("express-async-handler");
const Folder = require("../models/FolderModal");
const Note =  require('../models/NotesModal')


//CRUD = Create, Read, Update and Delete
//Get all Folders

const getAllNotes = expressAsyncHandler((req, res) => {
    res.status(200).send('All folders have been found')
})


//Find Folder

const findSingleNote = expressAsyncHandler((req, res) => {
    res.status(200).send('The folder you were looking for has been found')
})

//Create Folder
const createNote = expressAsyncHandler((req, res) => {
    res.status(200).send('A new folder has been created')
})

//Update Folder
const updateNote = expressAsyncHandler((req, res) => {
    res.status(200).send('Your folder has been updated')
})

//Delete Folder
const deleteNote = expressAsyncHandler((req, res) => {
    res.status(200).send('The folder has been deleted')
})

module.exports = {
  getAllNotes,
  findSingleNote,
  createNote,
  updateNote,
  deleteNote
}