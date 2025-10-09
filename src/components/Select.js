import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

import { Grid, Box } from "@mui/material";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: (theme.vars ?? theme).palette.background.gray,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 2px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 12,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function CustomizedSelects() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='select'>
      <Box sx={{ p: 1 }}>
        {/* First line — one input */}
        <Grid>
          <Grid item xs={12}>
            <FormControl sx={{ mx: 3, width: "300px" }} variant='standard'>
              <InputLabel
                htmlFor='demo-customized-textbox'
                sx={{ ml: 2, mt: 2, width: "300px" }}
              >
                Search...
              </InputLabel>
              <BootstrapInput id='demo-customized-textbox' />
            </FormControl>
          </Grid>
        </Grid>

        {/* Second line — two inputs side by side */}
        <Grid container spacing={2} sx={{ borderRadius: 2 }}>
          <Grid item xs={6}>
            <FormControl sx={{ mx: 3, width: "160px" }} variant='standard'>
              <InputLabel
                id='demo-customized-select-label'
                sx={{
                  ml: 2,
                  mt: 3,
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  fontColor: "#263238",
                }}
              >
                Date Type
              </InputLabel>
              <Select
                labelId='demo-customized-select-label'
                id='demo-customized-select'
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Select Type</MenuItem>
                <MenuItem value={20}>Assigned Date</MenuItem>
                <MenuItem value={30}>Completed Date</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ width: "160px" }} variant='standard'>
              <InputLabel
                htmlFor='demo-customized-select-native'
                sx={{ ml: 2, mt: 2 }}
              >
                My Location
              </InputLabel>
              <NativeSelect
                id='demo-customized-select-native'
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option aria-label='None' value='' />
                <option value={10}>My Locations</option>
                <option value={20}>All Locations</option>
                {/* <option value={30}>Thirty</option> */}
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
