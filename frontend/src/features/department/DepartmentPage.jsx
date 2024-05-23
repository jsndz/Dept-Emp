import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createDepartmentAsync,
  getDepartmentsAsync,
  selectDepartments,
  updateDepartmentsAsync,
  deleteDepartmentsAsync,
} from "./depSlice";
import { Link } from "react-router-dom";

const DepartmentPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState(null);

  const departments = useSelector(selectDepartments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartmentsAsync());
  }, [dispatch]);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const openUpdateDialog = (department) => {
    setCurrentDepartment(department);
    setIsUpdateDialogOpen(true);
  };

  const closeUpdateDialog = () => {
    setIsUpdateDialogOpen(false);
    setCurrentDepartment(null);
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Department
        </h1>

        {departments && departments.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <tr key={department.DID}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {department.DID}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {department.Name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <button
                      onClick={() => {
                        dispatch(deleteDepartmentsAsync(department.DID));
                        dispatch(getDepartmentsAsync());
                      }}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      DELETE
                    </button>
                    <button
                      onClick={() => openUpdateDialog(department)}
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
          <p>The List is empty. Add Department</p>
        )}

        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={openDialog}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            ADD
          </button>{" "}
          <Link to="/employee">
            {" "}
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600">
              Employee
            </button>
          </Link>
        </div>
      </div>

      {/* Add Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add Department</h2>
            <form
              noValidate
              action="true"
              className="w-full"
              onSubmit={handleSubmit((data) => {
                dispatch(createDepartmentAsync(data));
                closeDialog();
              })}
            >
              <div className="pb-4">
                <input
                  type="text"
                  {...register("depName", {
                    required: "Department name is required",
                  })}
                  id="depName"
                  placeholder="Department Name"
                  className="block w-full p-4 text-lg rounded-sm border border-gray-300"
                />
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
      {isUpdateDialogOpen && currentDepartment && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Update Department</h2>
            <form
              noValidate
              action="true"
              className="w-full"
              onSubmit={handleSubmit((data) => {
                dispatch(
                  updateDepartmentsAsync({ id: currentDepartment.DID, data })
                );
                closeUpdateDialog();
              })}
            >
              <div className="pb-4">
                <input
                  type="text"
                  {...register("depName", {
                    required: "Department name is required",
                    value: currentDepartment.Name,
                  })}
                  id="depName"
                  placeholder="Department Name"
                  className="block w-full p-4 text-lg rounded-sm border border-gray-300"
                />
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

export default DepartmentPage;
