import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import useTextField from "../../hooks/useTextField";
import { useDispatch, useSelector } from "react-redux";
import {
  loadLoanData,
  setTotalInterestPayable,
} from "../../redux/slices/controlSlice";
import calculater from "../../helpers/calculater";

const getFreshModel = () => ({
  loan: 0,
  loanInterestRate: 0,
  loanTerm: 0,
  monthlyPayment: 0,
  floatingInterest: 0,
  numberOfPreferentialYears: 0,
});

export default function LoanControl(props) {
  const dispatch = useDispatch();
  const totalInterestPayable = useSelector(
    (state) => state.control.totalInterestPayable
  );
  const { values, errors, setErrors, handleInputChange } =
    useTextField(getFreshModel);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const result = calculater.getLoanData(
                                Number(values.loan),
                                Number(values.loanInterestRate),
                                Number(values.loanTerm),
                                Number(values.monthlyPayment),
                                Number(values.floatingInterest),
                                Number(values.numberOfPreferentialYears));
    console.log(result)
    dispatch(loadLoanData(result.data));
    dispatch(setTotalInterestPayable(result.totalInterest));
  };
  const validate = () => {
    let tempModel = {};
    tempModel.loan = values.loan > 0 ? "" : "This field must be positive ";
    tempModel.loanInterestRate =
      values.loanInterestRate > 0 ? "" : "This field must be positive ";
    tempModel.loanTerm =
      values.loanTerm > 0 ? "" : "This field must be positive ";
    tempModel.monthlyPayment =
      values.loanTerm > 0 ? "" : "This field must be positive ";
    setErrors(tempModel);
    return Object.values(tempModel).every((x) => x === "");
  };
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      width="97%"
      style={{ marginBottom: 20 }}
    >
      <TextField
        style={{ margin: 3 }}
        label="Tiền vay (vnd)"
        name="loan"
        variant="outlined"
        value={values.loan}
        onChange={handleInputChange}
        {...(errors.loan && { error: true, helperText: errors.loan })}
      ></TextField>
      <TextField
        style={{ margin: 3, width: "7%" }}
        label="lãi suất (%)"
        name="loanInterestRate"
        variant="outlined"
        value={values.loanInterestRate}
        onChange={handleInputChange}
        {...(errors.loanInterestRate && {
          error: true,
          helperText: errors.loanInterestRate,
        })}
      ></TextField>
      <TextField
        style={{ margin: 3, width: "7%" }}
        label="thời hạn vay (năm)"
        name="loanTerm"
        variant="outlined"
        value={values.loanTerm}
        onChange={handleInputChange}
        {...(errors.loanTerm && { error: true, helperText: errors.loanTerm })}
      ></TextField>
      <TextField
        style={{ margin: 3}}
        label="Trả hàng tháng"
        name="monthlyPayment"
        variant="outlined"
        value={values.monthlyPayment}
        onChange={handleInputChange}
        {...(errors.monthlyPayment && { error: true, helperText: errors.monthlyPayment })}
      ></TextField>
      <TextField
      style={{ margin: 3, width: "7%" }}
        label="Number of preferential years"
        name="numberOfPreferentialYears"
        variant="outlined"
        value={values.numberOfPreferentialYears}
        onChange={handleInputChange}
      ></TextField>
      <TextField
        style={{ margin: 3, width: "10%" }}
        label="Floating Interest (%)"
        name="floatingInterest"
        variant="outlined"
        value={values.floatingInterest}
        onChange={handleInputChange}
      ></TextField>
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
        label="Total Interest Payable (vnd)"
        name="totalInterestPayable"
        variant="standard"
        value={totalInterestPayable}
        color="success"
        focused
      ></TextField>
    </Grid>
  );
}
