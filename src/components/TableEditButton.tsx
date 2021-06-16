import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React, { FC, useState } from "react";
import DialogProjectEdit from "./DialogProjectEdit";

interface Props {
  url?: string;
  id?: string;
  // onUpdate?: (update: boolean) => void;
  setUpdate: (state: boolean) => void;
}

const TableEditButton: FC<Props> = ({ url, id, setUpdate }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();

  const handleClickOpen = async () => {
    const fetchedData = await loadData();
    setData(fetchedData);
    setOpen(true);
  };

  const loadData = async () => {
    const uri = `${url}/${id}`;
    const fetchedData = await fetch(uri).then((res) => res.json());
    return fetchedData;
  };

  const updateData = (data) => {
    const uri = `${url}/${id}`;
    fetch(uri, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.log(err.message);
    });
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <DialogProjectEdit
        onSubmit={(data) => {
          updateData(data);
          setUpdate(true);
        }}
        open={open}
        setOpen={setOpen}
        data={data}
      />
    </div>
  );
};

export default TableEditButton;
