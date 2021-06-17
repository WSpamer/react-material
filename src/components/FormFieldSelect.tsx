import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from "@material-ui/core";
import React, { FC, useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
      width: "100%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

interface Props {
  id: string;
  label: string;
  options: Array<{
    id: string;
    text: string;
    value: string;
  }>;
}

interface IconfigSelect {
  select: boolean;
  variant: string;
  fullwidth: boolean;
}

const FormFieldSelect: FC<Props> = ({ id, label, options }) => {
  const [value, setValue] = useState("None");
  // const [isChanging, setIsChanging] = useState(false);
  const classes = useStyles();

  const configSelect = {
    select: true,
    variant: "outlined",
    fullwidth: true,
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
    console.log(value);
  };

  // 	useEffect(() => {
  // 		const loadData = () => {
  // 			 [..]
  // 		};
  // 		loadData();
  // }, []);

  return (
    <div>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id={id}
          name={id}
          value={value}
          onChange={handleChange}
          label={label}
        >
          {options.length ? (
            options.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.text}
              </MenuItem>
            ))
          ) : (
            <MenuItem>loading...</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default FormFieldSelect;
{
  /* ;<MenuItem value={option.value}>{option.text}</MenuItem>; */
}
