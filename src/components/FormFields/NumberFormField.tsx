import { createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import { FieldProps, getIn } from "formik";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      width: "70%",
      marginRight: "auto",
      marginLeft: "auto",
    },
  })
);

export const NumberFormField: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  const classes = useStyles();

  return (
    <TextField
      className={classes.textField}
      variant="outlined"
      size="small"
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};
