
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import currency from "../../helpers/currency";

const StyledTableCell = ({ align, children }) => (
  <TableCell style={{ fontSize: '16px', textAlign: align }}>{children}</TableCell>
);

const StyledTableRow = ({ children }) => (
  <TableRow style={{ backgroundColor: '#f0f0f0' }}>{children}</TableRow>
);


export default function LoanResultTable(props) {
  return (
    <div style={{ width: "100%", minWidth: "1200px"}}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Month</StyledTableCell>
              <StyledTableCell align="center">Principal payable&nbsp;(vnd)</StyledTableCell>
              <StyledTableCell align="center">Interest payable&nbsp;(vnd)</StyledTableCell>
              <StyledTableCell align="center">Outstanding amount&nbsp;(vnd)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.Contents.map((row) => (
              <StyledTableRow key={row.month}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.month}
                </StyledTableCell>
                <StyledTableCell align="center">{currency.getVietNameCurrencyFormat(row.principalMoney)}</StyledTableCell>
                <StyledTableCell align="center">{currency.getVietNameCurrencyFormat(row.interestMoney)}</StyledTableCell>
                <StyledTableCell align="center">{currency.getVietNameCurrencyFormat(row.moneyStillOwed)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
