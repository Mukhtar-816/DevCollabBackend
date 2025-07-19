const { Router } = require("express");
const { Login } = require("../controllers/user");
const Route = Router();

Route.post("/login", Login);

module.exports = Route; 
