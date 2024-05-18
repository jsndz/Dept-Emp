const express = require("express");
const router = express.Router();
const userController = require("../../controller/user-controller");

router.post("/auth/signup", userController.create);
router.post("/auth/login", userController.signin);

module.exports = router;
