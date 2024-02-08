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
  border-radius: 15% 18% 15% 21%;
  animation: fkbarda 1s infinite alternate ease-in-out;

  @keyframes fkbarda {
    0% {
      border-radius: 18% 15% 21% 16%;
    }
    50%
    {
      border-radius: 21% 21% 15% 22%;
    }
    100% {
      border-radius: 15% 18% 21% 18%;
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
        user,  { withCredentials: true }
      );
      if (response.data !== "User already exists") {
        Data.setUser(response.data);
        navigate("/mainpage");
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
              <Typography variant="body2" >
                Please sign up to continue.
              </Typography>
            </div>
            <FormControl>
              <FormLabel error={!usernamevalid} sx={{ color: "white" }}>Username</FormLabel>
              <Input
                name="Username"
                type="text"
                placeholder="Username"
                error={!usernamevalid}
                inputRef={usernameRef}
              />
              {!usernamevalid && (
                <FormHelperText error>
                  <ErrorOutlined />
                  {usernameerror}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <FormLabel error={!passwordvalid} sx={{ color: "white" }}>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                error={!passwordvalid}
                inputRef={passwordRef}
              />
              {errors.password?.message && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </FormControl>
            <FormControl>
              <FormLabel error={!emailvalid} sx={{ color: "white" }}>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                error={!emailvalid}
                inputRef={emailRef}
              />
              {!emailvalid && (
                <FormHelperText error>
                  <ErrorOutlined />
                  Please enter a valid email address
                </FormHelperText>
              )}
            </FormControl>
            <Button sx={{ mt: 1 }} onClick={handleLogin}>
              Sign Up
            </Button>
            <NavLink to="/signin">
              <Typography
                variant="body2"
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  width: "100%",
                }}
              >
                Already have an account? Sign In
              </Typography>
            </NavLink>
          </AnimatedPaper>
        </div>
      </div>
    </>
  );
}

export default SignUp;
