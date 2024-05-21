const express = require("express");
const router = express.Router();
const userController = require("../../controller/user-controller");
const departmentController = require("../../controller/department-controller");

router.post("/auth/signup", userController.create);
router.post("/auth/login", userController.signin);

router.post("/createDep", departmentController.create);
router.get("/getDep", departmentController.getAll);
router.delete("/deleteDep/:id", departmentController.destroy);
router.patch("/patchDep/:id", departmentController.update);

module.exports = router;
