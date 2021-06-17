import Paper from "@material-ui/core/Paper";
import React from "react";
import TableProjects from "../components/Table/TableProjects";

function Projects() {
  const url = "http://localhost:8000/projects";

  return (
    <div>
      <Paper>
        <TableProjects url={url} />
      </Paper>
    </div>
  );
}

export default Projects;
