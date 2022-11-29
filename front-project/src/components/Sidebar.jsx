import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../features-store/auth/auth.thunks";

const SidebarList = ({ isLogged }) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: "30vw",
        minWidth: "250px",
      }}
    >
      <List>
        {isLogged ? (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                onClick={() => dispatch(logoutUserThunk())}
                primary="Logout"
              />
            </ListItemButton>
          </ListItem>
        ) : (
          <></>
        )}
      </List>
    </Box>
  );
};

export const SideBar = ({ setIsDrawerOpen, isOpen, isLogged }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => {
        setIsDrawerOpen(false);
      }}
    >
      <SidebarList isLogged={isLogged} />
    </Drawer>
  );
};
