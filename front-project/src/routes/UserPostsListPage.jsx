import * as React from "react";
import { Alert, Box, Container, LinearProgress } from "@mui/material";

import { useEffect } from "react";
import { loadUserPostsThunk } from "../features-store/posts/posts.thunks";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBrowsedUser,
  getBrowsedUserPosts,
  getIsPostsLoading,
  getPostsError,
} from "../features-store/posts/posts.selectors";
import { UserHeader } from "../components/UserHeader";
import Grid from "@mui/material/Unstable_Grid2";
import { UserPostsContainer } from "../components/UserPostsContainer";
import {
  getIsLoggedIn,
  getUserId,
} from "../features-store/auth/auth.selectors";

export const UserPostsListPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const posts = useSelector((state, userId) =>
    getBrowsedUserPosts(state, userId)
  );
  const browsedUser = useSelector((state, userId) =>
    getBrowsedUser(state, userId)
  );
  const error = useSelector(getPostsError);
  const isPostsLoading = useSelector(getIsPostsLoading);
  useEffect(() => {
    dispatch(loadUserPostsThunk(params.userId));
  }, [params.userId, dispatch]);
  if (!isLoggedIn) {
    return (
      <Grid>
        <Alert severity="warning">
          Only logged users can watch profiles! Please log in or sign up.
        </Alert>
      </Grid>
    );
  }
  if (error) {
    return (
      <Grid>
        <Alert severity="error">{error.response.message}</Alert>
      </Grid>
    );
  }
  if (isPostsLoading || !browsedUser) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  if (posts && browsedUser) {
    return (
      <Container>
        <Grid
          container
          fixed
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 3,
          }}
        >
          <Grid xs={12} md={10}>
            <UserHeader user={browsedUser} />
            <UserPostsContainer posts={posts} />
          </Grid>
        </Grid>
      </Container>
    );
  }
};
