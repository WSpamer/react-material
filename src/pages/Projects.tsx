import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import TableProjects from "../components/TableProjects";
import { useFetchHook } from "../hooks/useFetchHook";

function Projects() {
  const url = "http://localhost:8000/projects";
  const [result, error, isLoading] = useFetchHook({ url });

  return (
    <div>
      <Paper>
        <TableProjects url={url} />
      </Paper>
    </div>
  );
}

export default Projects;
