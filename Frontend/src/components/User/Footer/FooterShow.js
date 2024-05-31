import React from "react";
import { Outlet } from "react-router-dom";
import FooterRoutes from "./FooterRoutes";

const FooterShow = () => {
  return (
    <div style={{ padding: "2em" }}>
      <Outlet />
    </div>
  );
};

export default FooterShow;
