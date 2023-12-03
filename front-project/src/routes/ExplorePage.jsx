import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersThunk } from "../redux/auth/auth.thunks";
import {
  getAllUsers,
  getIsAllUsersLoading,
  getUserId,
  getUsersListError,
} from "../redux/auth/auth.selectors";
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
