import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import { ChevronDown, Search, MoreVertical } from "lucide-react";
import SearchAppBar from "../Navbar";
import MiniDrawer from "../Drawer";

export default function Library() {
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const categories = [
    { name: "Test", lessons: 0, feedback: "0 / 0", updateDate: "15 Oct 2025" },
    {
      name: "August TEST",
      lessons: 2,
      feedback: "0 / 0",
      updateDate: "29 Aug 2025",
    },
    {
      name: "Testing NOWWW",
      lessons: 4,
      feedback: "0 / 0",
      updateDate: "17 Jul 2025",
    },
    {
      name: "Test new cat",
      lessons: 1,
      feedback: "0 / 0",
      updateDate: "13 Jul 2025",
    },
    {
      name: "Testing 02 JUNE",
      lessons: 7,
      feedback: "0 / 0",
      updateDate: "02 Jun 2025",
    },
    {
      name: "Category P",
      lessons: 1,
      feedback: "0 / 0",
      updateDate: "27 May 2025",
    },
    {
      name: "CategoryAxe",
      lessons: 4,
      feedback: "0 / 0",
      updateDate: "10 Apr 2025",
    },
    {
      name: "Category S",
      lessons: 2,
      feedback: "0 / 0",
      updateDate: "21 Jan 2025",
    },
    {
      name: "Test X",
      lessons: 2,
      feedback: "0 / 0",
      updateDate: "19 Dec 2024",
    },
    {
      name: "Test category November",
      lessons: 2,
      feedback: "0 / 0",
      updateDate: "29 Nov 2024",
    },
  ];

  return (
    <Box sx={{ bgcolor: "grey.100", p: 4 }}>
      <MiniDrawer onDrawerToggle={setDrawerOpen} />
      <SearchAppBar drawerOpen={drawerOpen} />
      <Box
        sx={{
          width: { md: drawerOpen ? "1600px" : "1740px" },
          ml: { md: drawerOpen ? 30 : 10 },
          my: 8,
        }}
      >
        {/* Header Section */}
        <Paper
          elevation={1}
          sx={{
            borderRadius: "8px 8px 0 0",
            px: 4,
            py: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <Typography variant='h5' fontWeight='bold' color='primary.dark'>
            Library
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant='contained'
              sx={{
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
                textTransform: "none",
                px: 4,
              }}
            >
              Rearrange
            </Button>
            <Button
              variant='contained'
              sx={{
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
                textTransform: "none",
                px: 4,
              }}
            >
              Add
            </Button>
          </Box>
        </Paper>

        {/* Filters Section */}
        <Box sx={{ bgcolor: "#D6DCEB", p: 3 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 2,
              width: "60%",
            }}
          >
            {/* Search by Category */}
            <Box>
              <Typography
                variant='body2'
                fontWeight='500'
                color='grey.700'
                mb={1}
              >
                Search By Category
              </Typography>
              <Box sx={{ position: "relative" }}>
                <TextField
                  size='small'
                  fullWidth
                  placeholder='Search '
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{
                    bgcolor: "white",
                    "& fieldset": { borderColor: "grey.300" },
                    "&:hover fieldset": { borderColor: "primary.main" },
                    "&.Mui-focused fieldset": { borderColor: "primary.main" },
                  }}
                />
                <Search
                  size={18}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9ca3af",
                  }}
                />
              </Box>
            </Box>

            {/* Other Filters */}
            {[
              "Feedback",
              "In Lesson Quiz",
              "Slide Type",
              "Date",
              "Updated Date",
            ].map((label, i) => (
              <Box key={i}>
                <Typography
                  variant='body2'
                  fontWeight='500'
                  color='grey.700'
                  mb={1}
                >
                  {label}
                </Typography>
                <FormControl fullWidth size='small'>
                  <InputLabel>{label}</InputLabel>
                  <Select
                    label={label}
                    IconComponent={() => (
                      <ChevronDown
                        size={18}
                        style={{
                          marginRight: "10px",
                          color: "#6b7280",
                        }}
                      />
                    )}
                  >
                    <MenuItem value='All'>All</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            ))}
          </Box>

          {/* Updated Date */}
          {/* <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 2,
              mt: 3,
            }}
          >
            <Box sx={{ gridColumn: "6" }}>
              <Typography
                variant='body2'
                fontWeight='500'
                color='grey.700'
                mb={1}
              >
                Updated Date
              </Typography>
              <FormControl fullWidth size='small'>
                <InputLabel>Updated Date</InputLabel>
                <Select
                  label='Updated Date'
                  IconComponent={() => (
                    <ChevronDown
                      size={18}
                      style={{ marginRight: "10px", color: "#6b7280" }}
                    />
                  )}
                >
                  <MenuItem value='Select Date'>Select Date</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box> */}
        </Box>
        <Divider sx={{ border: "0.5px solid #CCCCCC" }} />
        {/* Table Header */}
        <Box sx={{ bgcolor: "#D6DCEB", borderBottom: "1px solid #93c5fd" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "3fr 3fr 3fr 2fr 1fr",
              px: 4,
              py: 1.5,
              borderBottom: "1px solid #CCCCCC",
            }}
          >
            {[
              "Category Name",
              "Lesson",
              "Feedback",
              "Update Date",
              "Action",
            ].map((header, index) => (
              <Typography
                key={index}
                variant='body2'
                fontWeight='600'
                color='primary.dark'
              >
                {header}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Table Body */}
        <Paper>
          {categories.map((category, index) => (
            <Box
              key={index}
              sx={{
                display: "grid",
                gridTemplateColumns: "3fr 3fr 3fr 2fr 1fr",
                px: 4,
                py: 2,
                alignItems: "center",
                borderBottom: "1px solid #CCCCCC",
                "&:hover": { bgcolor: "grey.50" },
              }}
            >
              <Typography variant='body2' color='text.primary'>
                {category.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {category.lessons}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {category.feedback}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {category.updateDate}
              </Typography>
              <IconButton size='small'>
                <MoreVertical size={20} color='#6b7280' />
              </IconButton>
            </Box>
          ))}
        </Paper>

        {/* More Results Button */}
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "0 0 8px 8px",
            py: 4,
            display: "flex",
            justifyContent: "center",
            boxShadow: 1,
          }}
        >
          <Button
            variant='contained'
            sx={{
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
              textTransform: "none",
              px: 8,
              py: 1.5,
              borderRadius: "9999px",
            }}
          >
            More Results
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
