import React, { useState } from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import BasicSelect from "./Select";
import Nav from "./nav";
import MiniDrawer from "../components/Drawer";
import { Box, Switch, IconButton, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggleChange = (event) => {
    setToggle(event.target.checked);
  };

  const handleRefresh = () => {
    console.log("Refresh clicked!");
    // Add refresh logic here (for table or data reload)
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <div>
          <MiniDrawer onDrawerToggle={setDrawerOpen} />

          <Box
            sx={{
              flexGrow: 1,
              transition: "margin 0.3s ease, width 0.3s ease",
              width: { md: drawerOpen ? "1700px" : "1860px" },
              ml: { md: drawerOpen ? "200px" : "40px" },
            }}
          >
            <Navbar drawerOpen={drawerOpen} />

            <Box
              sx={{
                mt: 10,
                px: 1,
                bgcolor: "#F6F6F6",
                minHeight: "100vh",
              }}
            >
              {/* Tabs (Location | Role | Lesson | User) */}
              <Box
                sx={{ ml: { md: drawerOpen ? "0px" : "120px" }, mt: "-30px" }}
              >
                <Nav />
              </Box>

              {/* Filter Dropdown (Date Type) */}
              <BasicSelect />

              {/* 🔘 Toggle and Refresh Button Section */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 1.2,
                  pr: 6,
                  mt: -2,
                  mb: 1,
                  ms: { md: drawerOpen ? "20px" : "10px" },
                }}
              >
                <Typography
                  variant='body2'
                  sx={{ fontWeight: 600, color: "#1E3A8A" }}
                >
                  %
                </Typography>

                <Switch
                  checked={toggle}
                  onChange={handleToggleChange}
                  color='primary'
                  size='medium'
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "white",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#1E3A8A",
                    },
                    "& .MuiSwitch-track": {
                      border: "1px solid #1E3A8A",
                    },
                  }}
                />

                <IconButton
                  onClick={handleRefresh}
                  sx={{
                    border: "1px solid #1B3F8F",
                    borderRadius: "10px",
                    width: 40,
                    height: 40,
                  }}
                >
                  <RefreshIcon sx={{ color: "#1E3A8A" }} />
                </IconButton>
              </Box>

              {/* Table Section */}
              <Table />
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Home;
