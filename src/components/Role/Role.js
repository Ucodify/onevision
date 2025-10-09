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
  rolename,
  users,
  inlessonquiz,
  managerquiz,
  videoquiz,
  lessons
) {
  return {
    rolename,
    users,
    inlessonquiz,
    managerquiz,
    videoquiz,
    lessons,
  };
}

const rows = [createData("Company Owner", 9, 15.64, 2.96, 1.76, 13.11)];

const Role = () => {
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
        <div>
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
                    <StyledTableCell>Role Name</StyledTableCell>
                    <StyledTableCell align='right'>Users</StyledTableCell>
                    <StyledTableCell align='right'>
                      In Lesson Quiz
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      Manager Quiz{" "}
                    </StyledTableCell>
                    <StyledTableCell align='right'>Video Quiz </StyledTableCell>
                    <StyledTableCell align='right'>Lessons</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.rolename}>
                      <StyledTableCell component='th' scope='row'>
                        {row.rolename}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.users}
                      </StyledTableCell>

                      <StyledTableCell align='right'>
                        {row.inlessonquiz}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.managerquiz}
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        {row.videoquiz}
                      </StyledTableCell>

                      <StyledTableCell align='right'>
                        {row.lessons}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Role;
