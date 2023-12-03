import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSubscriptionsThunk } from "../redux/auth/auth.thunks";
import { useParams } from "react-router-dom";
import {
  getIsSubscriptionsLoading,
  getSubscriptionsError,
  getUserSubscriptions,
} from "../redux/auth/auth.selectors";
import { Alert, Box, Grid, LinearProgress } from "@mui/material";
import { UsersList } from "../components/UsersList";

export const SubscriptionsList = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const userId = params.userId;
  const isLoading = useSelector(getIsSubscriptionsLoading);
  const subscriptionsError = useSelector(getSubscriptionsError);
  const subscriptions = useSelector(getUserSubscriptions);
  useEffect(() => {
    dispatch(getUserSubscriptionsThunk(userId));
  }, [userId, dispatch]);

  if (isLoading)
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="secondary" />
      </Box>
    );
  if (subscriptionsError) {
    return (
      <Grid item xs={12}>
        <Alert severity="error">{subscriptionsError.message} </Alert>
      </Grid>
    );
  }

  if (subscriptions) {
    return <UsersList usersList={subscriptions}></UsersList>;
  }
};
