import React, { useContext, useRef, useState } from "react";

import ErrorOutlined from "@mui/icons-material/ErrorOutlined";
import Context from "./../context/Context";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignIn() {
  const navigate = useNavigate();
  const { SignInAPI, user } = useContext(Context);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

 

  function handleSingIn(data) {
    console.log("form submit");
    SignInAPI(data,navigate);

    //  message: "Incorrect email or password",
  }

  return (
    <div className="col-span-12 h-full flex justify-center  bg-backgrownd items-center  ">
      <form
        onSubmit={handleSubmit((data) => handleSingIn(data))}
        className="bg-primary shadow-md rounded px-8 pt-10 pb-8 mb-4 w-[20vw] h-[60vh] "
        noValidate={true}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          {user?.message && (
            <span className="text-red-500">{user.message}</span>
          )}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="username"
            {...register("username", {
              required: "username is required",
            })}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-noneborder-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password "
            type="password "
            placeholder="******************"
            {...register("password", {
              required: "the password is required",
            })}
          />
          {errors.password?.message && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
