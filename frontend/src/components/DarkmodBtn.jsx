import React from "react";
import { useState, useEffect, useRef } from "react";
function DarkModeBtn() {
  const [theme, setheme] = useState("Light");
  const dark = useRef();

  useEffect(() => {
    // in index.html on the body we add className "dark"
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handeldarkmode = () => {
    setheme(theme === "dark" ? "Light" : "dark");
  };
  return (
    <button
      ref={dark}
      onClick={handeldarkmode}
      className="cursor-pointer py-2 px-4 bg-yellow-500 text-white font-semibold dark"
    >
      dark modebtn
    </button>
  );
}

export default DarkModeBtn;
