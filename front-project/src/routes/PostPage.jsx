import * as React from "react";
import { Alert, Box, Grid, LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { loadPostThunk } from "../features-store/post/post.thunks";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getIsPostLoading,
  getPostError,
  getUploadedPost,
} from "../features-store/post/post.selectors";
import { Post } from "../components/Post";

export default function PostPage() {
  const dispatch = useDispatch();
  const error = useSelector(getPostError);
  const params = useParams();
  const postId = params.postId;
  const isPostLoading = useSelector(getIsPostLoading);
  const post = useSelector((state, postId) => getUploadedPost(state));
  useEffect(() => {
    dispatch(loadPostThunk(postId));
  }, [postId]);
  if (error) {
    return (
      <Grid>
        <Alert severity="error">{error.response.message}</Alert>
      </Grid>
    );
  }

  if (isPostLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  if (post) {
    return <Post post={post} />;
  }

  return null;
}
