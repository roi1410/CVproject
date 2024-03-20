import * as React from "react";
import logoutLogo from "../assets/image/icons/logout.png"


import { Link, NavLink } from "react-router-dom";
import Context from "../context/Context";
import { useContext, useEffect } from "react";
import logo from "../assets/image/icons/logo.png";
// frontend\src\assets\image\icons\image.png

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function DynamicNavBar() {
  const { checkUserRole, isAuthorize ,logOut} = useContext(Context);
  useEffect(() => {
    checkUserRole();
  }, []);

  const pages = isAuthorize
    ? ["PDFForms", "signing", "Premium", "Gallery", "singUp"]
    : ["signing", "Premium", "singUp"];

  return (
    <nav className="bg-secondary row-span-3 flex items-center justify-between ring-blue-300 ring-4  bg-primary  ">
      <div className=" flex gap-10  h-6 pl-10  ">
        {pages.map((element, key) => {
          return (
            <NavLink
              key={key}
              className="text-dark-800 font-thin p-5 w-30 rounded-md ring-blue-300  bg-popUp container self-center  hover:bg-gradient-to-tl from-popUp to-secondary"
              to={element}
            >
              {element}
            </NavLink>
          );
        })}
      </div>
      <div className=" flex gap-3 items-center">
        <img onClick={()=>logOut()}  className="h-10 cursor-pointer"src={logoutLogo} alt="" />
      <Link className="pr-10" to={"/"}>
        <img src={logo} alt="oops" id="logo" />
      </Link>
      </div>
    </nav>
  );
}
export default DynamicNavBar;
