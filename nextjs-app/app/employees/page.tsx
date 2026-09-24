"use client";

import { useEffect, useState } from "react";

interface Employee {
  id: number;
  name: string;
  salary: number;
  department: string;
  email?: string;
}

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/employees")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }

        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);

        let employeeList: Employee[] = [];

        if (Array.isArray(data)) {
          employeeList = data;
        } else if (Array.isArray(data.data)) {
          employeeList = data.data;
        } else if (Array.isArray(data.employees)) {
          employeeList = data.employees;
        }

        setEmployees(employeeList);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to connect to the backend API.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-3xl font-bold">
          Loading Employees...
        </h1>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-3xl font-bold text-red-600">
          Error
        </h1>

        <p className="mt-4 text-gray-700">
          {error}
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Employee Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Manage all employees
          </p>
        </div>

        {employees.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600">
              No employees found.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <table className="w-full">

              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Salary</th>
                  <th className="p-4 text-left">Department</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {employee.id}
                    </td>

                    <td className="p-4 font-semibold">
                      {employee.name}
                    </td>

                    <td className="p-4">
                      ₹{employee.salary.toLocaleString("en-IN")}
                    </td>

                    <td className="p-4">
                      {employee.department}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}

      </div>
    </main>
  );
}