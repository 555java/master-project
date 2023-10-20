import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { SideBar } from "./Sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  getIsLoggedIn,
  getLogoutError,
} from "../features-store/auth/auth.selectors";
import { Fragment } from "react";
import { Alert, Link } from "@mui/material";
import AccountMenu from "./AccountMenu";

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const logoutError = useSelector(getLogoutError);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <SideBar
            setIsDrawerOpen={setIsDrawerOpen}
            isOpen={isDrawerOpen}
            isLogged={isLoggedIn}
          />
          <Link
            variant="h6"
            component={RouterLink}
            underline="none"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "white",
              fontWeight: 400,
            }}
            to="/about"
          >
            FakeApp
          </Link>
          {!isLoggedIn ? (
            <Fragment>
              <Button
                size="small"
                component={RouterLink}
                to="/signin"
                variant="body2"
              >
                Login
              </Button>
              <Button
                size="large"
                component={RouterLink}
                to="/register"
                variant="body2"
              >
                Signup
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <AccountMenu />
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
      {logoutError ? <Alert severity="error">Logout error</Alert> : <></>}
    </Box>
  );
}
