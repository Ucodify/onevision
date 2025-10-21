import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Button,
  Modal,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  CardMedia,
} from "@mui/material";

// import ReactPlayer from "react-player/youtube";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const Quizzes = () => {
  const navigate = useNavigate();
  const isSmall = useMediaQuery("(max-width: 900px)");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("pending");
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [openFeedback, setOpenFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  // ---- Example lesson list ----
  const lessons = [
    {
      id: 1,
      title: "React Basics",
      updatedOn: "Oct 1, 2025",
      earned: "$2",
      slidesAttempted: 1,
      totalSlides: 5,
    },
    {
      id: 2,
      title: "React Hooks",
      updatedOn: "Oct 2, 2025",
      earned: "$4",
      slidesAttempted: 3,
      totalSlides: 5,
    },
    {
      id: 3,
      title: "React Router",
      updatedOn: "Oct 3, 2025",
      earned: "$5",
      slidesAttempted: 2,
      totalSlides: 5,
    },
    {
      id: 4,
      title: "React State",
      updatedOn: "Oct 4, 2025",
      earned: "$3",
      slidesAttempted: 4,
      totalSlides: 5,
    },
  ];

  const filteredLessons = lessons.filter((l) =>
    l.title.toLowerCase().includes(search.toLowerCase())
  );

  // ---- Example slide data ----
  const slides = [
    {
      id: 1,
      type: "info",
      title: "Introduction to React",
      content:
        "React is a JavaScript library for building user interfaces using components and a virtual DOM.",
    },
    {
      id: 2,
      type: "mcq",
      title: "React Basics Quiz",
      question: "Which hook is used to manage state in functional components?",
      options: ["useContext", "useState", "useEffect", "useReducer"],
      correct: "useState",
    },
    {
      id: 3,
      type: "video",
      title: "React Lifecycle Video",
      videoUrl: "https://www.youtube.com/watch?v=dGcsHMXbSOA",
    },
    {
      id: 4,
      type: "info",
      title: "Completion Message",
      content: "You have completed the quiz! Click acknowledge below.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  // const handleSubmitQuiz = () => {
  //   alert("🎉 Quiz submitted successfully! You earned $4");
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmall ? "column" : "row",
        minHeight: "100vh",

        p: isSmall ? 2 : 0,
        width: { md: "1900px" },
      }}
    >
      {/* Left Sidebar */}
      <Box
        sx={{
          flex: isSmall ? "none" : "0 0 25%",
          bgcolor: "#F9F9F9",
          p: 0,
          height: isSmall ? "auto" : "100vh",
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            color: "#135098",
            fontWeight: "bold",
            mb: 1,
            mx: 2,
            mt: 6,
            fontSize: 19,
          }}
          varient='h6'
        >
          Test Category Here
        </Button>

        <Typography
          variant='h6'
          sx={{ color: "#135098", fontWeight: "bold", mb: 2 }}
        ></Typography>
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
                  color: "white !important",
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
        <TextField
          placeholder='Search Lesson...'
          size='small'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              width: { xs: "100%", sm: "80%", md: "80%", lg: "150%" }, // ✅ responsive width
              ml: 4,
              bgcolor: "white",
            },
          }}
        />

        <Typography sx={{ fontWeight: "bold", m: 1 }}>Lessons</Typography>
        <List>
          {filteredLessons.map((lesson, index) => (
            <ListItem
              key={index}
              onClick={() => setSelectedLesson(index)}
              sx={{
                mb: 1,
                // borderRadius: "10px",
                borderBottom: "16px solid #F9F9F9",
                bgcolor: selectedLesson === index ? "#4172AC" : "#FFFFFF",
                color: selectedLesson === index ? "#FFFFFF" : "#263538",
                cursor: "pointer",
                height: "130px",
                // width: "450px",
                //transition: "all 0.3s ease",
                //   position: "relative",
                //   right: 30,
                //   zIndex: 2000,
              }}
            >
              <ListItemText
                primary={
                  <>
                    <Typography sx={{ fontWeight: 700 }}>
                      {lesson.title}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "13px" }}
                    >{`( Amount: ${lesson.earned} )`}</Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      sx={{
                        fontSize: "9px",
                        fontWeight: 600,
                        mt: 3,
                        color: selectedLesson === index ? "#FFFFFF" : "#263538",
                      }}
                    >
                      Updated on: ${lesson.updatedOn}
                    </Typography>
                  </>
                }
              />
              {/* Circular progress */}
              <Box position='relative' display='inline-flex'>
                <CircularProgress
                  variant='determinate'
                  value={(lesson.slidesAttempted / lesson.totalSlides) * 100}
                  size={52}
                  thickness={7}
                  sx={{
                    color: selectedLesson === index ? "#e0e0e0" : "#1976d2",
                  }}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position='absolute'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Typography
                    variant='caption'
                    sx={{ color: selectedLesson === index ? "#fff" : "#000" }}
                  >
                    {Math.round(
                      (lesson.slidesAttempted / lesson.totalSlides) * 100
                    )}
                    %
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right Main Quiz Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#fff",
          p: isSmall ? 2 : 6,
          position: "relative",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant='h5'
            sx={{
              color: "#135098",
              fontWeight: "bold",
              position: "relative",
              left: 550,
              textAlign: "center",
            }}
          >
            {currentSlide.title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 20,
              position: "absolute",
              right: 650,
              top: 100,
              mb: 100,
            }}
          >
            <i
              className='fa fa-question-circle'
              style={{ fontSize: "20px" }}
            ></i>{" "}
            Quizes: 0
          </Typography>
        </Box>

        {/* Slide Content */}
        <Card
          sx={{
            flex: 1,
            p: 3,
            mt: 4,
            mb: 3,
            borderRadius: "16px",
            bgcolor: "#fff",
            boxShadow: 1,
            height: "550px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => setOpenFeedback(true)}
            variant='contained'
            sx={{
              bgcolor: "#E8EDFC",
              textTransform: "none",
              fontSize: "12px",
              fontWeight: 800,
              color: "#135098",
              px: 3,
              py: 1,
              width: "fit-content",
              alignSelf: "flex-start",
              position: "relative",
              bottom: "20vh",
            }}
          >
            Report an Issue
          </Button>
          <Dialog
            open={openFeedback}
            onClose={() => setOpenFeedback(false)}
            sx={{ p: 5, pb: 10 }}
          >
            <DialogTitle sx={{ fontWeight: "550", fontSize: "30px" }}>
              What Feedback you have?
            </DialogTitle>
            <DialogContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                minWidth: 500,
                minHeight: 300,
                p: 5,
              }}
            >
              <Rating
                value={rating}
                onChange={(e, newValue) => setRating(newValue)}
                align='center'
                style={{
                  textAlign: "center",
                  fontSize: 40,
                  bgcolor: "#CCCCCC",
                  alignContent: "center",
                  marginLeft: 100,
                }}
              />

              {/* Slide info (example) */}
              <Typography variant='body2'>
                <span style={{ fontWeight: "550" }}>Slide Title:</span>{" "}
                {currentSlide.title}
              </Typography>
              <Typography variant='body2'>
                {" "}
                <span style={{ fontWeight: "550" }}>Slide Number: </span> 3
              </Typography>
              <Typography variant='body2'>
                <span style={{ fontWeight: "550" }}>Author: </span>xyz
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Please share any feedback
              </Typography>
              <TextField
                label='Write feedback here'
                multiline
                rows={3}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                fullWidth
              />
            </DialogContent>

            <DialogActions sx={{ m: 1 }}>
              <Button
                onClick={() => setOpenFeedback(false)}
                sx={{ bgcolor: "#F4F4F4", color: "#727272", fontWeight: 600 }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  console.log({ rating, feedback });
                  setOpenFeedback(false);
                }}
                variant='contained'
                rounded
                sx={{ bgcolor: "#245193" }}
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          {currentSlide.type === "info" && (
            <>
              <Typography variant='body1' sx={{ color: "gray" }}>
                {currentSlide.content}
              </Typography>
            </>
          )}
          {currentSlide.type === "mcq" && (
            <>
              <Typography variant='body1' sx={{ mb: 2 }}>
                {currentSlide.question}
              </Typography>
              <RadioGroup
                value={selectedAnswer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              >
                {currentSlide.options.map((option, idx) => (
                  <FormControlLabel
                    key={idx}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
              {selectedAnswer && (
                <Typography
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    color:
                      selectedAnswer === currentSlide.correct ? "green" : "red",
                  }}
                >
                  {selectedAnswer === currentSlide.correct
                    ? "✅ Correct!"
                    : "❌ Incorrect!"}
                </Typography>
              )}
            </>
          )}
          {currentSlide.type === "video" && (
            <Box
              sx={{
                width: "100%",
                height: isSmall ? "220px" : "470px",
                borderRadius: "10px",
                bgcolor: "black",
              }}
            >
              {console.log("Current Slide:", currentSlide)}
              {console.log("Slide Type:", currentSlide.type)}
              {console.log("Video URL:", currentSlide.videoUrl)}
              <Card sx={{ maxWidth: 800, mx: "auto" }}>
                <CardMedia
                  component='video'
                  controls
                  src='https://www.youtube.com/watch?v=dCLhUialKPQ&t=3158s'
                  sx={{ height: { xs: 200, md: 400 } }}
                />
              </Card>
            </Box>
          )}
        </Card>
        {/* ✅ Acknowledge or Submit Button */}
        {currentSlide.id < slides.length ? (
          <Button
            variant='contained'
            onClick={() => {
              setOpen(true); // show congratulations modal
              setTimeout(() => {
                const nextSlide = slides.find(
                  (s) => s.id === currentSlide.id + 1
                );
                if (nextSlide) {
                  setCurrentSlide(nextSlide);
                  setSelectedAnswer("");
                }
              }, 1200); // small delay for smooth transition
            }}
            sx={{
              alignSelf: "center",
              bgcolor: "#135098",
              borderRadius: "30px",
              px: 4,
              py: 1.2,
              mb: 3,
              "&:hover": { bgcolor: "#0e3f7e" },
            }}
          >
            Acknowledge
          </Button>
        ) : (
          <Button
            variant='contained'
            onClick={() => {
              setOpen(true); // show modal
              setTimeout(() => {
                // handleSubmitQuiz(); // submit logic
                const nextLessonIndex = (selectedLesson + 1) % lessons.length;
                setSelectedLesson(nextLessonIndex);
                setCurrentSlide(slides[0]);
              }, 1500); // short delay to see modal
            }}
            sx={{
              alignSelf: "center",
              bgcolor: "#135098",
              borderRadius: "30px",
              px: 4,
              py: 1.2,
              mb: 3,
              "&:hover": { bgcolor: "#0e3f7e" },
            }}
          >
            Submit Quiz
          </Button>
        )}
        {/* ✅ Slides Preview Bar  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            mt: 4,
          }}
        >
          {slides.map((slide, index) => {
            const isActive = currentSlide.id === slide.id;
            const isCompleted = slide.id < currentSlide.id;

            return (
              <Box
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(slide);
                  setSelectedAnswer("");
                }}
                sx={{
                  width: 120,
                  height: 120,
                  position: "relative",
                  borderRadius: "8px",
                  cursor: "pointer",
                  bgcolor: "#d3d3d3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: isActive
                    ? "3px solid #135098"
                    : isCompleted
                    ? "3px solid #00c853"
                    : "2px solid #d32f2f",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                {/* ✅ Header */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.8,
                    fontWeight: "bold",
                    color: "#808080",
                    fontSize: 14,
                    mb: 20, // adds small space below for slides
                  }}
                >
                  📋 Content
                  <i
                    className='fa fa-question-circle'
                    style={{ color: "#134567", fontSize: "16px" }}
                  ></i>
                </Box>

                {/* ✅ Center content (check or blank) */}
                {isCompleted && (
                  <Box
                    sx={{
                      position: "absolute",
                      color: "#00c853",
                      fontSize: 30,
                    }}
                  >
                    ✅
                  </Box>
                )}

                {/* ✅ Bottom-left slide number */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    bgcolor: isActive
                      ? "#135098"
                      : isCompleted
                      ? "#000"
                      : "#d32f2f",
                    color: "white",
                    borderTopRightRadius: "6px",
                    px: 1.2,
                    py: 0.3,
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fff",
              borderRadius: "16px",
              boxShadow: 24,
              p: 4,
              textAlign: "center",
            }}
          >
            <Typography variant='h5' sx={{ mb: 2, color: "#135098" }}>
              🎉 Congratulations!
            </Typography>
            <Typography sx={{ mb: 3 }}>
              You have earned <strong>$4</strong> on completing this quiz!
            </Typography>
            <Button
              variant='contained'
              sx={{
                bgcolor: "#135098",
                "&:hover": { bgcolor: "#0e3f7e" },
                borderRadius: "30px",
              }}
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Quizzes;
