import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core";
import { Field, FieldProps, Form, Formik } from "formik";
import React, { FC } from "react";
import DialogButton from "./DialogButton";
import { NumberFormField } from "./FormFields/NumberFormField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    form: {
      display: "grid",
      justifyContent: "center",
    },
    container: {
      justifyContent: "center",
      marginRight: "auto",
      marginLeft: "auto",
      width: "fit-content",
      maxWidth: "400px",
    },
    btnSection: {
      display: "flex",
      justifyContent: "center",
      marginTop: "1em",
    },
    field: {
      display: "flex",
      width: "60%",
      justifyContent: "center",
    },
  })
);

const StyledTextField = withStyles({
  textField: {
    color: "red",
  },
})((props: FieldProps) => <NumberFormField {...props} />);

interface FormValues {
  blockArea: string;
  blockOmtrek: string;
  blockLengte: string;
  blockBreedte: string;
  blockRy: string;
  blockDwars: string;
  blockHoeke: string;
  blockHeight: string;
}

const initialValues: FormValues = {
  blockArea: "",
  blockOmtrek: "",
  blockLengte: "",
  blockBreedte: "",
  blockRy: "",
  blockDwars: "",
  blockHoeke: "",
  blockHeight: "",
};

const fields = {
  blockArea: "Area",
  blockOmtrek: "Omtrek",
  blockLengte: "Lengte",
  blockBreedte: "Breedte",
  blockRy: "Ry",
  blockDwars: "Dwars",
  blockHoeke: "Hoeke",
  blockHeight: "Height",
};

interface Props {
  onSubmit: (values: FormValues) => void;
  handleClose?: () => void;
  data?: FormValues;
}

const FormProjectMeasurements: FC<Props> = ({
  onSubmit,
  handleClose,
  data,
}) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.container}>
      <CardHeader title="Measurements" />

      <CardContent>
        <Formik
          initialValues={data ? data : initialValues}
          // validationSchema={FormSchema}
          onSubmit={(values: FormValues, { validateField }) => {
            onSubmit(values);
          }}
        >
          {({ values }) => (
            <Form className={classes.form}>
              <div>
                <div className="grid-form">
                  <Field
                    name="blockArea"
                    label="Area"
                    component={NumberFormField}
                  />
                  <Field
                    name="blockOmtrek"
                    label="Omtrek"
                    component={NumberFormField}
                  />
                  <Field
                    name="blockLengte"
                    label="Lengte"
                    component={NumberFormField}
                  />
                  <Field
                    name="blockBreedte"
                    label="Breedte"
                    component={NumberFormField}
                  />
                  <Field
                    name="blockRy"
                    label="Ry"
                    component={NumberFormField}
                  />
                  <Field
                    name="blockDwars"
                    label="Dwars"
                    component={NumberFormField}
                  />
                  <Field
                    name="blockHoeke"
                    label="Hoeke"
                    component={NumberFormField}
                  />
                  <Field
                    name="blockHeight"
                    label="Height"
                    component={NumberFormField}
                  />
                </div>
                <div className={classes.btnSection}>
                  <DialogButton handleClose={handleClose} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default FormProjectMeasurements;
// export {};
