const { Router } = require("express");
const Route = Router();

Route.get("/login", (req, res) => {
    res.send("hello");
});

module.exports = Route; 
