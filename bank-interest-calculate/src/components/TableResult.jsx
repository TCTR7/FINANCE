import * as React from "react";
import { useSelector } from "react-redux";
import Constant from "../helpers/constants";
import DepositTableResult from "./deposit/DepositTableResult";
import LoanResultTable from "./loan/LoanResultTable";

export default function TableResult() {
  const calculatingType = useSelector((state) => state.header.calculatingType);
  const loanData = useSelector((state) => state.control.loanData)
  const depositData = useSelector((state) => state.control.depositData)
  const getTableResult = () => {
    if (calculatingType === Constant.CALCULATING_LOAN_INTEREST) {
      return <LoanResultTable Contents={loanData}></LoanResultTable>;
    } else return <DepositTableResult Contents={depositData}></DepositTableResult>;
  };
  return <div>{getTableResult()}</div>;
}
