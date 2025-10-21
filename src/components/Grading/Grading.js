import React, { useState } from "react";
import {
  Box,
  Button,
  Select,
  MenuItem,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Paper,
} from "@mui/material";
import { ChevronDown, Search } from "lucide-react";
import SearchAppBar from "../Navbar";
import MiniDrawer from "../Drawer";
import { useNavigate } from "react-router-dom";

export default function ELearningDashboard() {
  const [activeTab, setActiveTab] = useState("My");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/gradingdetails");
  };
  const lessons = [
    {
      name: "Maham",
      category: '"Maham category"',
      lessonQuiz: "Passed",
      videoQuiz: "Disabled",
      managerQuiz: "Disabled",
      status: "Pass",
    },
    {
      name: "hyyyy",
      category: '"Food"',
      lessonQuiz: "Pending",
      videoQuiz: "Disabled",
      managerQuiz: "Disabled",
      status: "Pending",
    },
    {
      name: "Dal Dhokli",
      category: '"Food Lover"',
      lessonQuiz: "Passed",
      videoQuiz: "Disabled",
      managerQuiz: "Disabled",
      status: "Pass",
    },
  ];

  return (
    <>
      <Box
        sx={{
          minHeight: "1000vh",
          bgcolor: "#f9fafb",
          p: 3,
          width: { md: drawerOpen ? "1680px" : "1845px" },
          // width: 'fit-content',
          ml: { md: drawerOpen ? "201px" : "60px" },
          position: "relative",

          left: { md: drawerOpen ? 20 : 0 },
        }}
      >
        <MiniDrawer onDrawerToggle={setDrawerOpen} />
        <SearchAppBar drawerOpen={drawerOpen} />
        {/* Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
            mt: 12,
            //   width: { md: "1600px !important" },
            mx: "auto",
          }}
        >
          <Button
            onClick={() => setActiveTab("My")}
            variant={activeTab === "My" ? "contained" : "outlined"}
            sx={{
              px: 6,
              py: 1.5,
              fontWeight: 500,
              borderRadius: "8px 0 0 8px",
              borderColor: "#d1d5db",
              bgcolor: activeTab === "My" ? "primary.main" : "white",
              color: activeTab === "My" ? "white" : "text.primary",
            }}
          >
            My
          </Button>
          <Button
            onClick={() => setActiveTab("Team")}
            variant={activeTab === "Team" ? "contained" : "outlined"}
            sx={{
              px: 6,
              py: 1.5,
              fontWeight: 500,
              borderRadius: "0 8px 8px 0",
              borderColor: "#d1d5db",
              bgcolor: activeTab === "Team" ? "primary.main" : "white",
              color: activeTab === "Team" ? "white" : "text.primary",
            }}
          >
            Team
          </Button>
        </Box>

        {/* Table Container */}
        <Paper elevation={1} sx={{ borderRadius: 2, overflow: "hidden" }}>
          {/* Header Row */}
          <Box sx={{ bgcolor: "#dbeafe", borderBottom: "1px solid #bfdbfe" }}>
            <Grid
              container
              spacing={2}
              sx={{ px: 2, py: 1.5, fontWeight: 600, color: "text.secondary" }}
            >
              <Grid item xs={2} sx={{ px: { md: 2 } }}>
                <Typography variant='body2'>Lesson Name</Typography>
              </Grid>
              <Grid item xs={2} sx={{ px: { md: drawerOpen ? 14 : 18 } }}>
                <Typography variant='body2'>Categories</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ px: { md: 2 } }}>
                <Typography variant='body2'>Lesson Quiz</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ px: { md: drawerOpen ? 15 : 18 } }}>
                <Typography variant='body2'>Video Quiz</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ px: { md: 2 } }}>
                <Typography variant='body2'>Manager Quiz</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ px: { md: drawerOpen ? 16 : 18 } }}>
                <Typography variant='body2'>Status</Typography>
              </Grid>
              <Grid item xs={2} sx={{ px: { md: drawerOpen ? 5 : 4 } }}>
                <Typography variant='body2'>Action</Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Filter Row */}
          <Box sx={{ bgcolor: "#eff6ff", borderBottom: "1px solid #bfdbfe" }}>
            <Grid container spacing={2} sx={{ px: 3, py: 1.5 }}>
              <Grid item xs={2}>
                <FormControl fullWidth size='small'>
                  <InputLabel>Lesson</InputLabel>
                  <Select defaultValue='Lesson' label='Lesson'>
                    <MenuItem value='Lesson'>Lesson</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={2}></Grid>

              <Grid
                item
                xs={1.5}
                sx={{
                  pl: { md: drawerOpen ? 38 : 45 },
                  pr: { md: drawerOpen ? -10 : 0 },
                }}
              >
                <FormControl fullWidth size='small'>
                  <InputLabel>Lesson Quiz</InputLabel>
                  <Select defaultValue='Lesson Quiz' label='Lesson Quiz'>
                    <MenuItem value='Lesson Quiz'>Lesson Quiz</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={1.5} sx={{ pl: { md: drawerOpen ? 10 : 15 } }}>
                <FormControl fullWidth size='small'>
                  <InputLabel>Video Quiz</InputLabel>
                  <Select defaultValue='Video Quiz' label='Video Quiz'>
                    <MenuItem value='Video Quiz'>Video Quiz</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={1.5} sx={{ px: { md: drawerOpen ? 10 : 13 } }}>
                <FormControl fullWidth size='small'>
                  <InputLabel>Manager Quiz</InputLabel>
                  <Select defaultValue='Manager Quiz' label='Manager Quiz'>
                    <MenuItem value='Manager Quiz'>Manager Quiz</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={3}></Grid>
            </Grid>
          </Box>

          {/* Table Body */}
          {lessons.map((lesson, idx) => (
            <Box
              key={idx}
              sx={{
                px: 3,
                py: 1.5,
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 2,
                alignItems: "center",
                "&:hover": { bgcolor: "#f9fafb" },
              }}
            >
              <Typography variant='body2'>{lesson.name}</Typography>
              <Typography variant='body2' color='text.secondary'>
                {lesson.category}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {lesson.lessonQuiz}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {lesson.videoQuiz}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {lesson.managerQuiz}
              </Typography>

              <Box>
                {lesson.status === "Pass" ? (
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2.5,
                      py: 0.5,
                      bgcolor: "success.main",
                      color: "white",
                      fontWeight: 500,
                      borderRadius: 9999,
                      fontSize: "0.875rem",
                    }}
                  >
                    Pass
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2,
                      py: 0.5,
                      bgcolor: "warning.main",
                      color: "white",
                      fontWeight: 500,
                      borderRadius: 9999,
                      fontSize: "0.875rem",
                    }}
                  >
                    Pending
                  </Box>
                )}
              </Box>

              <Box>
                <Button
                  variant='contained'
                  onClick={handleClick}
                  size='small'
                  sx={{
                    bgcolor: "#1d4ed8",
                    textTransform: "none",
                    borderRadius: "9999px",
                    "&:hover": { bgcolor: "#1e40af" },
                  }}
                >
                  View
                </Button>
              </Box>
            </Box>
          ))}
        </Paper>
      </Box>
    </>
  );
}
