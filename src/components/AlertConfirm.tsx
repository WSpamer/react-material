import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { FC } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    deleteBtn: {
      backgroundColor: theme.palette.error.main,
    },
    btnSection: {
      display: "flex",
      justifyContent: "center",
    },
    dialogTitle: {
      width: 300,
      textAlign: "center",
    },
  })
);

interface Props {
  open: boolean;
  setOpen: (state: boolean) => void;
  setConfirm: (state: boolean) => void;
  title: string;
}

const AlertConfirm: FC<Props> = ({ open, setOpen, setConfirm, title }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setConfirm(true);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
          {title}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions className={classes.btnSection}>
          <Button
            onClick={handleConfirm}
            color="secondary"
            variant="contained"
            type="submit"
            autoFocus
            className={classes.deleteBtn}
          >
            Agree
          </Button>
          <Button onClick={handleClose} type="submit" color="primary">
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertConfirm;
