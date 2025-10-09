import React, { useState } from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import BasicSelect from "./Select";
import Nav from "./nav";
import MiniDrawer from "../components/Drawer";
import { Box } from "@mui/material";
const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <div className=''>
          <MiniDrawer onDrawerToggle={setDrawerOpen} />
          <Box
            sx={{
              flexGrow: 1,
              transition: "margin 0.3s ease, width 0.3s ease",
              width: drawerOpen ? "1700px" : "1880px",
              ml: drawerOpen ? "200px" : "40px",
            }}
          >
            <Navbar drawerOpen={drawerOpen} />
            <Box
              sx={{
                mt: 10,
                px: 1,
                bgcolor: "#F6F6F6",
              }}
            >
              <Box sx={{ ml: drawerOpen ? "0px" : "120px", mt: "-30px" }}>
                <Nav />
              </Box>
              <BasicSelect />
              <Table />
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Home;
