import { Card } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useEffect, useState } from "react";
import DialogProjectCreate from "../DialogProjectCreate";
import SearchField from "../SearchField";
import Title from "../Title";
import TableDeleteButton from "./TableDeleteButton";
import TableEditButton from "./TableEditButton";
import TablePaginationActions from "./TablePaginationActions";
import TableProjectsMenu from "./TableProjectsMenu";

interface Props {
  url: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 200,
    },
    cellBtn: {
      maxWidth: 50,
      padding: 0.5,
    },
    toolbarBtn: {
      maxWidth: 50,
    },
    searchSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
    },
    headerBtn: {
      alignItems: "center",
      justifyContent: "center",
      maxWidth: 100,
    },
  })
);
export default function TableProjects({ url }: Props) {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  const [rows, setRows] = useState([]);
  const [update, setUpdate] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState(rows);

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

  const fetchProjects = (url: string) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  };

  useEffect(() => {
    fetchProjects(url);
    if (update) {
      setUpdate(false);
    }
  }, [url, update]);

  useEffect(() => {
    setRows(search);
  }, [search]);
  useEffect(() => {
    setRows(projects);
  }, [projects]);

  return (
    <Card>
      <TableContainer>
        <Toolbar className={classes.searchSection}>
          <Title>Projects</Title>
          <SearchField rows={projects} setSearch={setSearch} />
        </Toolbar>
        <Table size="small" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Project Name</TableCell>
              <TableCell align="center">Company</TableCell>
              <TableCell align="center">Site</TableCell>
              <TableCell align="center">Area Manager</TableCell>
              <TableCell align="center">Design</TableCell>
              <TableCell align="center">Actions</TableCell>
              <TableCell
                align="center"
                colSpan={2}
                className={classes.headerBtn}
              >
                <DialogProjectCreate
                  onSubmit={(data) => {
                    fetch(url, {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json; charset=UTF-8",
                      },
                      body: JSON.stringify(data),
                    }).catch((err) => {
                      console.log(err.message);
                    });

                    setUpdate(true);
                  }}
                />
              </TableCell>
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
                  <TableEditButton
                    url={url}
                    id={row.id}
                    setUpdate={setUpdate}
                  />
                </TableCell>
                <TableCell
                  size="small"
                  align="center"
                  className={classes.cellBtn}
                >
                  <TableDeleteButton
                    url={url}
                    id={row.id}
                    setUpdate={setUpdate}
                  />
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={8} />
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
    </Card>
  );
}
