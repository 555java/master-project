import { Alert, Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import React from "react";
import { useSelector } from "react-redux";
import { getLoadUserError } from "../redux/auth/auth.selectors";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export const MainLayout = () => {
  const loadUserError = useSelector(getLoadUserError);
  return (
    <Box>
      <Container disableGutters maxWidth={false}>
        <Header />
        {loadUserError ? (
          <Grid>
            <Alert severity="error">{loadUserError.message}</Alert>
          </Grid>
        ) : (
          <Outlet />
        )}
      </Container>
    </Box>
  );
};
