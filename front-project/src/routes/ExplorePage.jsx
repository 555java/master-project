import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersThunk } from "../features-store/auth/auth.thunks";
import {
  getAllUsers,
  getIsAllUsersLoading,
  getUserId,
  getUsersListError,
} from "../features-store/auth/auth.selectors";
import { Alert, Box, Grid, LinearProgress } from "@mui/material";
import { UsersList } from "../components/UsersList";

export const ExplorePage = () => {
  const dispatch = useDispatch();
  const authUserId = useSelector(getUserId);
  const allUsers = useSelector(getAllUsers);
  const isUsersLoading = useSelector(getIsAllUsersLoading);
  const usersListError = useSelector(getUsersListError);

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, [authUserId, dispatch]);

  if (isUsersLoading)
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="secondary" />
      </Box>
    );
  if (!authUserId) {
    return (
      <Grid item xs={12}>
        <Alert severity="error">Authentification failed!</Alert>
      </Grid>
    );
  }
  if (usersListError) {
    return (
      <Grid item xs={12}>
        <Alert severity="error">{usersListError.response.message} </Alert>
      </Grid>
    );
  }

  if (allUsers) {
    return <UsersList usersList={allUsers}></UsersList>;
  }
};
