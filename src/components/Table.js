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

// Default columns for backward compatibility
const defaultColumns = [
  { field: "locationname", headerName: "Location Name", align: "left" },
  { field: "users", headerName: "Users", align: "right" },
  { field: "inlessonquiz", headerName: "In Lesson Quiz", align: "right" },
  { field: "managerquiz", headerName: "Manager Quiz", align: "right" },
  { field: "videoquiz", headerName: "Video Quiz", align: "right" },
  { field: "lessons", headerName: "Lessons", align: "right" },
];

export default function CustomizedTables({ columns, data }) {
  const tableColumns = columns || defaultColumns;
  const tableData = data || rows;
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
        maxWidth: "100%",
        overflowX: "auto",
        margin: "auto",
      }}
    >
      <Table sx={{ minWidth: 600 }} aria-label='customized table' size='medium'>
        <TableHead sx={{ backgroundColor: "white" }}>
          <TableRow sx={{height: 10}}>
            {tableColumns.map((column) => (
              <StyledTableCell
                key={column.field}
                align={column.align || "center"}
                fontSize={13}
                fontWeight={"bold"}
                sx={{
                  fontSize: "13px !important",
                  fontWeight: "600 !important",
                 
                }}
              >
                {column.headerName}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <StyledTableRow key={index}>
              {tableColumns.map((column) => (
                <StyledTableCell
                  key={column.field}
                  align={column.align || "center"}
                  component={column.align === "left" ? "th" : "td"}
                  scope={column.align === "left" ? "row" : undefined}
                  sx={{
                    fontSize: "14px !important",
                    fontWeight: "500 !important",
                  }}
                >
                  {row[column.field]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
