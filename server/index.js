require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");
const path = require("path");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

//database connection
connection();

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("http://13.60.38.43:8080/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
