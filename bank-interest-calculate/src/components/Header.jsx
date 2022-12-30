import React from "react";
import { Grid, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Constant from "../helpers/constants";
import { setCalculatingType } from "../redux/slices/headerSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const calculatingType = useSelector((state) => state.header.calculatingType);
  const handleChange = (e) => {
    dispatch(setCalculatingType(e.target.value));
  };
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      width="95%"
      padding={5}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item md={9}>
        <header>
          <h1>Finance Interest Calculate</h1>
        </header>{" "}
      </Grid>
      <Grid item md={3}>
        <FormControl fullWidth variant="standard">
          <InputLabel id="demo-simple-select-label">Choose a calculating type</InputLabel>
          <Select
            label="Calculating type"
            onChange={handleChange}
            value={calculatingType}
          >
            <MenuItem value={Constant.CALCULATING_LOAN_INTEREST}>
              Calculating loan interest
            </MenuItem>
            <MenuItem value={Constant.CALCULATING_DEPOSIT_INTEREST}>
              Calculate deposit interest
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
