import { TextField } from "@mui/material";

export const TextFieldAdapter = ({ input, meta, helperText, ...rest }) => {
  const visibleError = !meta.modifiedSinceLastSubmit && meta.submitError;

  return (
    <TextField
      {...input}
      {...rest}
      error={Boolean(visibleError)}
      helperText={visibleError || helperText}
    />
  );
};
