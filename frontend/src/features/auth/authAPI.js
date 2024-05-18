import axios from "axios";

export const createUser = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/auth/signup",
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error in creating user", error);
    throw error;
  }
};

export const checkUser = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/auth/login",
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error in login of user", error);
    throw error;
  }
};
