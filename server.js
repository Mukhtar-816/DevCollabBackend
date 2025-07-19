const express = require("express");
require("dotenv").config();
const AuthRoutes = require("./routes/authRoutes.js");
const ConnectDatabase = require("./config/database.js");

//Constants
const PORT = process.env.PORT || 5000;
const development = process.env.NODE_ENV || "development";

//Creating Server
const app = express();

//Connecting Database
ConnectDatabase();

//MiddleWares
app.use(express.json());

//Routes
app.use("/user", AuthRoutes);

//Listening Server
app.listen(PORT, () => {
  console.log(`${development} Server Running on ${PORT}`);
});
