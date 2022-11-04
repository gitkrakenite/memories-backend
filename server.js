const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const postRoutes = require("./routes/posts");

// initialize our app
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/api/v1/posts", postRoutes);

// App listening
app.listen(PORT, () => console.log(`Server runnin on port ${PORT}`));
