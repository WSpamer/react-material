import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Props {
  rows: Array<{
    projectId: string,
    projectName: string,
    site: string,
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
            <TableCell>Site</TableCell>
            <TableCell>Design</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.projectId}>
              <TableCell>{row.projectId}</TableCell>
              <TableCell>{row.projectName}</TableCell>
              <TableCell>{row.site}</TableCell>
              <TableCell>{row.designType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
