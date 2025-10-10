import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: alpha("#1b3f8f", 0.18),
    color: "#275095",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: "bold",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  fontWeight: "bold",
}));

function createData(
  locationname,
  users,
  inlessonquiz,
  managerquiz,
  videoquiz,
  lessons
) {
  return { locationname, users, inlessonquiz, managerquiz, videoquiz, lessons };
}

const rows = [
  createData("Celloip - Karachi", 11, 34.98, 0, 4.17, 23.61),
  createData("Celloip - 0000", 15, 25.54, 0, 3.12, 17.17),
  createData("Celloip - Canada", 16, 29.15, 0, 3.12, 17.33),
  createData("Celloip - India", 18, 15.92, 3.12, 1.78, 13.46),
  createData("New Testing Location 3", 1, 70, 0, 0, 26.67),
  createData("New Testing Location 4", 1, 70, 0, 0, 26.67),
  createData("New Testing Location 5", 1, 70, 0, 0, 26.67),
  createData("New Testing Location 6", 1, 70, 0, 0, 26.67),
  createData("Testing Location Lahore v2", 1, 70, 0, 0, 26.67),
  createData("Testing Location Lahore v3", 1, 70, 0, 0, 26.67),
];

export default function CustomizedTables() {
  return (
    <TableContainer
      component={Paper}
      className='table'
      sx={{
        maxHeight: 800,
        width: {
          xs: "100%",
          sm: "calc(100% - 60px)",
          md: "calc(100% - 80px)",
        },
        maxWidth: "100%", // prevents content overflow

        margin: "auto",
      }}
    >
      <Table sx={{ minWidth: 600 }} aria-label='customized table' size='medium'>
        <TableHead sx={{ backgroundColor: "white" }}>
          <TableRow>
            <StyledTableCell>Location Name</StyledTableCell>
            <StyledTableCell align='right'>Users</StyledTableCell>
            <StyledTableCell align='right'>In Lesson Quiz</StyledTableCell>
            <StyledTableCell align='right'>Manager Quiz</StyledTableCell>
            <StyledTableCell align='right'>Video Quiz</StyledTableCell>
            <StyledTableCell align='right'>Lessons</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.locationname}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.users}</StyledTableCell>
              <StyledTableCell align='right'>
                {row.inlessonquiz}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.managerquiz}</StyledTableCell>
              <StyledTableCell align='right'>{row.videoquiz}</StyledTableCell>
              <StyledTableCell align='right'>{row.lessons}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
