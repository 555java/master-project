import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

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
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="User logged in" />
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
