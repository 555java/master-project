import * as React from "react";
import { Form, Field } from "react-final-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import { TextFieldAdapter } from "./TextFieldAdapter";

export default function SignUpForm({ toggleFormType }) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
            console.log(values);
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
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
                  <Link
                    component={RouterLink}
                    to="/signin"
                    variant="body2"
                    onClick={toggleFormType}
                  >
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
