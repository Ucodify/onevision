import React, { useState } from "react";
import MiniDrawer from "../Drawer";
import Navbar from "../Navbar";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import courseImg from "../../images/c1.jpeg";
import qa from "../../images/c2.jpeg";
import analytics from "../../images/analytics.jpeg";

const MyCourses = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tab, setTab] = useState("pending");
  const tasks = [
    {
      id: 1,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "pending",
      points: 80,
      amount: "$50",
      progress: 60,
      icon: qa,
    },
    {
      id: 2,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "pending",
      points: 80,
      amount: "$50",
      progress: 70,
      icon: courseImg,
    },
    {
      id: 3,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "pending",
      points: 80,
      amount: "$50",
      progress: 80,
      icon: analytics,
    },
    {
      id: 4,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "pending",
      points: 80,
      amount: "$50",
      progress: 90,
      icon: courseImg,
    },
    {
      id: 5,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "pending",
      points: 80,
      amount: "$50",
      progress: 40,
      icon: courseImg,
    },
    {
      id: 6,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "pending",
      points: 80,
      amount: "$50",
      progress: 50,
      icon: qa,
    },
    {
      id: 7,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "pending",
      points: 80,
      amount: "$50",
      progress: 30,
      icon: analytics,
    },
    {
      id: 8,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "pending",
      points: 80,
      amount: "$50",
      progress: 20,
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      id: 9,
      category: "React Advanced",
      totalLessons: 8,
      updatedOn: "Oct 7, 2025",
      status: "completed",
      points: 100,
      amount: "$80",
      progress: 100,
      icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    },
    {
      id: 10,
      category: "2025-007-16 cat",
      totalLessons: 1,
      updatedOn: "Jul 16, 2025",
      status: "completed",
      points: 80,
      amount: "$50",
      progress: 60,
      icon: analytics,
    },
    {
      id: 11,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "completed",
      points: 80,
      amount: "$50",
      progress: 70,
      icon: courseImg,
    },
    {
      id: 12,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "completed",
      points: 80,
      amount: "$50",
      progress: 80,
      icon: analytics,
    },
    {
      id: 13,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "completed",
      points: 80,
      amount: "$50",
      progress: 90,
      icon: courseImg,
    },
    {
      id: 14,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "completed",
      points: 80,
      amount: "$50",
      progress: 40,
      icon: courseImg,
    },
    {
      id: 15,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "completed",
      points: 80,
      amount: "$50",
      progress: 50,
      icon: qa,
    },
    {
      id: 16,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "completed",
      points: 80,
      amount: "$50",
      progress: 30,
      icon: analytics,
    },
    {
      id: 17,
      category: "Test Category Here",
      totalLessons: 6,
      updatedOn: "Oct 8, 2025",
      status: "completed",
      points: 80,
      amount: "$50",
      progress: 20,
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      id: 18,
      category: "React Advanced",
      totalLessons: 8,
      updatedOn: "Oct 7, 2025",
      status: "completed",
      points: 100,
      amount: "$80",
      progress: 100,
      icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    },
  ];

  // Responsive layout check
  const isSmall = useMediaQuery("(max-width: 900px)");

  // Filter tasks based on selected tab
  const filteredTasks = tasks.filter((task) => task.status === tab);
  return (
    <div>
      <Navbar drawerOpen={drawerOpen} />
      <MiniDrawer />
      <Box
        sx={{
          bgcolor: "#F6F6F6",
          minHeight: "100vh",
          width: { md: "1900px" },
          p: isSmall ? 2 : 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "2000px",
            maxWidth: { md: "1800px" },
            bgcolor: "#FFFFFF",
            borderRadius: "16px",
            boxShadow: 2,
            p: isSmall ? 2 : 2,
            mt: 6,
            ml: { md: "60px" },
          }}
        >
          {/* Heading */}
          <Typography
            variant='h5'
            sx={{
              fontWeight: "thin",
              mb: 3,
              textAlign: "center",
              fontSize: "22px",
              color: "#135098",
            }}
          >
            My Courses
          </Typography>

          {/* Tabs for Pending / Completed */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "2px solid #135098",
                borderRadius: "30px",
                overflow: "hidden",
                bgcolor: "#fff",
              }}
            >
              <Tabs
                value={tab}
                onChange={(e, newVal) => setTab(newVal)}
                centered
                TabIndicatorProps={{ style: { display: "none" } }} // hide default indicator
                slotProps={{ style: { display: "none" } }} // the updated slotProps was not working to remove the default indicator
                sx={{
                  "& .MuiTabs-flexContainer": {
                    justifyContent: "center",
                  },
                  "& .MuiTab-root": {
                    textTransform: "none",
                    fontWeight: "bold",
                    color: "#7C7C7C",
                    px: 4,
                    borderRadius: "30px",
                  },
                  "& .Mui-selected": {
                    color: "white",
                    background: "#135098",
                    textDecoration: "none",
                    textUnderline: "none",
                  },
                }}
              >
                <Tab label='Pending' value='pending' />
                <Tab label='Completed' value='completed' />
              </Tabs>
            </Box>
          </Box>
          {/* Main content box */}
          <Box
            sx={{
              //
              width: "1300px",
              ml: { md: "200px" },
              bgcolor: "white",
              borderRadius: "16px",

              p: isSmall ? 2 : 2,
              mt: 6,
            }}
          >
            {/* Table */}
            <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Category Name
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Total Lessons
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Updated On
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Pending</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Points</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Progress</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody
                  sx={{
                    border: "2px solid #FFFFFF",
                    borderBottom: "15px solid #F6F6F6",
                  }}
                >
                  {filteredTasks.map((task) => (
                    <TableRow
                      key={task.id}
                      sx={{
                        "&:not(:last-child)": {
                          borderBottom: "16px solid #F6F6F6",
                          borderRadius: "10px",
                          boxShadow: 7,
                        },
                      }}
                    >
                      <TableCell>
                        <Box display='flex' alignItems='center' gap={2}>
                          <Avatar
                            src={typeof task.icon === "string" ? task.icon : qa}
                            alt={task.category}
                            sx={{ width: 40, height: 40, borderRadius: 2 }}
                          />
                          <Typography>{task.category}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{task.totalLessons}</TableCell>
                      <TableCell>{task.updatedOn}</TableCell>
                      <TableCell>
                        {task.status === "pending" ? "Yes" : "No"}
                      </TableCell>
                      <TableCell>{task.points}</TableCell>
                      <TableCell>{task.amount}</TableCell>
                      <TableCell>
                        <Box display='flex' alignItems='center' gap={1}>
                          <CircularProgress
                            variant='determinate'
                            value={task.progress}
                            size={40}
                            thickness={5}
                            sx={{
                              color:
                                task.progress === 100
                                  ? "success.main"
                                  : "primary.main",
                            }}
                          />
                          <Typography>{task.progress}%</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MyCourses;
