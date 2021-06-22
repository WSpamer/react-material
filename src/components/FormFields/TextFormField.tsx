import { createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import { FieldProps, getIn } from "formik";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginRight: "auto",
      marginLeft: "auto",
    },
  })
);

export const TextFormField: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      margin="normal"
      variant="outlined"
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};
