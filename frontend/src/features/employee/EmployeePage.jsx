import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployeeAsync,
  getEmployeesAsync,
  selectEmployees,
  updateEmployeesAsync,
  deleteEmployeesAsync,
} from "./empSlice";
import { getDepartmentsAsync, selectDepartments } from "../department/depSlice";
import { Link } from "react-router-dom";

const EmployeePage = () => {
  const employees = useSelector(selectEmployees);

  const departments = useSelector(selectDepartments);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesAsync());
    dispatch(getDepartmentsAsync());
  }, [dispatch]);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const openUpdateDialog = (employee) => {
    setCurrentEmployee(employee);
    setIsUpdateDialogOpen(true);
  };

  const closeUpdateDialog = () => {
    setIsUpdateDialogOpen(false);
    setCurrentEmployee(null);
  };

  const { register, handleSubmit } = useForm();
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };
  const filteredEmployees = selectedDepartment
    ? employees.filter((employee) => employee.Department === selectedDepartment)
    : employees;
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0 md:mr-4 text-center">
            Employees
          </h1>
          <div className="pb-4">
            <select
              id="did"
              className="block w-full md:w-auto p-2 text-base rounded border border-gray-300"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              <option value="">All Departments</option>
              {departments.map((department) => (
                <option key={department.DID} value={department.Name}>
                  {department.Name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {employees && employees.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  EID
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Salary
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Department ID
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.EID}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {employee.EID}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {employee.Name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {employee.Salary}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {employee.Department}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <button
                      onClick={() => {
                        dispatch(deleteEmployeesAsync(employee.EID));
                        dispatch(getEmployeesAsync());
                      }}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      DELETE
                    </button>
                    <button
                      onClick={() => openUpdateDialog(employee)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      UPDATE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>The list is empty. Add Employees</p>
        )}

        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={openDialog}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            ADD
          </button>
          <Link to="/department">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Department
            </button>
          </Link>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add Employee</h2>
            <form
              noValidate
              action="true"
              className="w-full"
              onSubmit={handleSubmit((data) => {
                dispatch(createEmployeeAsync(data));
                closeDialog();
              })}
            >
              <div className="pb-4">
                <input
                  type="text"
                  {...register("name", {
                    required: "Employee name is required",
                  })}
                  id="name"
                  placeholder="Employee Name"
                  className="block w-full p-4 text-lg rounded-sm border border-gray-300"
                />
              </div>
              <div className="pb-4">
                <input
                  type="number"
                  {...register("salary", {
                    required: "Employee salary is required",
                  })}
                  id="salary"
                  placeholder="Employee Salary"
                  className="block w-full p-4 text-lg rounded-sm border border-gray-300"
                />
              </div>
              <div className="pb-4">
                <select
                  {...register("did", {
                    required: "Department ID is required",
                  })}
                  id="did"
                  className="block w-full p-4 text-lg rounded-sm border border-gray-300"
                >
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option key={department.DID} value={department.DID}>
                      {department.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={closeDialog}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update Dialog Box */}
      {isUpdateDialogOpen && currentEmployee && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Update Employee</h2>
            <form
              noValidate
              action="true"
              className="w-full"
              onSubmit={handleSubmit((data) => {
                dispatch(
                  updateEmployeesAsync({ id: currentEmployee.EID, data })
                );
                closeUpdateDialog();
              })}
            >
              <div className="pb-4">
                <input
                  type="text"
                  {...register("name", {
                    required: "Employee name is required",
                    value: currentEmployee.Name,
                  })}
                  id="name"
                  placeholder="Employee Name"
                  className="block w-full p-4 text-lg rounded-sm border border-gray-300"
                />
              </div>
              <div className="pb-4">
                <input
                  type="number"
                  {...register("salary", {
                    required: "Employee salary is required",
                    value: currentEmployee.Salary,
                  })}
                  id="salary"
                  placeholder="Employee Salary"
                  className="block w-full p-4 text-lg rounded-sm border border-gray-300"
                />
              </div>
              <div className="pb-4">
                <select
                  {...register("did", {
                    required: "Department ID is required",
                  })}
                  id="did"
                  className="block w-full p-4 text-lg rounded-sm border border-gray-300"
                >
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option key={department.DID} value={department.DID}>
                      {department.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={closeUpdateDialog}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeePage;
