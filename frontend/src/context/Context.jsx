import axios from "axios";
import { createContext, useState } from "react";
import Cookies from "js-cookie";

const Context = createContext({
  res: {},
  changeUserRole: () => {},
  checkUserRole: () => {},
  setIsAuthorize: () => {},
  sendPDFAPI: () => {},
  getUserCv: () => {},
  UserCv: [],
  setUserCv: () => {},
  deleteUserCv: () => {},
  SignInAPI: () => {},
  user: {},
  setUser: () => {},
  SignUpAPI: () => {},
  logOut: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const [res, setRes] = useState(null);
  const [isAuthorize, setIsAuthorize] = useState(false);
  const [UserCv, setUserCv] = useState([]);
  const env = import.meta.env;

  async function changeUserRole() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_USERS_CALL}/AddPrime`,
        "",
        { withCredentials: true }
      );
      setIsAuthorize(true);
    } catch (error) {
      console.log(error.massage);
    }
  }
  async function sendPDFAPI(state) {
    try {
      console.log(state);
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_USERS_CALL}/AddPDF`,
        state,
        { withCredentials: true }
      );
      console.log(response.data.massage);
    } catch (error) {
      console.log(error.massage);
    }
  }
  async function checkUserRole() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_USERS_CALL}/authenticatedToken`,
        "",
        { withCredentials: true }
      );
      setIsAuthorize(
        response.data.userRole === "prime" || response.data.userRole === "admin"
          ? true
          : false
      );

      return response.data.authorize;
    } catch (error) {
      setIsAuthorize(response.data.authorize);
      console.log(error.massage || "somthing went worng");
    }
  }
  async function getUserCv() {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_USERS_CALL + "/sendUserCv",

        {
          withCredentials: true,
        }
      );
      console.log(response.data.UserCvArray);

      setUserCv(response.data.UserCvArray);
    } catch (error) {
      console.log(error.massage);
    }
  }
  async function deleteUserCv(cvIdToDelete) {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_REACT_APP_USERSCV_CALL + "/deleteUserCv",
        { cvIdToDelete: cvIdToDelete },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error.massage);
    }
  }
  const SignInAPI = async (user, navigate) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_USERS_CALL}/signin`,
        user,
        {
          withCredentials: true,
        }
      );
      console.log(response.data.success);

      if (response.data.success === true) {
        navigate("/");
        setUser(response.data);
        localStorage.setItem("CurrentUser", JSON.stringify(response.data));

        setIsAuthorize(
          response.data.userRole === "prime" ||
            response.data.userRole === "admin"
            ? true
            : false
        );
        console.log(response.data);

        return response.data;
      }
    } catch (error) {
      console.log(error);
      setUser(error.response.data);
      setIsAuthorize(false);
      return error.response.data;
    }
  };
  const SignUpAPI = async (user, navigate) => {
    try {
      console.log(user);
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_USERS_CALL}/SignUp`,
        user,
        {
          withCredentials: true,
        }
      );

      if (response.data !== "User already exists") {
        setUser(response.data);
        navigate("/");
        setIsAuthorize(
          response.data.userRole === "prime" ||
            response.data.userRole === "admin"
            ? true
            : false
        );
      }
      return response.data;
    } catch (error) {
      console.error(error.message);
      return response.data;
    }
  };
  const logOut = async () => {
    localStorage.clear();
    setIsAuthorize(false);

    const res = await axios.post(
      `${import.meta.env.VITE_REACT_APP_USERS_CALL}/logOut`,
      "data",
      {
        withCredentials: true,
      }
    );
    if (res === "Logged out successfully") {
      localStorage.clear();
      setIsAuthorize(false);
      return true;
    }
  };

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        res,
        changeUserRole,
        isAuthorize,
        checkUserRole,
        setIsAuthorize,
        sendPDFAPI,
        getUserCv,
        UserCv,
        setUserCv,
        deleteUserCv,
        SignInAPI,
        SignUpAPI,
        logOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
