import * as React from "react";
import { Form, Field } from "react-final-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { switchAuthForms } from "../features-store/auth/auth.actions";
import fetchDB from "../features-store/utils/fetchHandler";

const TextFieldAdapter = ({ input, meta, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    // onChange={(event, value) => input.onChange(value)}
    errortext={meta.touched ? meta.error : ""}
  />
);
const required = (value) => (value ? undefined : "Required");

const theme = createTheme();

export default function SignUpForm() {
  const dispatch = useDispatch();

  const changeFormHandler = () => {
    dispatch(switchAuthForms());
  };

  function signup(values) {
    console.log(values);

    return fetchDB("register", {
      method: "POST",
      mode: "no-cors",
      body: {
        username: values.username,
        email: values.email,
        password: values.password,
      },
    });
  }

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
            Sign up
          </Typography>
          <Form
            onSubmit={signup}
            validate={(values) => {
              const errors = {};
              if (!values.username) {
                errors.username = "Required";
              }
              if (!values.password) {
                errors.password = "Required";
              }
              if (!values.confirm) {
                errors.confirm = "Required";
              } else if (values.confirm !== values.password) {
                console.log("mismatch");
                errors.confirm = "Must match";
              }
              return errors;
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
                    <div>
                      <Field
                        component={TextFieldAdapter}
                        validate={required}
                        autoComplete="Noname"
                        name="username"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        autoFocus
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <Field
                        component={TextFieldAdapter}
                        validate={required}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <Field
                        component={TextFieldAdapter}
                        validate={required}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <Field
                        component={TextFieldAdapter}
                        validate={required}
                        required
                        fullWidth
                        name="confirm"
                        label="Confirm password"
                        type="password"
                        id="confirm"
                        autoComplete="new-password"
                      />
                    </div>
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
                      href="#"
                      variant="body2"
                      onClick={() => {
                        changeFormHandler();
                      }}
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
    </ThemeProvider>
  );
}
