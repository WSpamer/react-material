import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import TableProjectsMenu from "./TableProjectsMenu";



interface Props {
  rows: Array<{
    projectId: string,
    projectName: string,
    companyName: string,
    site: string,
    areaManager: string,
    designType: string,
  }>;
}

export default function TableProjects({ rows }: Props) {

    return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Site</TableCell>
            <TableCell>Area Manager</TableCell>
            <TableCell>Design</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
          
        </TableHead>
        
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.projectId}>
              <TableCell>{row.projectId}</TableCell>
              <TableCell>{row.projectName}</TableCell>
              <TableCell>{row.companyName}</TableCell>
              <TableCell>{row.site}</TableCell>
              <TableCell>{row.areaManager}</TableCell>
              <TableCell>{row.designType}</TableCell>
              <TableCell><TableProjectsMenu/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
