import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/system";

const NavBar = () => {
  return (
    <AppBar
      position="absolute"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Box sx={{ p: 2 }}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} height="70px" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
