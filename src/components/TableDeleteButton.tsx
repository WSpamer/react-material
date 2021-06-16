import React, { FC } from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  id?: string;
}

const TableDeleteButton: FC<Props> = ({ id }) => {
  const deleteMethod = {
    method: "DELETE", // Method itself
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const handleClickDelete = (id: string) => {
    const url = "http://localhost:8000/projects";
    const uri = `${url}/${id}`;
    fetch(uri, deleteMethod)
      .then((response) => response.json())
      .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
      .catch((err) => console.log(err)); // Do something with the error
  };

  return (
    <div>
      <IconButton onClick={() => handleClickDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TableDeleteButton;
