const express = require("express");
const { isAuth } = require("../middlewares/auth");
const router = express.Router();

//importing the controllers
const productControllers = require("../controller/products");

router.get("/", isAuth, productControllers.getAllProduct);

module.exports = router;
