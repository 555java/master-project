import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

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
