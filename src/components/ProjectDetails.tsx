import {
  Box,
  createStyles,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import { Check, Warning } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { Field, Form, Formik, useFormik } from "formik";
import React, { FC, useState } from "react";
import * as yup from "yup";
import { TextFormField } from "./FormFields/TextFormField";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "grid",
    },
  })
);

interface FormValues {
  projectName: string;
  companyName: string;
  site: string;
  areaManager: string;
  designType: string;
}
interface FormValue {
  name: string;
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

const dummyData: FormValues = {
  projectName: "Ludzville N2",
  companyName: "Verdun",
  site: "Ludzville",
  areaManager: "Herman",
  designType: "Platdak",
};

interface ListFieldProps {
  label: string;
  name: string;
  value: string;
}

interface CustomeFieldProps {
  label: string;
  handleEdit: () => void;
  props: any;
}

const CustomeField = ({ label, id, value }) => {
  const data = dummyData;
  const formik = useFormik({
    initialValues: {
      id: "value",
    },
    onSubmit: (value) => {},
  });

  return <TextField label={label} autoFocus fullWidth variant="outlined" />;
};
const ListField: FC<ListFieldProps> = ({ label, name, value }) => {
  const [showField, setShowField] = useState(false);
  const [save, setSave] = useState(false);

  const handleEdit = () => {
    setShowField(!showField);
  };

  const initialValue = {};
  initialValue[name] = value;
  const handleInput = () => {
    // TODO: add validation logic
    const isValid = true;
    if (isValid) {
    }
    setShowField(!showField);
  };

  return (
    <ListItem>
      <>
        <ListItemIcon>
          {!value && <Warning color="error" />}
          {value && <Check color="primary" />}
        </ListItemIcon>
      </>
      {showField && (
        <Formik
          initialValues={initialValue}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              actions.setSubmitting(false);
            }, 1000);
            handleEdit();
          }}
        >
          {(props) => (
            <Form>
              <Field
                name={name}
                label={label}
                autoFocus
                fullWidth
                variant="outlined"
                // onBlur={() => handleInput()}
                type="text"
                component={TextFormField}
              />

              <ListItemSecondaryAction>
                <Box clone mr={7}>
                  <IconButton type="submit">
                    <SaveIcon />
                  </IconButton>
                </Box>
              </ListItemSecondaryAction>
            </Form>
          )}
        </Formik>
      )}
      {!showField && (
        <>
          <ListItemText
            primary={`${label}`}
            secondary={value ? value : `Missing ${label}`}
          />
        </>
      )}
      {!showField && (
        <ListItemSecondaryAction>
          <Box clone mr={7}>
            <IconButton onClick={() => handleEdit()}>
              <EditIcon />
            </IconButton>
          </Box>
        </ListItemSecondaryAction>
      )}
      {/* <Button onClick={() => setVerified(!verified)}>Test Verified</Button> */}
    </ListItem>
  );
};

const ProjectDetails = () => {
  const classes = useStyles();
  const data = dummyData;

  const field = {
    label: "Project Name",
    id: "projectName",
    value: "Ludzville",
  };

  const [showField, setShowField] = useState(false);
  const [verified, setVerified] = useState(false);
  return (
    <div>
      <List disablePadding>
        <ListField
          label="Project Name"
          name="projectName"
          value={data.projectName}
        />
        <ListField
          label="Company"
          name="companyName"
          value={data.companyName}
        />
        <ListField label="Site" name="site" value={data.site} />
        <ListField
          label="Area Manager"
          name="areaManager"
          value={data.areaManager}
        />
        <ListField label="Design" name="designType" value={data.designType} />
      </List>
    </div>
  );
};

export default ProjectDetails;
