import React, { FC } from "react";
import FormFieldSelect from "./FormFieldSelect";

interface Props {
  id: string;
  label: string;
}

const ProjectDesignField: FC<Props> = ({ id, label }) => {
  const options = [
    { id: "1", text: "Platdak", value: "platdak" },
    { id: "2", text: "Gen 4", value: "Gen 4" },
  ];
  return (
    <div>
      <FormFieldSelect id={id} label={label} options={options} />
    </div>
  );
};

export default ProjectDesignField;
