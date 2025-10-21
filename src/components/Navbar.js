import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import TemporaryDrawer from "./Drawer";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import wave from "../wave.png";
import logo from "../images/logo.png";
import MiniDrawer from "./Drawer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    marginLeft: theme.spacing(8),
    width: "300px",
  },
  borderRadius: "50px",
  border: "1px solid #cccccc",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#666666",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ drawerOpen }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      className='appbar'
    >
      <AppBar
        overflow='hidden'
        position='fixed'
        sx={{
          backgroundColor: "#ffffff",
          color: "#333",
          boxShadow: "none",
          transition: "width 0.3s ease, margin 0.3s ease",
          width: drawerOpen ? "calc(100% - 60px)" : "calc(100% - 60px)",
          // ml: drawerOpen ? "220px" : "60px",
          height: "60px",
        }}
      >
        <Toolbar sx={{}}>
          <IconButton
            size='small'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MiniDrawer />
          </IconButton>
          <a href='/' className='underline-elearning'>
            {" "}
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ display: { xs: "none", sm: "block", mb: "1px" } }}
              className='navbar'
              visibility={drawerOpen ? "hidden" : "visible"}
            >
              eLearning
            </Typography>
          </a>
          <img src={logo} alt='logo' className='logo' />
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: "none", sm: "block" } }}
            className='oneVision'
          >
            OneVision
          </Typography>
          <Search sx={{ backgroundColor: "white", border: "5px rounded gray" }}>
            <SearchIconWrapper sx={{ color: "gray" }}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div className='customer'>
            <NotificationsNoneOutlinedIcon
              sx={{
                flexGrow: 1,
                color: "gray",
                position: "relative",
                bottom: "40px",
                right: "50px",
              }}
            />
            <img src={wave} className='wave' alt='wave' />
            <div className='hi'>
              <h4>Hi! Company Owner Test</h4>
              <p className='profile-view'>undefined</p>
            </div>
            <AccountCircleOutlinedIcon
              sx={{
                flexGrow: 1,
                color: "brown",
                position: "absolute",
                bottom: "40px",
                left: "220px",
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
