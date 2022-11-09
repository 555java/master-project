import * as React from "react";
import { Form, Field } from "react-final-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const TextFieldAdapter = ({ input, meta, ...rest }) => {
  const visibleError = !meta.modifiedSinceLastSubmit && meta.submitError;

  return (
    <TextField
      {...input}
      {...rest}
      error={Boolean(visibleError)}
      helperText={visibleError}
    />
  );
};

const theme = createTheme();

export default function SignInForm() {
  return (
    <ThemeProvider theme={theme}>
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
            Sign in
          </Typography>
          <Form
            onSubmit={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email required";
              }
              if (!values.password) {
                errors.password = "Password required";
              }
              console.log(errors);
              if (Object.keys(errors).length) {
                return errors;
              }
              console.log(values);
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
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
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
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
                    />
                  </Grid>
                </Grid>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
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
    </ThemeProvider>
  );
}
