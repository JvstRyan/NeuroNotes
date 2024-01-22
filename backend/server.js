const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./database/connect");
const port = process.env.PORT || 5000;
const taskRoutes = require("./routes/taskRouter");
const goalRoutes = require("./routes/goalRouter");
const folderRoutes = require("./routes/noteFolderRouter");
const noteRoutes = require("./routes/noteRouter");
const quoteRoutes = require("./routes/quoteRouter");
const bookRoutes = require("./routes/bookRouter");
const userRoutes = require('./routes/userRouter')
const cors = require("cors");
const handleError = require("./middleware/errorHandler");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/tasks", taskRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/folders", folderRoutes);
app.use("/api/quotes", quoteRoutes);
app.use("/api/books", bookRoutes);
app.use('/api/users', userRoutes)

app.use(handleError)

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});


app.listen(port, () => console.log(`Server has started on port ${port}`));
