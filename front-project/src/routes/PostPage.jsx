import * as React from "react";
import { Alert, Box, Grid, LinearProgress, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect } from "react";
import { loadPostThunk } from "../features-store/posts/posts.thunks";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPostsById,
  getNumberOfImages,
  getIsPostLoading,
  getPostError,
} from "../features-store/posts/posts.selectors";
import { useState } from "react";
import { red } from "@mui/material/colors";
import ImageCarouselNavigateButton from "../components/ImageCarouselNavigateButton";

export default function PostPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const postId = params.postId;

  const isPostLoading = useSelector(getIsPostLoading);
  const post = useSelector((state) => getPostsById(state, postId));
  const numberOfImages = useSelector((state) =>
    getNumberOfImages(state, postId)
  );
  const error = useSelector(getPostError);

  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    dispatch(loadPostThunk(postId));
    // eslint-disable-next-line
  }, []);

  console.log(isPostLoading, post);
  console.log(!isPostLoading && post === undefined);

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

  if (post) {
    return (
      <Grid
        sx={{
          padding: "10px 0px",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: "100%",
            width: "600px",
            minHeight: "calc(100vh - 64px - 20px)",
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title={post.authorId}
            subheader={post.title}
          />
          <Grid sx={{ position: "relative" }}>
            {imageCount + 1 < numberOfImages ? (
              <ImageCarouselNavigateButton
                direction="forward"
                onClick={() => {
                  imageCount + 1 < numberOfImages
                    ? setImageCount(imageCount + 1)
                    : setImageCount(imageCount);
                }}
              />
            ) : (
              <></>
            )}
            {imageCount !== 0 ? (
              <ImageCarouselNavigateButton
                direction="backward"
                onClick={() => {
                  imageCount > 0
                    ? setImageCount(imageCount - 1)
                    : setImageCount(imageCount);
                }}
              />
            ) : (
              <></>
            )}

            <CardMedia
              component="img"
              image={post.image[imageCount].filename}
              sx={{
                height: "450px",
                maxWidth: "100vw",
                width: "100%",
                objectFit: "contain",
              }}
              alt="Paella dish"
            />
          </Grid>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  }

  return null;
}
