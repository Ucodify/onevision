import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  Menu,
  InputLabel,
  FormControl,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import { ChevronDown, Search, MoreVertical } from "lucide-react";
import SearchAppBar from "../Navbar";
import MiniDrawer from "../Drawer";
import { useNavigate } from "react-router-dom";

export default function Library() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => {
    navigate("/addLesson");
  };
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
    <Box sx={{ bgcolor: "#EDF0F2", pl: 4, pt: 5 }}>
      <MiniDrawer onDrawerToggle={setDrawerOpen} />
      <SearchAppBar drawerOpen={drawerOpen} />

      <Box
        sx={{
          width: { md: drawerOpen ? "1600px" : "1820px" },
          ml: { md: drawerOpen ? 30 : 5 },
          my: 6,
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
          <Typography
            variant='h6'
            fontSize='15px'
            fontWeight='bold'
            color='#1B3F9D'
          >
            Library
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant='contained'
              sx={{
                backgroundImage:
                  "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
                textTransform: "none",
                px: 4,
              }}
            >
              Rearrange
            </Button>

            <>
              {/* Add Button with Menu */}
              <Button
                variant='contained'
                endIcon={<ChevronDown size={16} />}
                onClick={handleOpenMenu}
                sx={{
                  bgcolor:
                    "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",

                  textTransform: "none",
                  px: 3,
                }}
              >
                Add
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleCloseMenu}>Add Category</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Add Lesson</MenuItem>
              </Menu>
            </>
          </Box>
        </Paper>

        {/* Filters Section */}
        <Box sx={{ bgcolor: "#D6DCEB", p: 3 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(10, 1fr)",
              gap: -10,
              width: "60%",
            }}
          >
            {/* Search by Category */}
            <Box sx={{ mr: 1, width: "150px" }}>
              <Typography
                variant='body2'
                fontWeight='700'
                color='grey.800'
                fontSize='10px'
              >
                Search By Category
              </Typography>
              <Box sx={{ position: "relative" }}>
                <TextField
                  size='small'
                  fullWidth
                  placeholder='Search'
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

            {/* Common Filters */}
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
                  fontSize='13px'
                  fontWeight='700'
                  color='grey.800'
                >
                  {label}
                </Typography>
                <FormControl size='small' height='4px' sx={{ width: "70%" }}>
                  <InputLabel> All </InputLabel>
                  {/* sx={{ borderRight: "1px solid gray", p: "10" }} */}
                  <Select
                    label={label}
                    sx={{
                      height: 36, // sets the height of the select box
                      "& .MuiSelect-select": {
                        py: 0.5, // reduces inner padding
                      },
                    }}
                    IconComponent={() => (
                      <ChevronDown
                        size={80}
                        sx={{ ml: "40px", color: "#6b7280", cursor: "pointer" }}
                      />
                    )}
                  >
                    <MenuItem value='All'>All</MenuItem>
                    <MenuItem value='Closed'>Closed</MenuItem>
                    <MenuItem value='New'>New</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ border: "0.5px solid #CCCCCC" }} />

        {/* Table Header */}
        <Box sx={{ bgcolor: "#D6DCEB", borderBottom: "20px solid #ffffff" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "3fr 3fr 3fr 2fr 1fr",
              px: 2,
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
                fontWeight='500'
                color='primary.dark'
              >
                {header}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Table Body */}
        <Paper sx={{}}>
          {categories.map((category, index) => (
            <Box
              key={index}
              sx={{
                display: "grid",
                gridTemplateColumns: "3fr 3fr 3fr 2fr 1fr",
                px: 4,
                py: 1,
                alignItems: "center",
                bgcolor: "#F5F5F5",
                fontWeight: "700",
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
      </Box>

      <Box
        sx={{
          p: 2,
          width: {
            xs: "100%",
            sm: "75%",
            md: drawerOpen ? "297%" : "345%",
          },
          ml: drawerOpen ? 30 : 1,
          mb: 8,
          borderTop: "1px solid #e0e0e0",
          alignItems: "center",
        }}
      >
        <Button
          variant='contained'
          sx={{
            bgcolor:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            textTransform: "none",
            px: 8,
            py: 1.5,
            ml: drawerOpen ? 86 : 100,
            mt: -8,
            borderRadius: "99px",
            height: "40px",
          }}
        >
          More Results
        </Button>
      </Box>
    </Box>
  );
}
