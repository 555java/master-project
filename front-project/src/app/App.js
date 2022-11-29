import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import {
  getIsLoggingOut,
  getIsUserLoading,
} from "../features-store/auth/auth.selectors";
import { Box, Grid } from "@mui/material";
import { MainLayout } from "../components/MainLayout";

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
        <CircularProgress color="secondary" />
      </Grid>
    </Box>
  ) : (
    <MainLayout />
  );
}

export default App;
