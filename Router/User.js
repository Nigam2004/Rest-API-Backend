const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");
router.post("/register", UserController.userRegister);
router.post("/login", UserController.userLogin);
module.exports = router;
