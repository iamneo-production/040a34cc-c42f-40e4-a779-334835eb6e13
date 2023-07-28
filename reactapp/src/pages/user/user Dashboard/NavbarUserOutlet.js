import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../../../components/user/UserNavbar";
import { Col, Row } from "react-bootstrap";
function NavbarUserOutlet() {
  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <Outlet />
    </>
  );
}

export default NavbarUserOutlet;
