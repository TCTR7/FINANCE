
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

export default function LoanResultTable(props) {
  return (
    <div style={{ margin: "auto", width: "90%"}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Month</StyledTableCell>
              <StyledTableCell align="center">Principal money&nbsp;(vnd)</StyledTableCell>
              <StyledTableCell align="center">Interest money&nbsp;(vnd)</StyledTableCell>
              <StyledTableCell align="center">Monthly payment&nbsp;(vnd)</StyledTableCell>
              <StyledTableCell align="center">Money still owed&nbsp;(vnd)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.Contents.map((row) => (
              <StyledTableRow key={row.month}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.month}
                </StyledTableCell>
                <StyledTableCell align="center">{row.principalMoney}</StyledTableCell>
                <StyledTableCell align="center">{row.interestMoney}</StyledTableCell>
                <StyledTableCell align="center">{row.monthlyPayment}</StyledTableCell>
                <StyledTableCell align="center">{row.moneyStillOwed}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
