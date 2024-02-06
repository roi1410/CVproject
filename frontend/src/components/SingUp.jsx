import React, { useContext, useRef, useState } from "react";
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
import Context from "./Context";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const AnimatedPaper = styled(MuiPaper)`
  border-radius: 8% 10% 11% 9%;
  animation: fkbarda 2s infinite alternate ease-in-out;

  @keyframes fkbarda {
    0% {
      border-radius: 12% 11% 8% 12%;
    }
    50%
    {
      border-radius: 12% 10% 13% 9%;
    }
    100% {
      border-radius: 12% 8% 12% 7%;
    }
  }
`;

function SignUp() {
  const Data = useContext(Context);
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const [usernamevalid, setusernamevalid] = useState(true);
  const [passwordvalid, setpasswordvalid] = useState(true);
  const [emailvalid, setemailvalid] = useState(true);
  const [usernameerror, setUsernameerror] = useState(
    "Username must be longer than 8 characters"
  );

  const handleLogin = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    const isUsernameValid = username.length > 8;
    const isPasswordValid = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,}$/.test(
      password
    );
    const isEmailValid = /\S+@\S+\.\S+/.test(email);

    setusernamevalid(isUsernameValid);
    setpasswordvalid(isPasswordValid);
    setemailvalid(isEmailValid);
    setUsernameerror("Username must be longer than 8 characters");

    if (isUsernameValid && isPasswordValid && isEmailValid) {
      const loginData = { username, password, email };
      const response = await SignUpAPI(loginData);
      response === "User already exists"
        ? (setusernamevalid(false), setUsernameerror("Username already exists"))
        : setemailvalid(true);
    }
  };

  const SignUpAPI = async (user) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_USERS_CALL}/SignUp`,
        user
      );
      if (response.data !== "User already exists") {
        Data.setUser(response.data);
        navigate("/homepage");
      }
      return response.data;
    } catch (error) {
      console.error(error.message);
      return response.data;
    }
  };

  return (
    <>
      <div className="signinpage">
        <div className="signinmain">
          <AnimatedPaper
            sx={{
              width: 300,
              mx: "auto",
              my: 2,
              p: 3,
              display: "flex",
              flexDirection: "column",
              backgroundColor:'rgba(44,44,44,0.6)',
              gap: 1,
              boxShadow: "md",
              border: !usernamevalid || !passwordvalid || !emailvalid
                ? "1px solid #ff0e0088"
                : "1px solid #0082ff88",
            }}
            variant="outlined"
          >
            <div>
              <Typography
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
                variant="h4"
              >
                <b>Sign Up</b>
              </Typography>
              <Typography variant="body2">
                Please sign up to continue.
              </Typography>
            </div>
            <FormControl>
              <FormLabel error={!usernamevalid}>Username</FormLabel>
              <Input
                name="Username"
                type="text"
                placeholder="Username"
                error={!usernamevalid}
                inputRef={usernameRef}
              />
                type="password"
                placeholder="Password"
                error={!passwordvalid}
                inputRef={passwordRef}
              />
              {errors.password?.message && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              <label className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent ">
                Password
              </label>
            </div>
            {/* degree */}
            <h1>choose your title</h1>
          </div>

          <button
            className="mt-6 block w-full select-none rounded-lg bg-pink-500 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
        </form>
      </div>
    </>
  );
}

export default SignUp;
