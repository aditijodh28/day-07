const employeeService = require("../services/employeeService");

const getEmployees = (req, res, next) => {
    try {
        const employees = employeeService.getAllEmployees();
        res.json(employees);
    } catch (error) {
        next(error);
    }
};

const getEmployee = (req, res, next) => {
    try {
        const employee = employeeService.getEmployeeById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.json(employee);
    } catch (error) {
        next(error);
    }
};

const createEmployee = (req, res, next) => {
    try {
        const employee = employeeService.createEmployee(req.body);

        res.status(201).json(employee);
    } catch (error) {
        next(error);
    }
};

const updateEmployee = (req, res, next) => {
    try {
        const employee = employeeService.updateEmployee(
            req.params.id,
            req.body
        );

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.json(employee);
    } catch (error) {
        next(error);
    }
};

const deleteEmployee = (req, res, next) => {
    try {
        const employee = employeeService.deleteEmployee(req.params.id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.json({
            message: "Employee deleted successfully",
            employee
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
};