const expressAsyncHandler = require("express-async-handler");
const Folder = require("../models/FolderModal");
const Note =  require('../models/NotesModal')

//CRUD = Create, Read, Update and Delete

const allNotes = expressAsyncHandler(async(req,res) => {
    const note = await Note.find({})
    res.status(201).json({note})
})

const singleNote = expressAsyncHandler(async(req,res) => {
    res.status(200).send('single note')
})

const createNote = expressAsyncHandler( async (req, res) => {
    const {title, description, content, folderId} = req.body
    const folder = await Folder.findById(folderId);

    if(!folder) {
        res.status(500).json({msg: 'There was no folder found'})
    }

    const note = new Note({title, description, content, folder: folderId})
    const createdNote = await note.save()
    res.status(201).json({createdNote})
})

const updateNote = expressAsyncHandler((req, res) => {
    res.status(200).send('Your folder has been updated')
})

const deleteNote = expressAsyncHandler((req, res) => {
    res.status(200).send('The folder has been deleted')
})

module.exports = {
   
    createNote,
    allNotes
};