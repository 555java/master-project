import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React, { Fragment } from "react";

const SidebarList = ({ isLogged }) => {
  return (
    <Box
      sx={{
        width: "30vw",
        minWidth: "250px",
      }}
    >
      <List>
        {isLogged ? (
          <Fragment>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="User logged in" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="explore">
                <ListItemText primary="Explore all users" />
              </ListItemButton>
            </ListItem>
          </Fragment>
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
