const validateEmployee = (data) => {
    const errors = {};

    if (!data.name || data.name.trim() === "") {
        errors.name = "Name is required";
    }

    if (!data.email || data.email.trim() === "") {
        errors.email = "Email is required";
    } else if (!data.email.includes("@")) {
        errors.email = "Invalid email address";
    }

    if (
        data.salary === undefined ||
        data.salary === "" ||
        Number(data.salary) <= 0
    ) {
        errors.salary = "Salary must be greater than 0";
    }

    if (!data.department || data.department.trim() === "") {
        errors.department = "Department is required";
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
};

module.exports = {
    validateEmployee
};