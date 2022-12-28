import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import React from "react";

export const MainLayout = () => {
  return (
    <Box>
      <Container disableGutters maxWidth={false}>
        <Header />
        <Outlet />
      </Container>
    </Box>
  );
};
