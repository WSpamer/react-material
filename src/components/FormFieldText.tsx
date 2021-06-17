import { FormControl, TextField } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField/TextField";
import { FieldProps } from "formik";
import * as React from "react";

const FormFieldText: React.FC<FieldProps & TextFieldProps> = ({
  id,
  label,
  field,
}) => {
  return (
    <FormControl>
      <TextField label={label} id={id} variant="outlined" {...field} />;
    </FormControl>
  );
};

export default FormFieldText;
