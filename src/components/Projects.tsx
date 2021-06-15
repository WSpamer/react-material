import React, { useState } from 'react'
import FormProjectCreate from "./FormProjectCreate";
// import SearchProject from "./components/SearchProject";
import TableProjects from "./TableProjects";

function Projects() {

  const [rows, setRows] = useState([
    {
      projectId: "1",
      projectName: "Ludzville N1",
      companyName: "Verdun",
      site: "Ludzville",
      areaManager: "Ludzville",
      designType: "Gen4"
    }
  ]);
	return (
		<div>
			<FormProjectCreate 
            onSubmit={data => {
              setRows(currentRows => [
                {
                  id: '2',
                  ...data
                },
                ...currentRows
              ]);
            }}
          />
        <TableProjects rows={rows} />

		</div>
	)
}

export default Projects
