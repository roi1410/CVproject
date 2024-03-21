import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DynamicNavBar from "./DynamicNavBar";

function Layout() {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-row-12 h-screen">
      <DynamicNavBar />
      <div className="row-span-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
