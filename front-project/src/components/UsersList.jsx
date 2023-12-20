import { Avatar, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link as RouterLink } from "react-router-dom";
import { nameToColor } from "../utils/getRandomAccountColor";
import React from "react";

export const UsersList = ({ usersList }) => {
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 0",
          flexWrap: "wrap",
        }}
      >
        <Grid xs={12} sm={6} md={4} xl={3} sx={{ textAlign: "center" }}>
          <Typography variant="h7" color="primary">
            Users
          </Typography>
        </Grid>
        {usersList.map((user) => (
          <Grid
            xs={12}
            sm={6}
            md={4}
            xl={3}
            sx={{ padding: "5px" }}
            key={user._id}
          >
            <Button
              component={RouterLink}
              id={user._id}
              sx={{
                padding: "10px 20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              to={`/posts/user/${user._id}`}
              variant="contained"
              color="accent1"
            >
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: nameToColor(user.username),
                    width: 32,
                    height: 32,
                    marginRight: "10px",
                  }}
                >
                  {user.username.slice(0, 1).toUpperCase()}
                </Avatar>
                <Typography variant="body2">{user.username}</Typography>
              </Grid>
              <Typography variant="overline">
                {user.postsLength +
                  (user.postsLength === 1 ? " post" : " posts")}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
