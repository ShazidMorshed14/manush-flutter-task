const express = require("express");
const router = express.Router();

//importing the controllers
const authControllers = require("../controller/auth");

router.post("/signin", authControllers.signin);

module.exports = router;
