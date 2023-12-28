const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./database/connect')
const port = process.env.PORT || 5000
const userRoutes = require('./routes/taskRouter')
const goalRoutes = require('./routes/goalRouter')
const cors = require('cors');



connectDB()

const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/tasks', userRoutes)
app.use('/api/goals', goalRoutes)


app.get('/', (req, res) => {
    res.status(200).send('Server is running')
})

//get all tasks    .get
//get single task  .get
//create task      .post
//update task      .patch
//Delete task      .delete



app.listen(port, () => console.log(`Server has started on port ${port}`) )