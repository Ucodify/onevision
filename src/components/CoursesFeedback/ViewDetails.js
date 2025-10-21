import React, { useState } from "react";
import {
  Box,
  Typography,
  Link,
  Select,
  MenuItem,
  Avatar,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import Navbar from "../Navbar";

const ViewDetails = () => {
  const [status, setStatus] = useState("New");
  const [reply, setReply] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Kaushik ",
      role: "CelloIP",
      text: "kaushik@gmail.com",
      time: "2024-12-27T12:42:42.095Z",
    },
    {
      id: 2,
      user: "You",
      text: "check",
      time: "2025-10-15T10:22:08.084Z",
    },
  ]);

  const handleChange = (event) => setStatus(event.target.value);

  const handleReply = () => {
    if (!reply.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      user: "You",
      text: reply,
      time: new Date().toISOString(),
    };
    setMessages([...messages, newMsg]);
    setReply("");
  };
  // const [drawerOpen, setDrawerOpen] = useState(false);
   
    
   
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 1,
        p: 2,
        width: { md: "315%", xs: "95%" },
        ml: { xs: "2.5%", sm: "2.5%", md: "15%" },
        mr: { xs: "2.5%", sm: "2.5%", md: "10%" },
        mt: { xs: 2, sm: 2, md: 10 },
        boxShadow: "0 0 6px rgba(0,0,0,0.15)",
      }}
    >
      <Navbar />
      {/* ===== Header Section ===== */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
            Lesson Title:
            <Typography
              component='span'
              sx={{ ml: 1, fontWeight: "normal", fontSize: 14 }}
            >
              as mdkam sd
            </Typography>
          </Typography>

          <Typography sx={{ fontWeight: "bold", mt: 1, fontSize: 14 }}>
            Lesson URL:
            <Link
              href='https://dashboard.onevision.io/elearning/mycourses/slider/66f133ededb5b636686b3f4d/66f1354aedb5b636686b4de3'
              target='_blank'
              sx={{ ml: 1 }}
            >
              https://dashboard.onevision.io/elearning/mycourses/slider/66f133ededb5b636686b3f4d/66f1354aedb5b636686b4de3
            </Link>
          </Typography>

          <Typography sx={{ fontWeight: "bold", mt: 1, fontSize: 14 }}>
            Slide Title:
            <Typography component='span' sx={{ ml: 1, fontWeight: "normal" }}>
              slide 1
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center", mt: { xs: 2, sm: 0 } }}
        >
          <Typography sx={{ fontWeight: "bold", mr: 1 }}>Status:</Typography>
          <FormControl size='small'>
            <Select
              value={status}
              onChange={handleChange}
              sx={{
                bgcolor: "#fff",
                borderRadius: 1,
                boxShadow: "0 0 3px rgba(0,0,0,0.2)",
              }}
            >
              <MenuItem value='New'>New</MenuItem>
              <MenuItem value='Resolved'>Closed</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* ===== Feedback Bar ===== */}
      <Box
        sx={{
          bgcolor: "#135098",
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold",
          py: 1.2,
          mt: 2,
          borderRadius: 1,
        }}
      >
        Feedback
      </Box>

      {/* ===== Messages Section ===== */}
      <Box sx={{ mt: 2 }}>
        {messages.map((msg) => (
          <Box
            key={msg.id}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              mb: 1.5,
            }}
          >
            <Avatar
              sx={{
                mr: 1.5,
                bgcolor: "#e5e7eb",
                color: "#000",
                fontWeight: "bold",
                fontSize: 9,
              }}
            ></Avatar>
            <Box
              sx={{
                mt: { md: "50px" },
                fontSize: "12px",
                position: "relative",
                right: "55px",
                mr: -3,
              }}
            >
              {msg.user}
              <br />
              {msg.role}
            </Box>
            <Box
              sx={{
                bgcolor: "#f9f9f9",
                p: 1.5,
                borderRadius: 2,
                flex: 1,
              }}
            >
              <Typography sx={{ mt: 0.5, fontSize: 14 }}>{msg.text}</Typography>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: 12,
                  color: "gray",
                  mt: 0.5,
                }}
              >
                {msg.time}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* ===== Reply Input ===== */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          gap: 1,
        }}
      >
        <TextField
          fullWidth
          placeholder='Add Reply...'
          size='small'
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          sx={{
            bgcolor: "#f9f9f9",
            borderRadius: "50px",
            "& .MuiOutlinedInput-root": { borderRadius: "50px" },
          }}
        />
        <Button
          onClick={handleReply}
          sx={{
            bgcolor: "#135098",
            color: "#fff",
            px: 3,
            borderRadius: "50px",
            textTransform: "none",
            "&:hover": { bgcolor: "#13357a" },
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ViewDetails;
