import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
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
import { Fragment, useState } from "react";

export const SubscriptionsButton = ({ user }) => {
  const dispatch = useDispatch();
  const username = user.username;
  const userId = user._id;
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
    <Fragment>
      {!authUser ? (
        <Button size="large" component={RouterLink} to={`/signin`}>
          Subscribe
        </Button>
      ) : user._id === authUser._id ? (
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
    </Fragment>
  );
};
