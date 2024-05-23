const express = require("express");
const router = express.Router();
const userController = require("../../controller/user-controller");
const departmentController = require("../../controller/department-controller");
const employeeController = require("../../controller/employee-controller");

router.post("/auth/signup", userController.create);
router.post("/auth/login", userController.signin);

router.post("/createDep", departmentController.create);
router.get("/getDep", departmentController.getAll);
router.delete("/deleteDep/:id", departmentController.destroy);
router.patch("/patchDep/:id", departmentController.update);

router.post("/createEmployee", employeeController.create);
router.get("/getEmployee", employeeController.getAll);
router.delete("/deleteEmployee/:id", employeeController.destroy);
router.patch("/patchEmployee/:id", employeeController.update);

module.exports = router;
