import * as React from "react";
import { FieldProps } from "formik";
import { TextField } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField/TextField";

const FormFieldText: React.FC<FieldProps & TextFieldProps> = ({
  id,
  label,
  field
}) => {
  return (
      <TextField size="medium" label={label} id={id} variant="outlined" {...field} />
  );
};

export default FormFieldText;
{/* <TextField
        id="projectId"
        name="projectId"
        value={formik.values.projectId}
        label="Project ID"
        variant="outlined"
        onChange={formik.handleChange}
      /> */}