import { Field } from "react-final-form";

export const FileField = ({ name, ...props }) => (
  <Field name={name}>
    {({ input: { value, onChange, ...input } }) => (
      <input
        {...input}
        type="file"
        onChange={({ target }) => onChange(target.files)}
        {...props}
      />
    )}
  </Field>
);
