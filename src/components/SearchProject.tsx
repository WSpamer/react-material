import React, { FC } from "react";
import { Button } from "@material-ui/core";
import SearchField from "./SearchField";

interface Props {
  handleClickOpen: () => void;
}

const SearchProject: FC<Props> = ({ handleClickOpen }) => {
  return (
    <div className="search-group">
      <SearchField />
      <Button color="primary" className="btn" onClick={handleClickOpen}>
        New Project
      </Button>
    </div>
  );
};

export default SearchProject;
