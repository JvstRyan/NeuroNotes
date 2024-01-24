const expressAsyncHandler = require("express-async-handler");
const Folder = require("../models/folderModal");
const Note =  require('../models/NotesModal');
const ErrorHandler = require("../errors/error");

//CRUD = Create, Read, Update and Delete

const allNotes = expressAsyncHandler(async(req,res) => {
    const {folderId} = req.query
    const note = await Note.find({folder: folderId, userId: req.user._id})
    res.status(201).json({note})
})

const singleNote = expressAsyncHandler(async(req,res) => {
    const {id: noteID} = req.params
    const note = await Note.findOne({_id: noteID})

    if(!note) {
        throw new ErrorHandler(404, `No note with id: ${noteID}, could be found`)
    }
    res.status(201).json({note})

})

const createNote = expressAsyncHandler( async (req, res) => {
    const {title, description, content, folderId} = req.body
    const folder = await Folder.findById({...req.body, userId: req.user._id});

    if(!folder) {
        throw new ErrorHandler(404, `No folder found`)
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
        throw new ErrorHandler(404, `No note with id: ${noteID}, could be found`)
    }
    res.status(201).json({note})
})

const deleteNote = expressAsyncHandler(async(req, res) => {
   const {id: noteID} = req.params
   const note = await Note.findOneAndDelete({_id: noteID})
   
   if(!note) {
    throw new ErrorHandler(404, `No note with id: ${noteID}, could be found`)
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