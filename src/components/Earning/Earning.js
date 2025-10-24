import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  Paper,
  Select,
  MenuItem,
  IconButton,
  InputBase,
  alpha,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
// ⚠️ IMPORT STYLING COMPONENTS FROM YOUR EXISTING TABLE FILE
import { StyledTableCell, StyledTableRow } from "../Table";
import MiniDrawer from "../Drawer";
import SearchAppBar from "../Navbar";

// --- Data Structure for Earnings Log (Matching the image) ---
// Note: Using descriptive field names for clarity in this custom table implementation
const EARNINGS_DATA = [
  {
    name: "Heyworld",
    count: 5,
    amount: "1$",
    duration: "0",
    date: "24 Apr 2025",
    status: "Pending",
  },
  {
    name: "lessonaxe1",
    count: 10,
    amount: "5$",
    duration: "1 Hours",
    date: "10 Apr 2025",
    status: "Pending",
  },
  {
    name: "lessonjest",
    count: 5,
    amount: "5$",
    duration: "1 Hours",
    date: "21 Jan 2025",
    status: "Paid",
  },
  {
    name: "teasdsa",
    count: 5,
    amount: "10$",
    duration: "4 Days",
    date: "21 May 2024",
    status: "Pending",
  },
  {
    name: "test kledjaholkdas",
    count: 5,
    amount: "10$",
    duration: "3 Days 2 Hours",
    date: "21 May 2024",
    status: "Pending",
  },
  {
    name: "treadasd",
    count: 5,
    amount: "12$",
    duration: "3 Days",
    date: "21 May 2024",
    status: "Pending",
  },
  {
    name: "testsaadas",
    count: 5,
    amount: "10$",
    duration: "2 Days",
    date: "21 May 2024",
    status: "Pending",
  },
  {
    name: "test",
    count: 5,
    amount: "12$",
    duration: "3 Days",
    date: "21 May 2024",
    status: "Pending",
  },
  {
    name: "tesaadas",
    count: 5,
    amount: "34$",
    duration: "2 Days",
    date: "21 May 2024",
    status: "Pending",
  },
  {
    name: "test_end",
    count: 5,
    amount: "65$",
    duration: "2 Days",
    date: "21 May 2024",
    status: "Pending",
  },
];

// --- Custom Styled Components for Earning Page ---
const FilterTableCell = styled(TableCell)(({ theme }) => ({
  padding: "8px 16px",
  borderBottom: "none",
  borderRight: "1px solid rgba(0, 0, 0, 0.05)",
  "&:last-child": { borderRight: "none" },
}));

const StatusTag = styled(Box)(({ theme, status }) => ({
  display: "inline-block",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "0.8rem",
  fontWeight: "bold",
  color: status === "Paid" ? "#2e7d32" : "#ed6c02", // green or orange
}));

