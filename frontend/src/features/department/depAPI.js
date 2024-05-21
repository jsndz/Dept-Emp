import axios from "axios";

export const createDepartment = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/createDep",
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error in creating department", error);
    throw error;
  }
};

export const getDepartments = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/v1/getDep");
    return response.data;
  } catch (error) {
    console.log("Error in getting department", error);
    throw error;
  }
};

export const deleteDepartments = async (id) => {
  try {
    const response = await axios.delete(`
      http://localhost:3000/api/v1/deleteDep/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error in delete department", error);
    throw error;
  }
};
export const updateDepartments = async (id, data) => {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/v1/patchDep/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error in update department", error);
    throw error;
  }
};
