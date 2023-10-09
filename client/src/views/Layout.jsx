import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-full p-3 bg-slate-300 flex gap-3 justify-center flex-wrap">
      <Outlet />
    </div>
  );
};

export default Layout;
