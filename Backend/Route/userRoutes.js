const express = require("express");
const router = express.Router();
//Insert Model
const User = require("../Model/userModel")
//Insert User Controller
const UserController = require("../controllers/userControllers");

router.get("/",UserController.getAllusers);

//export
module.exports = router;