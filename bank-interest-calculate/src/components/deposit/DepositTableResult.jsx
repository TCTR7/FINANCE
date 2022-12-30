
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

export default function DepositTableResult(props) {
  return (
    <div style={{ margin: "auto", width: "90%"}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" sx={{ width: "20%" }}>Interest term number</StyledTableCell>
              <StyledTableCell align="center" >Interest money&nbsp;(vnd)</StyledTableCell>
              <StyledTableCell align="center" >Available money&nbsp;(vnd)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.Contents.map((row) => (
              <StyledTableRow key={row.termNumber}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.termNumber}
                </StyledTableCell>
                <StyledTableCell align="center">{row.interestMoney}</StyledTableCell>
                <StyledTableCell align="center">{row.availableMoney}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
