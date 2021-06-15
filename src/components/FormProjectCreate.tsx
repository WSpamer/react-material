import React from "react";
import {FC} from "react";
import { Button, TextField } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import FormFieldText from "./FormFieldText";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';


interface Values {
  projectId: string;
  projectName: string;
  site: string;
  designType: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}


const FormProjectCreate: FC<Props> = ({ onSubmit }) => {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="search-group mb-3 w-75">
      <TextField id="standard-basic" label="Search..." size="small" />
      <Button variant="outlined" color="primary" className="btn" onClick={handleClickOpen}>
      Add Project
      </Button>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Project</DialogTitle>
        <DialogContent>
        <Formik
      initialValues={{ projectId: "", projectName: "", site: "", designType: "" }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values }) => (
        <Form className="grid-form">
            <Field
              name="projectId"
              label="Project ID"
              component={FormFieldText}
            />
            <Field
              name="projectName"
              label="Project Name"
              component={FormFieldText}
            />
            <Field
              name="site"
              label="Site"
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
        </DialogContent>
        
      </Dialog>
    </div>
  );
}

export default FormProjectCreate;
