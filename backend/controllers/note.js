const expressAsyncHandler = require("express-async-handler");
const Folder = require("../models/FolderModal");
const Note =  require('../models/NotesModal')

//CRUD = Create, Read, Update and Delete

const allNotes = expressAsyncHandler(async(req,res) => {
    const {folderId} = req.query
    const note = await Note.find({folder: folderId})
    res.status(201).json({note})
})

const singleNote = expressAsyncHandler(async(req,res) => {
    const {id: noteID} = req.params
    const note = await Note.findOne({_id: noteID})

    if(!note) {
        res.status(500).json({msg: `Note id has not been found`})
    }
    res.status(201).json({note})

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

const updateNote = expressAsyncHandler(async(req, res) => {
    const {id: noteID} = req.params
    const note = await Note.findOneAndUpdate({_id: noteID}, req.body, {
    new:true, runValidators:true
    })

    if(!note) {
        res.status(500).json({msg: `Note id has not been found`})
    }
    res.status(201).json({note})
})

const deleteNote = expressAsyncHandler(async(req, res) => {
   const {id: noteID} = req.params
   const note = await Note.findOneAndDelete({_id: noteID})
   
   if(!note) {
    res.status(500).json({msg: `Note id has not been found`})
   }
   res.status(201).json({note})
})

module.exports = {
   
    createNote,
    allNotes,
    updateNote,
    deleteNote,
    singleNote
};