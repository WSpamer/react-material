import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import Dashboard from "../components/Dashboard";
import ProjectDetails from "../components/ProjectDetails";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 440,
  },
}));

export default function ProjectStatus() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <Dashboard>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={fixedHeightPaper}>
              <ProjectDetails />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}></Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            {" "}
            <Paper className={classes.paper}>{/* <Deposits /> */}</Paper>
          </Grid>
        </Grid>
      </Dashboard>
    </div>
  );
}