export default function EarningLogPage() {
  const [activeTab, setActiveTab] = useState("My");
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Box
      sx={{
        padding: 3,
        width: { md: drawerOpen ? "1600px" : "1800px" },
        ml: { md: drawerOpen ? 30 : 10 },
        bgcolor: "#F7F8FC",
      }}
    >
      <MiniDrawer onDrawerToggle={setDrawerOpen} />
      <SearchAppBar drawerOpen={drawerOpen} />
      {/* Header and View Logs Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          mt: 10,
        }}
      >
        <Typography
          variant='h5'
          sx={{ fontWeight: "bold", color: "#135098", fontSize: "30px" }}
        >
          Earning
        </Typography>
        <Button
          variant='outlined'
          sx={{
            color: "#135098",
            borderColor: "#135098",
            textTransform: "none",
          }}
        >
          View Logs
        </Button>
      </Box>

      {/* Tab Navigation */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <ButtonGroup aria-label='Earning tabs' disableElevation sx={{bgcolor: '#ffffff'}}>
          <Button
            onClick={() => setActiveTab("My")}
            sx={{
              backgroundImage:
                activeTab === "My"
                  ? "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))"
                  : "#ffffff",

              color: activeTab === "My" ? "white" : "#135098",
              px: 4,
              py: 1,
              borderRadius: "8px 0 0 8px",
              fontSize: 20,
              border: "none",
              textTransform: "none",
              cursor: "pointer",
            }}
          >
            My
          </Button>
          <Button
            onClick={() => setActiveTab("Team")}
            sx={{
              backgroundImage:
                activeTab === "Team"
                  ? "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))"
                  : "#ffffff",
              color: activeTab === "Team" ? "white" : "#135098",
              px: 4,
              py: 1,
              borderRadius: "0 8px 8px 0",
              border: "none",
              fontSize: 20,
              textTransform: "none",

            }}
          >
            Team
          </Button>
        </ButtonGroup>
      </Box>

      {/* Custom Table Structure using your imported styled components */}
      <Paper
        sx={{
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Table sx={{ minWidth: 600 }} aria-label='earnings table' size='medium'>
          {/* Custom Filter Header Row (TableHead) */}
          <TableHead sx={{ bgcolor: "#E9EEF6", color: "#135098" }}>
            <TableRow>
              {/* Col 1: Select... */}
              <FilterTableCell sx={{ width: "25%" }}>
                <Select
                  value='select'
                  variant='standard'
                  disableUnderline
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    fontWeight: "normal",
                    color: "grey.600",
                    bgcolor: "white",
                    borderRadius: "5px",
                    width: "150px",
                    px: 2,
                  }}
                >
                  <MenuItem value='select'>Select...</MenuItem>
                </Select>
              </FilterTableCell>

              {/* Col 2: 0 - (Amount Input) */}
              <FilterTableCell
                sx={{
                  display: "flex",

                  bgcolor: "white",
                  borderRadius: "15px",
                  width: "100px",
                  px: 2,
                  mt: 1.5,
                  ml: 2,
                }}
              >
                <IconButton size='small'>
                  <RemoveIcon fontSize='inherit' />
                </IconButton>
                <InputBase
                  value='0'
                  size='small'
                  sx={{ width: 20, color: "#135098" }}
                  inputProps={{
                    style: {
                      padding: 0,
                      textAlign: "center",
                    },
                  }}
                />

                <IconButton size='small'>
                  <AddIcon fontSize='inherit' />
                </IconButton>
              </FilterTableCell>

              {/* Col 3: Amount Label */}
              <FilterTableCell sx={{ width: "15%" }}>
                <Typography variant='body2' fontWeight='bold' color='#135098'>
                  Amount
                </Typography>
              </FilterTableCell>

              {/* Col 4: Duration Label */}
              <FilterTableCell sx={{ width: "15%" }}>
                <Typography variant='body2' fontWeight='bold' color='#135098'>
                  Duration
                </Typography>
              </FilterTableCell>

              {/* Col 5: Select Date */}
              <FilterTableCell sx={{ width: "20%" }}>
                <Select
                  value='date'
                  variant='standard'
                  disableUnderline
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    color: "#275095",
                    bgcolor: "white",
                    borderRadius: "10px",
                    width: "150px",
                    p: 1,
                    mr: 10,
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  <MenuItem
                    value='date'
                    sx={{ fontSize: 10, fontWeight: "bold" }}
                  >
                    Select Date
                  </MenuItem>
                </Select>
              </FilterTableCell>

              {/* Col 6: Status Filter */}
              <FilterTableCell sx={{ width: "15%" }}>
                <Select
                  value='status'
                  variant='standard'
                  disableUnderline
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    fontWeight: "normal",
                    p: 1,
                    bgcolor: "white",
                    color: "grey.600",
                    borderRadius: "10px",
                    width: "100px",
                    position: "relative",
                    left: 70,
                  }}
                >
                  <MenuItem value='status'>Status</MenuItem>
                </Select>
              </FilterTableCell>
            </TableRow>
          </TableHead>

          {/* Custom Table Body using Styled Components for styling */}
          <TableBody>
            {EARNINGS_DATA.map((row, index) => (
              <StyledTableRow key={index}>
                {/* Name Cell (StyledTableCell from your file for consistent styling) */}
                <StyledTableCell align='left' component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                {/* Count Cell */}
                <StyledTableCell
                  align='left'
                  sx={{ fontWeight: "normal", color: "#555" }}
                >
                  {row.count}
                </StyledTableCell>
                {/* Amount Cell */}
                <StyledTableCell align='left'>{row.amount}</StyledTableCell>
                {/* Duration Cell */}
                <StyledTableCell
                  align='left'
                  sx={{ fontWeight: "normal", color: "#555" }}
                >
                  {row.duration}
                </StyledTableCell>
                {/* Date Cell */}
                <StyledTableCell
                  align='left'
                  sx={{ fontWeight: "normal", color: "#555" }}
                >
                  {row.date}
                </StyledTableCell>
                {/* Status Cell with Custom Tag */}
                <StyledTableCell align='center'>
                  <StatusTag status={row.status}>{row.status}</StatusTag>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* More Results Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant='contained'
          sx={{
            bgcolor: "#4e54e4",
            color: "white",
            borderRadius: "20px",
            padding: "8px 30px",
            textTransform: "none",
            boxShadow: "0 4px 6px rgba(78, 84, 228, 0.4)",
            "&:hover": { bgcolor: "#393dc7" },
          }}
        >
          More Results
        </Button>
      </Box>
    </Box>
  );
}
