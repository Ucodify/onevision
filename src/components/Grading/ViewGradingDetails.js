import React, { useState } from "react";
import { Box, Typography, IconButton, Button, Paper } from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FileText,
  Grid3x3,
  Fullscreen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ViewGradingDetails() {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();
  const totalSlides = 2;

  const goToNextSlide = () => {
    if (currentSlide < totalSlides) setCurrentSlide(currentSlide + 1);
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
  };

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);
  const goBack = () => {
    navigate("/grading");
  }

  return (
    <Box
      sx={{
        width: "1900px",
        minHeight: "100vh",
        bgcolor: "grey.200",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: isFullscreen ? 0 : 4,
      }}
    >
      {/* Header */}
      {!isFullscreen && (
        <>
          <Box
            sx={{
              width: "100%",
              maxWidth: "1200px",
              mb: 2,
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <IconButton
              onClick={goBack}
              sx={{
                p: 1,
                borderRadius: 2,
                "&:hover": { bgcolor: "grey.300" },
                mt: 3,
              }}
            >
              <ChevronLeft size={24} color='#374151' sx={{ mt: 10 , position:'relative' , top:'10'}} />
            </IconButton>
          </Box>

          {/* Lesson Title */}
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant='body2' color='text.secondary' mb={1}>
              Lesson:
            </Typography>
            <Typography
              variant='h5'
              fontWeight='bold'
              color='primary.dark'
              mb={2}
            >
              ppt lesson 1
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
              <Paper
                sx={{
                  width: 28,
                  height: 30,
                  border: "2px solid",
                  borderColor: "grey.400",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 0.5,
                  boxShadow: 1,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    borderLeft: "8px solid transparent",
                    borderTop: "8px solid #d1d5db",
                  },
                }}
              >
                <FileText size={16} color='#6b7280' />
              </Paper>
              <Typography
                variant='body2'
                color='text.secondary'
                fontWeight='500'
              >
                1
              </Typography>
            </Box>
          </Box>

          {/* Difficulty Tag */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1200px",
              display: "flex",
              justifyContent: "flex-end",
              mb: 2,
            }}
          >
            <Paper
              sx={{
                px: 2.5,
                py: 0.5,
                bgcolor: "white",
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 1,
                boxShadow: 1,
                position: "relative",
                left: 100,
                bottom: 100,
              }}
            >
              <Typography variant='body2' color='text.secondary'>
                Easy
              </Typography>
            </Paper>
          </Box>
        </>
      )}

      {/* Slide Container */}
      <Box
        sx={{
          width: isFullscreen ? "100%" : "100%",
          maxWidth: isFullscreen ? "100%" : "1200px",
          bgcolor: "black",
          borderRadius: isFullscreen ? 0 : 2,
          boxShadow: 6,
          overflow: "hidden",
          p: "2px",
          position: "relative",
        }}
      >
        {/* Slide Content */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: isFullscreen ? "100vh" : 500,
            background:
              "linear-gradient(to bottom right, #fff7ed, #fef9c3, #fee2e2)",
            minHeight: isFullscreen ? "calc(100vh - 40px)" : 350,
          }}
        >
          {/* Watermarks */}
          <Typography
            sx={{
              position: "absolute",
              top: "5%",
              left: "2%",
              transform: "rotate(-12deg)",
              opacity: 0.05,
              fontSize: 140,
              fontWeight: 900,
              color: "error.dark",
            }}
          >
            SHAWARMA
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              bottom: "8%",
              right: "3%",
              transform: "rotate(8deg)",
              opacity: 0.05,
              fontSize: 120,
              fontWeight: 900,
              color: "warning.dark",
            }}
          >
            POUTINE
          </Typography>

          {/* Title */}
          <Box sx={{ pt: 10, pb: 8 }}>
            <Typography
              variant='h4'
              fontWeight='900'
              color='error.main'
              textAlign='center'
              textTransform='uppercase'
              sx={{ letterSpacing: "0.1em" }}
            >
              Specialty Dishes - Shawarma Poutine
            </Typography>
          </Box>

          {/* Content */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              px: 8,
              pb: 10,
              gap: 6,
              flexWrap: "wrap",
            }}
          >
            {/* Illustration */}
            <Box sx={{ flexShrink: 0, width: 350 }}>
              {/* (SVG stays the same) */}
              {/* You can keep your SVG as-is — it’s already styled inline */}
            </Box>

            {/* Directions */}
            <Box sx={{ flex: 1, maxWidth: 500 }}>
              <Paper
                sx={{
                  border: "4px solid",
                  borderColor: "error.main",
                  borderRadius: "24px",
                  p: 4,
                  bgcolor: "white",
                  boxShadow: 10,
                }}
              >
                <Box textAlign='center' mb={3}>
                  <Box
                    sx={{
                      bgcolor: "error.main",
                      color: "white",
                      display: "inline-block",
                      px: 4,
                      py: 1,
                      borderRadius: "9999px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Directions
                  </Box>
                </Box>

                {/* Steps */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    height: isFullscreen ? "100" : "100px",
                    overflowY: "auto",
                  }}
                >
                  {[
                    [
                      "STEP 1: PLACE CORRECT QUANTITY OF STIX IN A CONTAINER:",
                      "MEDIUM: 14OZ 230 GRAMS // LARGE: 20OZ 275 GRAMS",
                    ],
                    [
                      "STEP 2: ADD CHEESE CURDS.",
                      "MEDIUM: 30 GRAMS (1/4 CUP) // LARGE: 50 GRAMS (1/3 CUP)",
                    ],
                    [
                      "STEP 3: ADD HOT GRAVY ON TOP OF STIXS AND CHEESE CURDS",
                      "MEDIUM: 4OZ // LARGE: 6 OZ",
                    ],
                    [
                      "STEP 4: PLACE CORRECT PORTION OF PROTEIN ON TOP",
                      "MEDIUM: 5OZ OF PROTEIN - 4 FALAFEL PIECES // LARGE: 6OZ OF PROTEIN - 6 FALAFEL PIECES",
                    ],
                    [
                      "STEP 5: ADD GARLIC SAUCE ON LIGHT & VEGAN GARLIC (BASED ON CUSTOMERS REQUEST).",
                      "",
                    ],
                    ["STEP 6: ADD HOT SAUCE (IF APPLICABLE)", ""],
                  ].map(([step, sub], idx) => (
                    <Box key={idx}>
                      <Typography
                        variant='body2'
                        fontWeight='bold'
                        color='grey.900'
                      >
                        {step}
                      </Typography>
                      {sub && (
                        <Typography
                          variant='body2'
                          color='error.main'
                          fontWeight='600'
                          mt={0.5}
                        >
                          {sub}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>

        {/* Slide Controls */}
        <Box
          sx={{
            bgcolor: "grey.800",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1,
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "linear-gradient(to bottom right, #ea580c, #dc2626)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              boxShadow: 2,
            }}
          >
            <FileText size={14} color='white' />
          </Box>

          {/* Navigation */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={goToPreviousSlide}
              disabled={currentSlide === 1}
              sx={{
                p: 0.5,
                color: "white",
                opacity: currentSlide === 1 ? 0.5 : 1,
                "&:hover": { bgcolor: "grey.700" },
              }}
            >
              <ChevronLeft size={16} />
            </IconButton>
            <Typography variant='caption' fontWeight='500'>
              SLIDE {currentSlide} OF {totalSlides}
            </Typography>
            <IconButton
              onClick={goToNextSlide}
              disabled={currentSlide === totalSlides}
              sx={{
                p: 0.5,
                color: "white",
                opacity: currentSlide === totalSlides ? 0.5 : 1,
                "&:hover": { bgcolor: "grey.700" },
              }}
            >
              <ChevronRight size={16} />
            </IconButton>
          </Box>

          {/* View options */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <IconButton
              sx={{ color: "white", "&:hover": { bgcolor: "grey.700" } }}
            >
              <Grid3x3 size={14} />
            </IconButton>
            <IconButton
              onClick={toggleFullscreen}
              sx={{ color: "white", "&:hover": { bgcolor: "grey.700" } }}
            >
              <Maximize2 size={14} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Bottom File Indicator */}
      {!isFullscreen && (
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography
            variant='caption'
            color='text.secondary'
            mb={1}
            position='relative'
            left={30}
            bottom={40}
          >
            File
          </Typography>
          <Paper
            sx={{
              display: "inline-block",
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              p: 2,
              boxShadow: 4,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <FileText size={20} color='#6b7280' />
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "primary.main",
                  color: "white",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                1
              </Box>
            </Box>
          </Paper>
        </Box>
      )}
    </Box>
  );
}
