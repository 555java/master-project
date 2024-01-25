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

const SidebarList = ({ isLogged, setIsDrawerOpen }) => {
  return (
    <Box
      sx={{
        width: "30vw",
        minWidth: "250px",
      }}
    >
      <List>
        <Fragment>
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemText
                secondary={`${
                  isLogged ? "You are logged in" : "You are not logged"
                }`}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="explore"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <ListItemText primary="Explore all users" />
            </ListItemButton>
          </ListItem>
        </Fragment>
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
      <SidebarList isLogged={isLogged} setIsDrawerOpen={setIsDrawerOpen} />
    </Drawer>
  );
};
