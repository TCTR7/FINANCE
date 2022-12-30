import React from "react";
import LoanControl from "./loan/LoanControl";
import DepositControl from "./deposit/DepositControl";
import Constant from "../helpers/constants";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

export default function Control(props) {
  const calculatingType = useSelector((state) => state.header.calculatingType);
  const getControl = () => {
    if (calculatingType === Constant.CALCULATING_LOAN_INTEREST) {
      return <LoanControl />;
    } else return <DepositControl />;
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
      {getControl()}
    </Grid>
  );
}
