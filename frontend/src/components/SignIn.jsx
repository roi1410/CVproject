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

function SignIn() {
  const Data = useContext(Context);
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [usernamevalid, setusernamevalid] = useState(true);
  const [passwordvalid, setpasswordvalid] = useState(true);

  const handleLogin = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const loginData = { username, password };
    const response = await SignInAPI(loginData);
  };

  const SignInAPI = async (user) => {
    try {
      console.log(user)
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_USERS_CALL}/signin`,
        user,  { withCredentials: true }
      );
      console.log(response.data)
      if (response.data.success == true) {
        Data.setUser(response.data.message);
        navigate('/mainpage');
      } else {
        setusernamevalid(false);
        setpasswordvalid(false);
      }
      return response.data;
    } catch (error) {
      console.error(error.message);
      return response.data;
    }
  };
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

  return (
    <>
      <div className="signinpage">
        <div className="signinmain">
          <AnimatedPaper
            sx={{
              width: 300,
              mx: "auto",
              my: 2,
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "11% 10% 13% 17%",
              backgroundColor: "rgba(44,44,44,0.6)",
              animation: "fkbarda 4s infinite alternate ease-in-out",
              boxShadow: "md",
              border: !usernamevalid || !passwordvalid ? "1px solid #ff0e00" : "1px solid #0082ff",
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
                <b>Sign in</b>
              </Typography>
              <Typography variant="body2">
                Please sign in to continue.
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
              {!usernamevalid && (
                <FormHelperText error>
                  <ErrorOutlined />
                  Username is not valid
                </FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <FormLabel error={!passwordvalid}>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                error={!passwordvalid}
                inputRef={passwordRef}
              />
              {!passwordvalid && (
                <FormHelperText error>
                  <ErrorOutlined />
                  Password is not valid
                </FormHelperText>
              )}
            </FormControl>
            <Button sx={{ mt: 1 }} onClick={handleLogin}>
              Log in
            </Button>
            <NavLink to="/signup">
              <Typography
                variant="body2"
                sx={{ justifyContent: "center", display: "flex", width: "100%" }}
              >
                Don't you have an account?
              </Typography>
            </NavLink>
          </AnimatedPaper>
        </div>
      </div>
    </>
  );
}

export default SignIn;
