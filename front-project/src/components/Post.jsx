import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

import { useState } from "react";
import ImageCarouselNavigateButton from "../components/ImageCarouselNavigateButton";
import { nameToColor } from "../utils/getRandomAccountColor";

export const Post = ({ post }) => {
  const [imageCount, setImageCount] = useState(0);
  const numberOfImages = post.image.length;
  const userName = post.authorUsername || "X";
  const avatarColor = nameToColor(userName);
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
          // minHeight: "calc(100vh - 64px - 20px)",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: avatarColor, width: 32, height: 32 }}>
              {userName.slice(0, 1).toUpperCase()}
            </Avatar>
          }
          title={post.authorUsername}
          subheader={`"${post.title}"`}
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
            image={post.image[imageCount].url}
            sx={{
              height: "450px",
              maxWidth: "100vw",
              width: "100%",
              objectFit: "contain",
            }}
            alt={post.title}
          />
        </Grid>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
