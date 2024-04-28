import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Your Travel Site. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
