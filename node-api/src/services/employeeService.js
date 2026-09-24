const employees = require("../models/employeeModel");

const getAllEmployees = () => {
    return employees;
};

const getEmployeeById = (id) => {
    return employees.find(employee => employee.id === Number(id));
};

const createEmployee = (data) => {
    const newEmployee = {
        id: employees.length
            ? Math.max(...employees.map(employee => employee.id)) + 1
            : 1,
        name: data.name,
        email: data.email,
        salary: Number(data.salary),
        department: data.department
    };

    employees.push(newEmployee);

    return newEmployee;
};

const updateEmployee = (id, data) => {
    const employee = getEmployeeById(id);

    if (!employee) {
        return null;
    }

    employee.name = data.name ?? employee.name;
    employee.email = data.email ?? employee.email;
    employee.salary = data.salary !== undefined
        ? Number(data.salary)
        : employee.salary;
    employee.department = data.department ?? employee.department;

    return employee;
};

const deleteEmployee = (id) => {
    const index = employees.findIndex(
        employee => employee.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    return employees.splice(index, 1)[0];
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};