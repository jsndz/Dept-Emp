const express = require("express");

const { userController } = require("../../controller/user-controller");

router.post("/signup", userController.create);
router.post("/signin", userController.signin);

module.exports = router;
