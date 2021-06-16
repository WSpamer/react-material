import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import DialogProjectCreate from "./DialogProjectCreate";
import TableProjects from "./TableProjects";
import { useFetchHook } from "../hooks/useFetchHook";

function Projects() {
  const [rows, setRows] = useState([]);
  const [update, setUpdate] = useState(false);
  const url = "http://localhost:8000/projects";
  const [result, error, isLoading] = useFetchHook({ url });

  const fetchProjects = (url: string) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRows(data));
  };

  useEffect(() => {
    fetchProjects(url);
    if (update) {
      setUpdate(false);
    }
  }, [update]);
  return (
    <div>
      <DialogProjectCreate
        onSubmit={(data) => {
          fetch(url, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(data),
          }).catch((err) => {
            console.log(err.message);
          });

          setUpdate(true);
          alert(result);
        }}
      />
      <Paper>
        <TableProjects rows={rows} />
      </Paper>
    </div>
  );
}

export default Projects;
