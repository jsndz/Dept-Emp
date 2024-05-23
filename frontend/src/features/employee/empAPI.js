import axios from "axios";

export const createEmployee = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/createEmployee",
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error in creating Employee", error);
    throw error;
  }
};

export const getEmployee = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/v1/getEmployee"
    );
    return response.data;
  } catch (error) {
    console.log("Error in getting Employee", error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`
      http://localhost:3000/api/v1/deleteEmployee/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error in delete Employee", error);
    throw error;
  }
};

export const updateEmployee = async (id, data) => {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/v1/patchEmployee/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error in update Employee", error);
    throw error;
  }
};
