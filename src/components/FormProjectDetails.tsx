import { Button, DialogActions } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import * as yup from "yup";
import { SelectFormField } from "./FormFields/SelectFormField";
import { TextFormField } from "./FormFields/TextFormField";
import FormFieldText from "./FormFieldText";

interface FormValues {
  projectName: string;
  companyName: string;
  site: string;
  areaManager: string;
  designType: string;
}

const designTypes = [
  { label: "Platdak", value: "Platdak" },
  { label: "Gen 4", value: "Gen 4" },
];

const initialValues: FormValues = {
  projectName: "",
  companyName: "",
  site: "",
  areaManager: "",
  designType: "",
};

let FormSchema = yup.object().shape({
  projectName: yup.string().required().min(3, "Too Short"),
  companyName: yup.string().required().min(1),
  site: yup.string().required(),
  areaManager: yup.string().required(),
  designType: yup.string().required(),
});
interface Props {
  onSubmit: (values: FormValues) => void;
  handleClose: () => void;
  data?: FormValues;
}

const FormProjectDetails: FC<Props> = ({ onSubmit, handleClose, data }) => {
  return (
    <div>
      <Formik
        initialValues={data ? data : initialValues}
        validationSchema={FormSchema}
        onSubmit={(values: FormValues, { validateField }) => {
          onSubmit(values);
        }}
      >
        {({ values }) => (
          <Form className="grid-form">
            <Field
              name="projectName"
              label="Project Name"
              component={TextFormField}
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
            <Field
              name="designType"
              label="Design"
              options={designTypes}
              component={SelectFormField}
            />
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
