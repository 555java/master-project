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
import { addPostThunk } from "../features-store/post/post.thunks";
import { getUserId, getUserName } from "../features-store/auth/auth.selectors";
import { FileField } from "../components/FileFieldAdapter";
import { getIsPostUploading } from "../features-store/post/post.selectors";

export default function PostUploadForm() {
  const isPostUploading = useSelector(getIsPostUploading);
  const authorId = useSelector(getUserId);
  const authorUsername = useSelector(getUserName);
  const dispatch = useDispatch();
  const isDisabled = !authorId || isPostUploading;

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
          if (!values.imageFiles) {
            errors.description = "Please, upload the images";
          }
          if (Object.keys(errors).length) {
            return errors;
          }
          return dispatch(
            addPostThunk({
              authorId: authorId,
              authorUsername: authorUsername,
              description: values.description,
              title: values.title,
              images: values.imageFiles,
            })
          );
        }}
        render={({ handleSubmit, submitError }) => (
          <Box
            component="form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            noValidate
          >
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
                  <FileField
                    style={{ backgroundColor: "red" }}
                    name="imageFiles"
                    id="imageFiles"
                    label="imageFiles"
                    multiple
                    type="file"
                    hidden
                  ></FileField>
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
                    disabled={isDisabled}
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
