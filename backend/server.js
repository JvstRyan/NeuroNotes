const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./database/connect')
const port = process.env.PORT || 5000
const userRoutes = require('./routes/taskRouter')
const goalRoutes = require('./routes/goalRouter')
const folderRoutes =  require('./routes/noteFolderRouter')
const noteRoutes = require('./routes/noteRouter')
const quoteRoutes = require('./routes/quoteRouter')
const cors = require('cors');



connectDB()

const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/tasks', userRoutes)
app.use('/api/goals', goalRoutes)
app.use('/api/notes', noteRoutes)
app.use('/api/folders', folderRoutes)
app.use('/api/quotes', quoteRoutes)



app.get('/', (req, res) => {
    res.status(200).send('Server is running')
})

//get all tasks    .get
//get single task  .get
//create task      .post
//update task      .patch
//Delete task      .delete



app.listen(port, () => console.log(`Server has started on port ${port}`) )