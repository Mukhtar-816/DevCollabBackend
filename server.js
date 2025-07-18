const express = require("express");
require("dotenv").config();

const AuthRoutes = require("./routes/authRoutes.js");

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/user", AuthRoutes); 

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
