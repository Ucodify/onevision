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

function createData(lessonname, users, inlessonquiz, managerquiz, videoquiz) {
  return {
    lessonname,
    users,
    inlessonquiz,
    managerquiz,
    videoquiz,
  };
}

const rows = [
  createData("2025-07-16 lesson", 5, 0, 0, 0),
  createData("2025-07-16 lesson", 5, 0, 0, 0),
  createData("2025-07-16 lesson", 5, 0, 0, 0),
  createData("2025-07-16 lesson", 5, 0, 0, 0),
  createData("2025-07-16 lesson", 5, 0, 0, 0),
  createData("2025-07-16 lesson", 5, 0, 0, 0),
  createData("2025-07-16 lesson", 5, 0, 0, 0),
  createData("2025-07-16 lesson", 5, 0, 0, 0),
  createData("2025-07-16 lesson", 5, 0, 0, 0),
  createData("2025-07-16 lesson", 5, 0, 0, 0),
];

const Lesson = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className='bg'>
      <Box
        sx={{
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
        <div>
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
                  <StyledTableCell>Lesson Name</StyledTableCell>
                  <StyledTableCell align='center'>Users</StyledTableCell>
                  <StyledTableCell align='center'>
                    In Lesson Quiz
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    Manager Quiz{" "}
                  </StyledTableCell>
                  <StyledTableCell align='center'>Video Quiz </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.lessonname}>
                    <StyledTableCell component='th' scope='row'>
                      {row.lessonname}
                    </StyledTableCell>
                    <StyledTableCell component='th' scope='row' align='center'>
                      {row.users}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.inlessonquiz}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.managerquiz}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.videoquiz}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </div>
  );
};

export default Lesson;
