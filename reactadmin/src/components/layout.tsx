import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      Đây là trang Layout tổng 

      <Outlet />
    </>
  );
}

export default Layout;