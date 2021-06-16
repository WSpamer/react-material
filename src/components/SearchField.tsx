import React, { FC } from "react";
import {
  createStyles,
  fade,
  InputBase,
  makeStyles,
  Theme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
      justifyContent: "center",
      alignContent: "center",
      paddingTop: theme.spacing(0),
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  })
);

interface Props {
  rows: Array<{
    id: string;
    projectName: string;
    companyName: string;
    site: string;
    areaManager: string;
    designType: string;
  }>;
  setSearch: (data: Values[]) => void;
}

interface Values {
  projectName: string;
  companyName: string;
  site: string;
  areaManager: string;
  designType: string;
}

const SearchField: FC<Props> = ({ rows, setSearch }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    const text = event.target.value;
    const data = searchData(text);
    setSearch(data);
  };
  const searchData = (text: string) => {
    const searchInput = text.toString().toLowerCase().trim();
    const searchWords = searchInput.split(/\s+/);
    const searchColumns = ["projectName", "companyName"];
    var resultsArray =
      searchInput === ""
        ? rows
        : rows.filter((r) => {
            return searchWords.every((word) => {
              return searchColumns.some((colName) => {
                return r[colName].toString().toLowerCase().indexOf(word) !== -1;
              });
            });
          });
    return resultsArray;
  };
  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={handleChange}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </>
  );
};

export default SearchField;
export { useStyles };
