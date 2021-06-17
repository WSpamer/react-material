import { Card } from "@material-ui/core";
import React from "react";
import FormProjectMeasurements from "../components/FormProjectMeasurements";

const ProjectForm = () => {
  return (
    <div>
      <FormProjectMeasurements
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
};

export default ProjectForm;
