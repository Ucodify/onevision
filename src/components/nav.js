import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = (drawerOpen) => {
  const navigate = useNavigate();

  const location = useLocation();
  const cards = [
    { id: 1, title: "Location", path: "/" },
    { id: 2, title: "Users", path: "/users" },
    { id: 3, title: "Lessons", path: "/lessons" },
    { id: 4, title: "Role", path: "/role" },
  ];

  return (
    <Grid
      container
      spacing={0}
      sx={{
        p: 2,
        justifyContent: "center",
        alignItems: "center",
        mt: 6,
        px: drawerOpen ? "12px" : "10px",
        mx: 60,
        width: drawerOpen ? "660px" : "400px",
      }}
    >
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.title}>
          <Card
            onClick={() => {
              setTimeout(() => navigate(card.path), 100);
              navigate(card.path);
            }}
            sx={{
              mt: 4,
              pt: 4,
              cursor: "pointer",
              textAlign: "center",
              border: "1px solid #2f4994ff",
              borderRadius: "0px",
              width: 150,
              height: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage:
                location.pathname === card.path
                  ? "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))"
                  : "none",
              backgroundColor:
                location.pathname === card.path ? "#374f9aff" : "#fff",
              color: location.pathname === card.path ? "#fff" : "#374f9aff",
              transition: "0.3s ease",
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography
                variant='subtitle1'
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: "4px",
                }}
              >
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Nav;
