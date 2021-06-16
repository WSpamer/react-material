import React from "react";
import { FC } from "react";
import { Form, Formik, Field } from "formik";
import FormFieldText from "./FormFieldText";
import { Button, DialogActions } from "@material-ui/core";

interface Values {
  projectName: string;
  companyName: string;
  site: string;
  areaManager: string;
  designType: string;
}

interface Props {
  onSubmit: (values: Values) => void;
  handleClose: () => void;
  data?: Values;
}

const FormProjectDetails: FC<Props> = ({ onSubmit, handleClose, data }) => {
  const defaultFormValues = {
    projectName: "",
    companyName: "",
    site: "",
    areaManager: "",
    designType: "",
  };

  return (
    <div>
      <Formik
        initialValues={data ? data : defaultFormValues}
        onSubmit={(values: Values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid-form">
            <Field
              name="projectName"
              label="Project Name"
              component={FormFieldText}
            />
            <Field
              name="companyName"
              label="Company"
              component={FormFieldText}
            />
            <Field name="site" label="Site" component={FormFieldText} />
            <Field
              name="areaManager"
              label="Area Manager"
              component={FormFieldText}
            />
            <Field label="Design" name="designType" component={FormFieldText} />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormProjectDetails;
