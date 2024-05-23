import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync, selectError } from "../authSlice";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const onSubmit = async (data) => {
    const result = await dispatch(
      createUserAsync({
        email: data.email,
        password: data.password,
      })
    );

    if (createUserAsync.fulfilled.match(result)) {
      navigate("/login"); // navigate to login or another page on success
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <section className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <div className="border-b-2 border-gray-600">
            <h1 className="text-3xl font-bold text-gray-800">Database</h1>
          </div>
        </div>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          {/* Email input */}
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
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          {/* Password input */}
          <div className="pb-4">
            <input
              className="block w-full p-4 text-lg rounded-sm border border-gray-300"
              type="password"
              {...register("password", {
                required: "Password is Required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message: `- at least 8 characters\n- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n- Can contain special characters`,
                },
              })}
              id="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password input */}
          <div className="pb-4">
            <input
              className="block w-full p-4 text-lg rounded-sm border border-gray-300"
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is Required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
              id="confirmPassword"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="pb-4">
            <button
              type="submit"
              className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none"
            >
              Sign Up
            </button>
          </div>

          <div className="text-gray-600">
            <p className="inline">Already a member?</p>
            <span className="inline-block ml-2">
              <Link
                to="/login"
                className="text-indigo-500 hover:text-indigo-600"
              >
                Log In
              </Link>
            </span>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Signup;
