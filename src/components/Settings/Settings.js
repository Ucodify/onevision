import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MiniDrawer from "../Drawer";
import SearchAppBar from "../Navbar";

// ----------------------------------------------------------------------
// Helper Component for a Section Card
// ----------------------------------------------------------------------
const SettingsCard = ({ title, children }) => (
  <Card
    sx={{
      marginBottom: 3,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",

      color: "#135098",
      fontWeight: "bold",
      height: 200,
    }}
  >
    <CardContent sx={{ color: "#135098" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant='h6' color=' #135098'>
          {title}
        </Typography>
        <IconButton size='small' aria-label={`edit ${title}`}>
          <EditIcon fontSize='small' />
        </IconButton>
      </Box>
      {children}
    </CardContent>
  </Card>
);

// ----------------------------------------------------------------------
// Main Settings Page Component
// ----------------------------------------------------------------------
const Settings = () => {
  const [updateFrequency, setUpdateFrequency] = useState("day");
  const [earningEnabled, setEarningEnabled] = useState(true);
  const [earningModuleType, setEarningModuleType] = useState("both");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleFrequencyChange = (event) => {
    setUpdateFrequency(event.target.value);
  };

  const handleEarningTypeChange = (event) => {
    setEarningModuleType(event.target.value);
  };

  const handleEarningToggle = (event) => {
    setEarningEnabled(event.target.checked);
  };

  return (
    <>
      <MiniDrawer onDrawerToggle={setDrawerOpen} />
      <SearchAppBar drawerOpen={drawerOpen} />
      <Box
        sx={{
          padding: 3,
          mt: 15,
          color: "#135098",
          width: { md: drawerOpen ? "1600px" : "1800px" },
          ml: { md: drawerOpen ? 30 : 10 },
        }}
      >
        <Typography
          variant='h5'
          sx={{ mb: 4, fontSize: 35, fontWeight: "bold", color: "#135098" }}
        >
          Settings
        </Typography>

        {/* 1. Dashboard Auto Update Section */}
        <SettingsCard title='Dashboard Auto Update'>
          <Box sx={{ display: "flex", alignItems: "center", color: "#135098" }}>
            <Typography variant='body1' sx={{ mr: 1 }}>
              Dashboard data will be auto updated every
            </Typography>
            <FormControl variant='outlined' size='small'>
              <Select
                value={updateFrequency}
                onChange={handleFrequencyChange}
                displayEmpty
                inputProps={{ "aria-label": "Update Frequency" }}
                sx={{ minWidth: 100 }}
              >
                <MenuItem value='day'>Day</MenuItem>
                <MenuItem value='week'>Week</MenuItem>
                <MenuItem value='month'>Month</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </SettingsCard>

        {/* 2. Earning Module Section */}
        <SettingsCard title='Earning'>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={earningEnabled}
                  onChange={handleEarningToggle}
                  color='#135098'
                />
              }
              label='Enable earning module'
              sx={{ mr: 2 }} // Space between checkbox and select
            />
            <FormControl variant='outlined' size='small'>
              <Select
                value={earningModuleType}
                onChange={handleEarningTypeChange}
                displayEmpty
                inputProps={{ "aria-label": "Earning Module Type" }}
                disabled={!earningEnabled} // Disable if checkbox is unchecked
                sx={{ minWidth: 100 }}
              >
                <MenuItem value='both'>Both</MenuItem>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='user'>User</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </SettingsCard>
      </Box>
    </>
  );
};

export default Settings;
