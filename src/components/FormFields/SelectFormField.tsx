import {
  FormControl,
  FormHelperText,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { FieldProps, getIn } from "formik";
import React from "react";

export const SelectFormField: React.FC<
  FieldProps & {
    label?: string;
    options: Array<{ label: string; value: string }>;
  }
> = ({ field, form, label, options, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <FormControl fullWidth error={!!errorText}>
      <TextField
        label={label}
        select
        variant="outlined"
        margin="normal"
        {...field}
        {...props}
      >
        {options.map((op) => (
          <MenuItem key={op.value} value={op.value}>
            {op.label}
          </MenuItem>
        ))}
      </TextField>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};
