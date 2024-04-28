import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const NavBar = () => {
  return (
    <AppBar
      position="absolute"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <img src="/logo.png" height="100px" />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
