import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row bg-black">
      <SideBar className="w-1/5" />
      <Outlet />
    </div>
  );
};

export default DashLayout;
