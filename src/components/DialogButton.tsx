import { DialogActions, Button } from "@material-ui/core";
import React, { FC } from "react";

interface Props {
  handleClose?: () => void;
}

const DialogButton: FC<Props> = ({ handleClose }) => {
  const handleClick = () => {
    if (handleClose) {
      handleClose();
    }
  };
  return (
    <div className="form-button-row">
      <Button
        onClick={handleClick}
        type="submit"
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
      <Button onClick={handleClick} color="secondary" variant="contained">
        Cancel
      </Button>
    </div>
  );
};

export default DialogButton;
