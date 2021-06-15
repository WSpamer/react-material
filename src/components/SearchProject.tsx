import React from "react";
import { Button, TextField } from "@material-ui/core";

function SearchProject() {
  return (
    <div className="search-group mb-3 w-75">
      <TextField
        id="searchInput"
        label="Search ..."
        variant="outlined"
        size="small"
      />

      <Button
        variant="contained"
        color="primary"
        className="btn-spacing create_project-button"
      >
        New Project
      </Button>
    </div>
  );
}

export default SearchProject;
