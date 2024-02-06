import axios from "axios";
import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const authenticate = async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_USERS_CALL}/authenticate/${id}`, {
      withCredentials: true,
    });
    console.log(response)
    return response;
  }
  const [user, setUser] = useState({ username: '', password: '', email: '' });

  return (
    <Context.Provider value={{ user, setUser,authenticate }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
