import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
  Typography,
} from "@mui/material";
import { nameToColor } from "../utils/getRandomAccountColor";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsSubscribed,
  getIsSubscribing,
  getUser,
} from "../redux/auth/auth.selectors";
import { userSubscribe, userUnsubscribe } from "../redux/auth/auth.thunks";
import { useState } from "react";

export const UserHeader = ({ user }) => {
  const dispatch = useDispatch();
  const username = user.username;
  const userId = user._id;
  const avatarColor = nameToColor(username);
  const authUser = useSelector(getUser);
  const isSubscribed = useSelector((state) => getIsSubscribed(state, userId));
  const isSubscribing = useSelector(getIsSubscribing);
  const [openDialog, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{
        padding: "10px 30px 10px 20px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#d2baff4d",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          bgcolor: avatarColor,
          width: 60,
          height: 60,
          fontSize: "30px",
          marginRight: "30px",
        }}
      >
        {username.slice(0, 1).toUpperCase()}
      </Avatar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
          rowGap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">
            {username.slice(0, 1).toUpperCase() + username.slice(1)}
          </Typography>
          <Typography variant="h7">{user.email}</Typography>
        </Box>

        <Box>
          {user._id === authUser._id ? (
            <Button
              size="large"
              component={RouterLink}
              to={`/user/${user._id}/subscriptions`}
            >
              {`${authUser.subscriptions.length}`} subscriptions
            </Button>
          ) : isSubscribed ? (
            <Box>
              <Tooltip title="Press to unsubscribe">
                <Button
                  variant="outlined"
                  disabled={isSubscribing}
                  onClick={handleClickOpen}
                >
                  Subscribed
                </Button>
              </Tooltip>
              <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {`Do you want to unsubscribe from ${username}?`}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    By pressing unsubscribe, this user will be remobed from your
                    subscriptions permanently.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} autoFocus>
                    Close
                  </Button>
                  <Button
                    onClick={() => {
                      handleClose();
                      dispatch(userUnsubscribe(userId));
                    }}
                  >
                    Unsubscribe
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          ) : (
            <Button
              variant="contained"
              onClick={() => dispatch(userSubscribe(userId))}
              disabled={isSubscribing}
            >
              Subscribe
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
};
