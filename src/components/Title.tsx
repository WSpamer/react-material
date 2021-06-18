import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: "#90caf9",
    },
  })
);
export default function Title(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal;
}) {
  const classes = useStyles();
  return (
    <Typography
      component="h2"
      variant="h6"
      className={classes.title}
      gutterBottom
    >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
