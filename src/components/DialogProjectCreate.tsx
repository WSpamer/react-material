import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { FC } from "react";
import FormProjectDetails from "./FormProjectDetails";

interface Values {
  projectName: string;
  companyName: string;
  site: string;
  areaManager: string;
  designType: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const DialogProjectCreate: FC<Props> = ({ onSubmit }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="search-group">
        <Button
          variant="contained"
          color="primary"
          className="btn"
          onClick={handleClickOpen}
        >
          New Project
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Project</DialogTitle>
        <DialogContent>
          <FormProjectDetails onSubmit={onSubmit} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogProjectCreate;
