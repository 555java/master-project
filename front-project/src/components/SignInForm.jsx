import * as React from "react";
import { Form, Field } from "react-final-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import { TextFieldAdapter } from "./TextFieldAdapter";
import { signInUserThunk } from "../redux/auth/auth.thunks";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";
import { getIsUserSetting } from "../redux/auth/auth.selectors";

export const SignInForm = () => {
  const dispatch = useDispatch();
  const isUserSetting = useSelector(getIsUserSetting);
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form
          onSubmit={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "username required";
            }
            if (!values.password) {
              errors.password = "Password required";
            }
            if (Object.keys(errors).length) {
              return errors;
            }
            return dispatch(signInUserThunk({ ...values }));
          }}
          render={({
            handleSubmit,
            submitError,
            form,
            submitting,
            pristine,
            values,
          }) => (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    component={TextFieldAdapter}
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    disabled={isUserSetting}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextFieldAdapter}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    disabled={isUserSetting}
                  />
                </Grid>
                {submitError && (
                  <Grid item xs={12}>
                    <Alert severity="error">{submitError} </Alert>
                  </Grid>
                )}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isUserSetting}
              >
                Sign In
              </Button>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Forgot password?"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        />
      </Box>
    </Container>
  );
};
