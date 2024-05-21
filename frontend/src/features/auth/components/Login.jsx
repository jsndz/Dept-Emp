import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAsync, selectError, selectUser } from "../authSlice";

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const userInfo = useSelector(selectUser);
  return (
    <>
      {userInfo && <Navigate to="/" />}
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-Black-600">Database</h1>
            <form
              noValidate
              action="true"
              className="w-full"
              onSubmit={handleSubmit((data) => {
                dispatch(
                  loginUserAsync({
                    email: data.email,
                    password: data.password,
                  })
                );
              })}
            >
              <div className="pb-4">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid Email",
                    },
                  })}
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-sm border border-gray-300"
                />
              </div>
              <div className="pb-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm border border-gray-300"
                  type="password"
                  {...register("password", {
                    required: "Password is Required",
                  })}
                  id="password"
                  placeholder="Password"
                />
              </div>
              {error && <p className="text-red-500 pb-4">{error}</p>}
              <Link
                to="/reset-password"
                className="text-right block text-gray-400 hover:underline hover:text-gray-600 mb-4"
              >
                Forgot your password?
              </Link>
              <div className="pb-4">
                <button
                  type="submit"
                  className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <div className="text-gray-600">
                <p className="inline">Not a member?</p>
                <span className="inline-block ml-2">
                  <Link
                    to="/signup"
                    className="text-indigo-500 hover:text-indigo-600"
                  >
                    Sign Up
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
