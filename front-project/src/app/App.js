import { Fragment } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoggingOut,
  getIsUserLoading,
  getUser,
} from "../features-store/auth/auth.selectors";
import { Box, Button, Grid } from "@mui/material";
import { logoutUserThunk } from "../features-store/auth/auth.thunks";

function App() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const userLoader = useSelector(getIsUserLoading);
  const logoutLoader = useSelector(getIsLoggingOut);

  return userLoader || logoutLoader ? (
    <Fragment>
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
    </Fragment>
  ) : (
    <Fragment>
      <div>Hello Frontend User:{user ? JSON.stringify(user) : "no user"}</div>
      <Button onClick={() => dispatch(logoutUserThunk())}>logOut</Button>
    </Fragment>
  );
}

export default App;
