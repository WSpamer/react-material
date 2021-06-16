import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import TableDeleteButton from "./TableDeleteButton";
import TableEditButton from "./TableEditButton";
import TablePaginationActions from "./TablePaginationActions";
import TableProjectsMenu from "./TableProjectsMenu";
import SearchField from "./SearchField";

interface Props {
  rows: Array<{
    id: string;
    projectName: string;
    companyName: string;
    site: string;
    areaManager: string;
    designType: string;
  }>;
}

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  cellBtn: {
    maxWidth: 50,
    padding: 0.5,
  },
});

export default function TableProjects({ rows }: Props) {
  const classes = useStyles();
  const url = "http://localhost:8000/projects";
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filter, setFilter] = useState([]);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer>
      <Toolbar>
        <Typography variant="h6">Projects</Typography>
        <SearchField />
      </Toolbar>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Project Name</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Site</TableCell>
            <TableCell align="center">Area Manager</TableCell>
            <TableCell align="center">Design</TableCell>
            <TableCell align="center">Actions</TableCell>
            <TableCell align="center" className={classes.cellBtn}></TableCell>
            <TableCell align="center" className={classes.cellBtn}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.projectName}</TableCell>
              <TableCell align="center">{row.companyName}</TableCell>
              <TableCell align="center">{row.site}</TableCell>
              <TableCell align="center">{row.areaManager}</TableCell>
              <TableCell align="center">{row.designType}</TableCell>
              <TableCell align="center">
                <TableProjectsMenu />
              </TableCell>
              <TableCell
                size="small"
                align="center"
                className={classes.cellBtn}
              >
                <TableEditButton url={url} id={row.id} />
              </TableCell>
              <TableCell
                size="small"
                align="center"
                className={classes.cellBtn}
              >
                <TableDeleteButton id={row.id} />
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
