import React, { useState } from "react";
import MiniDrawer from "../Drawer";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button, // 👈 Import Button
} from "@mui/material";
import Table from "../Table";
import SearchAppBar from "../Navbar";
import { BorderBottom } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Define the number of rows to show initially and to add on each click
const ROWS_PER_PAGE = 5;

const CoursesFeedback = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  // 1. New state to track the number of visible rows
  const [visibleRows, setVisibleRows] = useState(ROWS_PER_PAGE);

  const customColumns = [
    // ... (your column definitions)
    { field: "FeedbackBy", headerName: "Feedback by", width: 300 },
    { field: "Feedback", headerName: "Feedback", width: 150 },
    { field: "Rating", headerName: "Rating", width: 120 },
    { field: "SlideTitle", headerName: "Slide Title", width: 300 },
    { field: "LessonTitle", headerName: "Lesson Title", width: 300 },
    { field: "Status", headerName: "Status", width: 300 },
    { field: "Date", headerName: "Date", width: 300 },
    { field: "Action", headerName: "Action", width: 300 },
  ];
  const handleClick = () => {
    console.log("Button clicked!");
    navigate("/viewDetails");
  };

  const feedbackData = [
    // ... (your existing 16 data objects)
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          onClick={handleClick}
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
    {
      FeedbackBy: "Kaushik CelloIP",
      Feedback: "kaushik@gmail.com",
      Rating: "5",
      SlideTitle: "slide 1",
      LessonTitle: "as mdkam sd",
      Status: "new",
      Date: "2024-12-27T12:42:42.095Z",
      Action: (
        <Button
          sx={{
            background:
              "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
            color: "white",
            borderRadius: "18px",
            textTransform: "none",
            width: "120px",
            height: "35px",
          }}
        >
          View Details
        </Button>
      ),
    },
  ];

  // 2. Filter the data to show only the visible rows
  const dataToShow = feedbackData.slice(0, visibleRows);

  // 3. Handler function to load more rows
  const handleLoadMore = () => {
    // Calculate the next number of rows to show, ensuring it doesn't exceed the total length
    const newVisibleRows = Math.min(
      visibleRows + ROWS_PER_PAGE,
      feedbackData.length
    );
    setVisibleRows(newVisibleRows);
  };

  // 4. Determine if the "Load More" button should be visible
  const isMoreDataAvailable = visibleRows < feedbackData.length;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer onDrawerToggle={setDrawerOpen} />
        <Box
          sx={{
            flexGrow: 1,
            transition: "margin 0.3s ease, width 0.3s ease",
            // ml: drawerOpen ? "100px" : "40px",
          }}
        >
          <SearchAppBar
            drawerOpen={drawerOpen}
            sx={{ position: "fixed", zIndex: 1300 }}
          />
          <Box
            sx={{
              mt: 10,
              px: 1,
              // ml: drawerOpen ? "-70px" : "20px",

              width: {
                xs: "100%",
                sm: "75%",
                md: drawerOpen ? "1550px" : "1840px",
              },
            }}
          >
            <Box
              sx={{
                mt: "30px",
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  pt: 2,
                  height: "75px",
                  border: "10px solid white",
                  mt: 7,
                  ml: 5,
                  color: "#275095",
                  bgcolor: "white",
                  width: {
                    xs: "100%",
                    sm: "75%",
                    md: drawerOpen ? "103.5%" : "95.5%",
                  },
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  fontSize: "17px",
                  fontWeight: "550",
                }}
              >
                Courses Feedback
                <Box sx={{ minWidth: 120 }}>
                  <FormControl
                    sx={{
                      width: "5%",
                      position: "relative",
                      left: drawerOpen ? "1400px" : "1600px",
                      bottom: "50px",
                    }}
                  >
                    <InputLabel
                      id='demo-simple-select-label'
                      sx={{ position: "relative", top: 12 }}
                    >
                      All
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Age'
                      sx={{ height: 35 }}
                    >
                      <MenuItem value={10}>All</MenuItem>
                      <MenuItem value={20}>New</MenuItem>
                      <MenuItem value={30}>Closed</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Typography>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "75%",
                    md: drawerOpen ? "109%" : "100%",
                  },
                }}
              >
                {/* 5. Pass the filtered data to the Table component */}
                <Table
                  columns={customColumns}
                  data={dataToShow}
                  style={{
                    width: "1600px",
                    marginleft: "-72px",
                    // fontSize: "15px",
                    // fontWeight: "thin",
                    // color: "gray",
                  }}
                />
              </Box>

              {/* 6. Load More Button */}
              {isMoreDataAvailable && (
                <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      width: {
                        xs: "100%",
                        sm: "75%",
                        md: drawerOpen ? "110%" : "800%",
                      },
                      ml: 3,
                      mt: 8,
                      mb: 8,
                      borderTop: "1px solid #e0e0e0",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Button
                      variant='contained'
                      onClick={handleLoadMore}
                      sx={{
                        mt: 2,
                        mb: 4,
                        position: "relative",
                        left: drawerOpen ? { md: 600 } : { md: 720 },
                        bottom: { md: 50 },
                        borderRadius: "16px",
                        width: 200,
                        height: 35,
                      }}
                      style={{
                        background:
                          "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
                      }}
                    >
                      More Results
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CoursesFeedback;
