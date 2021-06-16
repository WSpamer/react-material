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
  data?: Values;
  setOpen: (state: boolean) => void;
  open: boolean;
}

const DialogProjectEdit: FC<Props> = ({ onSubmit, data, open, setOpen }) => {
  // const [open, setOpen] = React.useState(openState);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Project</DialogTitle>
        <DialogContent>
          <FormProjectDetails
            onSubmit={onSubmit}
            handleClose={handleClose}
            data={data}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogProjectEdit;
