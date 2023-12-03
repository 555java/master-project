import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import {
  getIsLoggingOut,
  getIsUserLoading,
} from "../redux/auth/auth.selectors";
import { Box, Alert, AlertTitle } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { MainLayout } from "../components/MainLayout";
import { React } from "react";

function App() {
  const isUserLoading = useSelector(getIsUserLoading);
  const isLoggingOut = useSelector(getIsLoggingOut);

  return isUserLoading || isLoggingOut ? (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100vh",
        }}
      >
        <Grid>
          <CircularProgress color="secondary" />
        </Grid>
        <Grid xs={10} md={6} mt={2}>
          <Alert severity="info" color="secondary">
            <AlertTitle> Quick Note:</AlertTitle>
            <strong>Free hosting</strong>, so the first load might be slow.
            Thanks for your patience!
          </Alert>
        </Grid>
      </Grid>
    </Box>
  ) : (
    <MainLayout />
  );
}

export default App;
