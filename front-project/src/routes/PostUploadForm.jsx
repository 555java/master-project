import * as React from "react";
import { Form, Field } from "react-final-form";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import { TextFieldAdapter } from "../components/TextFieldAdapter";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle, Typography } from "@mui/material";
import { addPostThunk } from "../features-store/posts/posts.thunks";
import { getUserId } from "../features-store/auth/auth.selectors";

export default function PostUploadForm() {
  const authorId = useSelector(getUserId);
  const dispatch = useDispatch();
  const isDisabled = !authorId;
  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 8 }}>
      <Form
        onSubmit={(values) => {
          const errors = {};
          if (!values.description) {
            errors.description = "Please, fill the description!";
          }
          if (!values.title) {
            errors.title = "Please, fill the title!";
          }
          if (Object.keys(errors).length) {
            console.log(errors);
            return errors;
          }
          return dispatch(
            addPostThunk({
              authorId: authorId,
              description: values.description,
              title: values.title,
            })
          );
        }}
        render={({ handleSubmit, submitError }) => (
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              rowSpacing={{ xs: 2 }}
            >
              <Grid>
                <Typography
                  variant="h5"
                  component="h3"
                  color="primary"
                  sx={{ mb: 3, mt: 3, fontWeight: "bold" }}
                >
                  Create new post
                </Typography>
              </Grid>
              <Grid xs={10}>
                <Button
                  disabled={isDisabled}
                  fullWidth
                  variant="outlined"
                  component="label"
                >
                  Upload File
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Grid>
              <Grid xs={10}>
                <Field
                  disabled={isDisabled}
                  component={TextFieldAdapter}
                  fullWidth
                  name="title"
                  label="Title"
                  id="title"
                  autoComplete="New title"
                />
              </Grid>
              <Grid xs={10}>
                <Field
                  disabled={isDisabled}
                  component={TextFieldAdapter}
                  fullWidth
                  name="description"
                  label="Write something to share with your friends!"
                  multiline
                  rows={4}
                  id="description"
                  autoComplete="New post"
                />
              </Grid>
              {submitError && <Alert severity="error">{submitError} </Alert>}
              <Grid xs={8}>
                {authorId ? (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    Upload
                  </Button>
                ) : (
                  <Grid>
                    <Alert severity="info">
                      <AlertTitle>Info</AlertTitle>
                      <strong>Log to create post!</strong>
                    </Alert>
                    <Button
                      component={RouterLink}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 1, mb: 2 }}
                      to="/signin"
                    >
                      Go to sign in
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Box>
        )}
      />
    </Container>
  );
}
