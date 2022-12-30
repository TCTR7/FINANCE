import React from "react";
import {
  Button,
  Grid,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  getMenuItemUtilityClass,
} from "@mui/material";
import useTextField from "../../hooks/useTextField";
import { useDispatch, useSelector } from "react-redux";
import {
  loadDepositData,
  setTotalDepositInterest,
  setDepositType
} from "../../redux/slices/controlSlice";
import calculater from "../../helpers/calculater";
import Constants from "../../helpers/constants";

const getFreshModel = () => ({
  deposit: 0,
  depositInterestRate: 0,
  depositTerm: 0,
  depositType: ""
});

export default function DepositControl(props) {
  const dispatch = useDispatch();
  const { totalDepositInterest, depositType } = useSelector(
    (state) => state.control
  );
  const { values, errors, setErrors, handleInputChange } =
    useTextField(getFreshModel);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const result = calculater.getDepositData(
      Number(values.deposit),
      Number(values.depositInterestRate / 100),
      Number(values.depositTerm),
      depositType
    );
    console.log(result);
    dispatch(loadDepositData(result.data));
    dispatch(setTotalDepositInterest(result.totalInterest));
  };
  const selectChangeHandle = (e) => {
    dispatch(setDepositType(e.target.value));
  }

  const getMenuItem = () => {
    const depositTypeKeys = Object.keys(Constants.DEPOSIT_TYPE)
    const menuItems = depositTypeKeys.map((item, index) => {
        return <MenuItem key={index} value={item}>{Constants.DEPOSIT_TYPE[depositTypeKeys[index]]}</MenuItem>
    })
    return menuItems;
  }
  const validate = () => {
    let tempModel = {};
    tempModel.deposit =
      values.deposit > 0 ? "" : "This field must be positive ";
    tempModel.depositInterestRate =
      values.depositInterestRate > 0 ? "" : "This field must be positive ";
    tempModel.depositTerm =
      values.depositTerm > 0 ? "" : "This field must be positive ";
    setErrors(tempModel);
    return Object.values(tempModel).every((x) => x === "");
  };
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      width="90%"
      style={{ marginBottom: 20 }}
    >
      <TextField
        style={{ margin: 5 }}
        label="Deposit (vnd)"
        name="deposit"
        variant="outlined"
        value={values.deposit}
        onChange={handleInputChange}
        {...(errors.deposit && { error: true, helperText: errors.deposit })}
      ></TextField>
      <TextField
        style={{ margin: 5 }}
        label="Deposit Interest Rate (%)"
        name="depositInterestRate"
        variant="outlined"
        value={values.depositInterestRate}
        onChange={handleInputChange}
        {...(errors.depositInterestRate && {
          error: true,
          helperText: errors.depositInterestRate,
        })}
      ></TextField>
      <TextField
        style={{ margin: 5 }}
        label="Deposit Term"
        name="depositTerm"
        variant="outlined"
        value={values.depositTerm}
        onChange={handleInputChange}
        {...(errors.depositTerm && {
          error: true,
          helperText: errors.depositTerm,
        })}
      ></TextField>
      <FormControl fullWidth variant="standard" style={{width: "15%", margin: 5}}>
        <InputLabel id="demo-simple-select-label">
          Choose a deposit type
        </InputLabel>
        <Select
          label="Calculating type"
          onChange={selectChangeHandle}
          value={depositType}
        >
            {getMenuItem()}
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        size="large"
        onClick={onSubmitHandle}
      >
        Submit
      </Button>
      <TextField
        style={{ margin: "5px 5px 5px 30px" }}
        label="Total Interest (vnd)"
        name="totalInterest"
        variant="standard"
        value={totalDepositInterest}
        color="success"
        focused
      ></TextField>
    </Grid>
  );
}
