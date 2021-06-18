import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../components/Navbar";
import TableProjects from "../components/Table/TableProjects";
import { useFetch } from "../hooks/useFetch";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  title: {
    flexGrow: 1,
  },

  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export const ProjectsContext = React.createContext(null);

function Projects() {
  const url = "http://localhost:8000/projects";
  const { data, loading } = useFetch(url);
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Container maxWidth="md" className={classes.container}>
        <ProjectsContext.Provider value={data}>
          <TableProjects url={url} />
        </ProjectsContext.Provider>
      </Container>
    </div>
  );
}

export default Projects;
