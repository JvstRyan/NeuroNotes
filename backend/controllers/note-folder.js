const expressAsyncHandler = require("express-async-handler");
const Folder = require("../models/FolderModal");


//CRUD = Create, Read, Update and Delete
//Get all Folders

const getAllFolders = expressAsyncHandler((req, res) => {
    res.status(200).send('All folders have been found')
})


//Find Folder

const findSingleFolder = expressAsyncHandler((req, res) => {
    res.status(200).send('The folder you were looking for has been found')
})

//Create Folder
const createFolder = expressAsyncHandler((req, res) => {
    res.status(200).send('A new folder has been created')
})

//Update Folder
const updateFolder = expressAsyncHandler((req, res) => {
    res.status(200).send('Your folder has been updated')
})

//Delete Folder
const deleteFolder = expressAsyncHandler((req, res) => {
    res.status(200).send('The folder has been deleted')
})

module.exports = {
    getAllFolders,
    findSingleFolder,
    createFolder,
    updateFolder,
    deleteFolder
}