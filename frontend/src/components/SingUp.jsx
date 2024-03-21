import { useContext, useRef, useState } from "react";
import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Paper as MuiPaper,
  Typography,
  Link,
  FormHelperText,
} from "@mui/material";
import ErrorOutlined from "@mui/icons-material/ErrorOutlined";
import Context from "./../context/Context";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignUp() {
  const [error, setError] = useState(null)
  function validateEmail(email) {
    // Regular expression for a basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Use the test method to check if the email matches the pattern
    return emailPattern.test(email);
  }
  function validatePassword(password) {
    // Regular expressions for password validation
    const lowercasePattern = /[a-z]/;
    const uppercasePattern = /[A-Z]/;
    const numberPattern = /[0-9]/;

    // Check if the password meets the criteria
    return (
      lowercasePattern.test(password) &&
      uppercasePattern.test(password) &&
      numberPattern.test(password)
    );
  }
  function containsLettersAndNumbers(username) {
    const letterPattern = /[a-zA-Z]/;
    const numberPattern = /[0-9]/;

    return letterPattern.test(username) && numberPattern.test(username);
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});
  const { SignUpAPI } = useContext(Context);
  const navigate = useNavigate();




  async function handleSingUp(data) {
    const response = await SignUpAPI(data,navigate);
    response === "User already exists"
      ? setError("Not User already exists")
      : setError(null);
  }

  return (
    <div className="col-span-12 h-full flex justify-center  bg-backgrownd items-center  ">
      <form
        onSubmit={handleSubmit((data) => handleSingUp(data))}
        className="bg-primary shadow-md rounded px-8 pt-10 pb-8  w-[30vw] h-[90vh]  flex flex-col justify-between"
      >
        <div className=" flex flex-col gap-6">
          {/* username */}
          <div className="h-fit ">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            {errors.username?.message||error && (
              <span className="text-red-500">{error||errors.Username.message}</span>
            )}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("username", {
                required: "Username is required",
                validate: {
                  maxLength: (v) =>
                    v.length < 20 ||
                    "the Username should be lower than 20 chars",
                  minLength: (v) =>
                    v.length > 4 ||
                    "the username need to be higher than 4 chars",
                  pattern: (v) =>
                    containsLettersAndNumbers(v) ||
                    "the username need to contain letters and numbers",
                },
              })}
            />
          </div>
          {/* email */}
          <div className="min-h-fit">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            {errors.email?.message && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("email", {
                required: "email is required",
                validate: {
                  minLength: (v) => v.length < 50 || "too many chars",
                  pattern: (v) => validateEmail(v) || "this is not an email ",
                },
              })}
            />
          </div>
          {/* password */}
          <div className="min-h-fit">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            {errors.password?.message && (
              <span className="text-red-500 ">{errors.password.message}</span>
            )}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("password", {
                required: "passowrd is required",
                validate: {
                  pattern: (v) =>
                    validatePassword(v) ||
                    "the password should contain capital letters numbers and regular letters",
                },
              })}
              type="password"
            />
          </div>
        </div>
        <div>
          <button
            className="mt-6 block w-full select-none rounded-lg bg-popUp px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-popborder-popUp/20 transition-all hover:shadow-lg hover:shadow-popborder-popUp/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Register
          </button>
          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Already have an account?
            {/*Link  */}
            <span
              className="cursor-pointer font-medium text-blue-500 transition-colors hover:text-blue-700"
              onClick={() => {
                LogIn_nav("#");
              }}
            >
              LogIn
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
