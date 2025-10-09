import React, { useState } from "react";
import Navbar from "../Navbar";
import Nav from "../nav";
import CustomizedSelects from "../Select";
import { alpha, styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import MiniDrawer from "../Drawer";

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({}));

function createData(
  username,
  locationname,
  role,
  lessons,
  inlessonquiz,
  managerquiz,
  videoquiz
) {
  return {
    username,
    locationname,
    role,
    lessons,
    inlessonquiz,
    managerquiz,
    videoquiz,
  };
}

const rows = [
  createData("18 oct nccjkk", 5, "v5 role", 0, 0, 0, 0),
  createData("18 oct nccjkk", 5, "v5 role", 0, 0, 0, 0),
  createData("18 oct nccjkk", 5, "v5 role", 0, 0, 0, 0),
  createData("18 oct nccjkk", 5, "v5 role", 0, 0, 0, 0),
  createData("18 oct nccjkk", 5, "v5 role", 0, 0, 0, 0),
  createData("18 oct nccjkk", 5, "v5 role", 0, 0, 0, 0),
  createData("18 oct nccjkk", 5, "v5 role", 0, 0, 0, 0),
  createData("18 oct nccjkk", 5, "v5 role", 0, 0, 0, 0),
  createData("18 oct nccjkk", 5, "v5 role", 0, 0, 0, 0),
  createData("18 oct nccjkk", 5, "v5 role", 0, 0, 0, 0),
];

const User = () => {
  //
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className='container bg'>
      <Box
        sx={{
          bgcolor: "#F6F6F6",
          //
          width: drawerOpen ? "1600px" : "1900px",
          ml: drawerOpen ? "250px" : "20px",
        }}
      >
        <MiniDrawer onDrawerToggle={setDrawerOpen} />
        <Navbar drawerOpen={drawerOpen} />
        <Box sx={{ ml: drawerOpen ? "0px" : "130px" }}>
          <Nav />
        </Box>
        <CustomizedSelects />

        <TableContainer
          component={Paper}
          className='table'
          sx={{ maxHeight: 800, width: "90%", margin: "auto" }}
        >
          <Table
            sx={{ minWidth: 600 }}
            aria-label='customized table'
            size='medium'
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell align='right'>Location Name</StyledTableCell>
                <StyledTableCell align='right'>Role</StyledTableCell>
                <StyledTableCell align='right'>Lessons</StyledTableCell>
                <StyledTableCell align='right'>In Lesson Quiz</StyledTableCell>
                <StyledTableCell align='right'>Manager Quiz </StyledTableCell>
                <StyledTableCell align='right'>Video Quiz </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.username}>
                  <StyledTableCell component='th' scope='row'>
                    {row.username}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {row.locationname}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.role}</StyledTableCell>
                  <StyledTableCell align='right'>{row.lessons}</StyledTableCell>
                  <StyledTableCell align='right'>
                    {row.inlessonquiz}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {row.managerquiz}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {row.videoquiz}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default User;
