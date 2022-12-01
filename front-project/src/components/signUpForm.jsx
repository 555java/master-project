import * as React from "react";
import { Form, Field } from "react-final-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import { TextFieldAdapter } from "./TextFieldAdapter";
import { useDispatch } from "react-redux";
import { signUpUserThunk } from "../features-store/auth/auth.thunks";
import { Alert } from "@mui/material";

export default function SignUpForm({ toggleFormType }) {
  const dispatch = useDispatch();
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
          Sign up
        </Typography>
        <Form
          onSubmit={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Username required";
            }
            if (!values.email) {
              errors.email = "email required";
            }
            if (!values.password) {
              errors.password = "Password required";
            }
            if (!values.confirm) {
              errors.confirm = "You should confirm the password";
            } else if (values.confirm !== values.password) {
              errors.confirm = "Must match";
            }
            if (Object.keys(errors).length) {
              return errors;
            }
            return dispatch(signUpUserThunk({ ...values }));
          }}
          render={({
            submitError,
            handleSubmit,
            submitFailed,
            form,
            submitting,
            pristine,
            values,
          }) => (
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    component={TextFieldAdapter}
                    name="username"
                    autoComplete="username"
                    id="username"
                    required
                    fullWidth
                    label="Username"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    component={TextFieldAdapter}
                    autoComplete="email"
                    type="email"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextFieldAdapter}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextFieldAdapter}
                    required
                    fullWidth
                    name="confirm"
                    label="Confirm password"
                    type="password"
                    id="confirm"
                    autoComplete="new-password"
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
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link component={RouterLink} to="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        />
      </Box>
    </Container>
  );
}
