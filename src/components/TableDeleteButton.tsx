import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { FC, useEffect, useState } from "react";
import AlertConfirm from "./AlertConfirm";

interface Props {
  url?: string;
  id?: string;
  setUpdate: (state: boolean) => void;
}

const TableDeleteButton: FC<Props> = ({ url, id, setUpdate }) => {
  const [confirm, setConfirm] = useState(false);
  const [open, setOpen] = useState(false);
  const deleteMethod = {
    method: "DELETE", // Method itself
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const handleDelete = (id: string) => {
    const uri = `${url}/${id}`;
    fetch(uri, deleteMethod)
      .then((response) => response.json())
      .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
      .catch((err) => console.log(err)); // Do something with the error
  };

  useEffect(() => {
    if (confirm) {
      console.log(confirm);
      handleDelete(id);
      setUpdate(true);
    }
  }, [confirm]);

  const handleClickOpen = (id: string) => {
    if (confirm) {
      console.log(confirm);
      handleDelete(id);
    }
    // setOpen(false);
  };

  return (
    <div>
      <IconButton
        onClick={() => {
          setOpen(true);
          // handleClickOpen(id);
          setUpdate(true);
        }}
      >
        <DeleteIcon />
      </IconButton>
      <AlertConfirm open={open} setOpen={setOpen} setConfirm={setConfirm} />
    </div>
  );
};

export default TableDeleteButton;
