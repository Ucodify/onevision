// Drawer.js
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import GridViewIcon from "@mui/icons-material/GridView";
import { styled } from "@mui/material/styles";
import menu from "../images/menu.png";
import knowledgebase from "../images/knowledgebase.png";
import pc from "../images/pc.png";
import books from "../images/books.png";

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  width: 60,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
});

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ onDrawerToggle }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    const newState = !open;
    setOpen(newState);
    if (onDrawerToggle) onDrawerToggle(newState); // inform parent
  };

  const menuItems = [
    { text: "ELearning", label: "ELearning" },
    { text: "Dashboard", icon: <GridViewIcon /> },
    {
      text: "Knowledgebase",
      icon: <img src={knowledgebase} alt='pc' height={20} />,
    },
    { text: "My Courses", icon: <img src={pc} alt='pc' height={20} /> },
    { text: "Courses Feedback", icon: <img src={pc} alt='pc' height={20} /> },
    { text: "Library", icon: <img src={books} alt='books' height={20} /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          color: "gray",
          position: "fixed",
          top: 25,
          left: open ? 10 : 10,
          zIndex: 2000,
          transition: "left 0.3s ease",
        }}
      >
        <img src={menu} alt='menu' height={20} />
      </IconButton>

      <StyledDrawer variant='permanent' open={open}>
        <Box sx={{ bgcolor: "#f8f9ff", height: "100%", pt: 1.5 }}>
          <List>
       
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                sx={{ display: "block", ml: "10px", mb: "2px" 
               }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                      color: "#7C7C7C"
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      opacity: open ? 1 : 0,
                      "& .MuiTypography-root": {
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#7C7C7C"
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </StyledDrawer>
    </Box>
  );
}
