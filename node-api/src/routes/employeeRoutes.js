const express = require("express");

const {
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
} = require("../controllers/employeeController");

const router = express.Router();

router.get("/", getEmployees);

router.get("/:id", getEmployee);

router.post("/", createEmployee);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

module.exports = router;
