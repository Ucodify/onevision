import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import RemoveIcon from "@mui/icons-material/Remove";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  TextField,
  Typography,
  Select,
  Menu,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Button,
  Switch,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Grid,
  Card,
  Divider,
  Stack,
  InputAdornment,
  Paper,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description"; // for content
import MovieIcon from "@mui/icons-material/Movie"; // for video
import ImageIcon from "@mui/icons-material/Image"; // for image
import SlideshowIcon from "@mui/icons-material/Slideshow"; // for ppt
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import { Plus, Trash2, FileText, SquaresSubtractIcon } from "lucide-react";
import AddQuizModal from "./AddQuizModal";
import VideoUploadComponent from "./FileUploadComponent";
import FileUploadComponent from "./FileUploadComponent";

// Helper for Manager Confirmation/Video Quiz
const CollapsedSetting = ({ label }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      py: 0.5,
      pl: 1,
      cursor: "default",
      color: "#6c757d",
    }}
  >
    <ArrowRightIcon fontSize='small' sx={{ mr: 0.5, color: "#6c757d" }} />
    <Typography variant='body1'>{label}</Typography>
  </Box>
);

const AddLesson = () => {
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [editingQuiz, setEditingQuiz] = useState(false);
  const [quizMenuAnchor, setQuizMenuAnchor] = useState(null);
  const [quizMenuSelected, setQuizMenuSelected] = useState(null);
  const [lessonExpanded, setLessonExpanded] = useState(false);

  const handleQuizMenuOpen = (event, quiz) => {
    setQuizMenuAnchor(event.currentTarget);
    setQuizMenuSelected(quiz);
  };

  const handleQuizMenuClose = () => {
    setQuizMenuAnchor(null);
    setQuizMenuSelected(null);
  };

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [featured, setFeatured] = useState(false);
  const [managerConfirm, setManagerConfirm] = useState(false);
  const [videoQuiz, setVideoQuiz] = useState(false);
  const [amount, setAmount] = React.useState(0);
  const [points, setPoints] = React.useState(0);

  const [selectedSlide, setSelectedSlide] = useState(null);

  const handlePointsChange = (delta) => {
    setPoints((prev) => Math.max(0, prev + delta));
  };
  // inside AddLesson component:
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleMenuClose();
  };
  const [slides, setSlides] = useState([
    { id: 1, title: "Slide Title", content: "" },
  ]);
  const [activeSlide, setActiveSlide] = useState(1);
  const [quizzes, setQuizzes] = useState([]);

  const addSlide = () => {
    const newId = Math.max(...slides.map((s) => s.id), 0) + 1;
    setSlides([...slides, { id: newId, title: `Slide ${newId}`, content: "" }]);
    setActiveSlide(newId);
  };

  const deleteSlide = (id) => {
    if (slides.length > 1) {
      const newSlides = slides.filter((s) => s.id !== id);
      setSlides(newSlides);
      if (activeSlide === id) {
        setActiveSlide(newSlides[0].id);
      }
    }
  };

  const updateSlideTitle = (id, title) => {
    setSlides(slides.map((s) => (s.id === id ? { ...s, title } : s)));
  };

  const currentSlide = slides.find((s) => s.id === activeSlide);

  const handleSaveQuiz = (newQuiz) => {
    setQuizzes([...quizzes, newQuiz]);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
          py: 0.5,
          width: { md: 1900 },
        }}
      >
        <Button
          sx={{
            position: "relative",
            left: "1820px",
            color: "grey.300",
            fontSize: 15,
            width: 20,
          }}
        >
          X
        </Button>
      </Box>
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 2,
          p: 3,
          boxShadow: 1,
          width: "325%",
          alignItems: "center",
          minHeight: "100vh",
          ml: 3,
        }}
      >
        {/* =======================================
         Section 1: Add Lesson Details (4-3-1 Line Alignment)
         ======================================= */}
        <Box sx={{ bgcolor: "#0D47A1", p: 1.5, borderRadius: "4px 4px 0 0" }}>
          <Typography variant='h6' color='#fff' fontWeight='bold'>
            Add Lesson Details
          </Typography>
        </Box>
        <Card variant='outlined' sx={{ borderRadius: 0, p: 2 }}>
          <Grid container spacing={4}>
            {/* --- FIRST LINE: 4 Inputs (Each takes 3/12 of the container width) --- */}

            {/* 1. Lesson Name */}
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label='Name'
                size='small'
                sx={{ width: { md: 400 } }}
              />
            </Grid>

            {/* 2. Difficulty Level */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth size='small' sx={{ width: { md: 450 } }}>
                <InputLabel>Difficulty Level</InputLabel>
                <Select defaultValue='Easy' label='Difficulty Level'>
                  <MenuItem value='Easy'>Easy</MenuItem>
                  <MenuItem value='Medium'>Medium</MenuItem>
                  <MenuItem value='Hard'>Hard</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* 3. Categories */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth size='small' sx={{ width: { md: 400 } }}>
                <InputLabel>Choose Categories</InputLabel>
                <Select label='Choose Categories'>
                  <MenuItem value='Category 1'>Category 1</MenuItem>
                  <MenuItem value='Category 2'>Category 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* 4. Add Tag */}
            <Grid item xs={12} md={6} lg={3} sx={{ width: { md: 400 } }}>
              <TextField
                fullWidth
                label='Add a tag'
                variant='outlined'
                size='small'
              />
            </Grid>

            {/* --- SECOND LINE: 3 Elements (Total width is 12) --- */}

            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 2, width: "990%" }}
            >
              {/* 5. Lesson Description (Takes 6/12 width) */}
              <Grid item xs={12} md={6} lg={3} width={1000}>
                <TextareaAutosize
                  minRows={6}
                  placeholder='Enter lesson description'
                  style={{
                    width: "60%",
                    padding: "10px",
                    borderColor: "#c4c4c4",
                    borderRadius: "5px",
                    fontFamily: "inherit",
                    marginRight: 52,
                  }}
                />
                {/* 6. Select Duration (Next to Description on large screens) */}
                <Box
                  sx={{
                    border: "1px solid #c4c4c4",
                    borderRadius: "5px",
                    p: 1,
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    mb: 10, // Margin top to separate it visually if the container is tight
                    position: "relative",
                    left: 130,
                    top: -90,
                    width: 200,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant='body2' fontWeight='bold'>
                    Select Duration
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, width: 200, p: 1 }}>
                    <Select
                      size='small'
                      defaultValue='Day'
                      sx={{
                        width: 50,
                        height: 28,
                        fontSize: "0.65rem", // smaller text
                        "& .MuiSelect-select": {
                          py: 0.2, // reduce vertical padding
                          px: 0.5, // reduce horizontal padding
                        },
                      }}
                    >
                      <MenuItem value='Day'>Day</MenuItem>
                      <MenuItem value='1'>1</MenuItem>
                      <MenuItem value='2'>2</MenuItem>
                      <MenuItem value='3'>3</MenuItem>
                      <MenuItem value='4'>4</MenuItem>
                      <MenuItem value='5'>5</MenuItem>
                      <MenuItem value='6'>6</MenuItem>
                      <MenuItem value='7'>7</MenuItem>
                      <MenuItem value='8'>8</MenuItem>
                      <MenuItem value='9'>9</MenuItem>
                      <MenuItem value='10'>10</MenuItem>
                      <MenuItem value='11'>11</MenuItem>
                      <MenuItem value='12'>12</MenuItem>
                      <MenuItem value='13'>13</MenuItem>
                      <MenuItem value='14'>14</MenuItem>
                      <MenuItem value='15'>15</MenuItem>
                      <MenuItem value='16'>16</MenuItem>
                      <MenuItem value='17'>17</MenuItem>
                      <MenuItem value='18'>18</MenuItem>
                      <MenuItem value='19'>19</MenuItem>
                      <MenuItem value='20'>20</MenuItem>
                      <MenuItem value='21'>21</MenuItem>
                      <MenuItem value='22'>22</MenuItem>
                      <MenuItem value='23'>23</MenuItem>
                      <MenuItem value='24'>24</MenuItem>
                      <MenuItem value='25'>25</MenuItem>
                      <MenuItem value='26'>26</MenuItem>
                      <MenuItem value='27'>27</MenuItem>
                      <MenuItem value='28'>28</MenuItem>
                      <MenuItem value='29'>29</MenuItem>
                      <MenuItem value='30'>30</MenuItem>
                    </Select>
                    <Select
                      size='small'
                      defaultValue='Hour'
                      sx={{
                        minWidth: 20,
                        height: 28,
                        fontSize: "0.65rem", // smaller text
                        "& .MuiSelect-select": {
                          py: 0.2, // reduce vertical padding
                          px: 0.5, // reduce horizontal padding
                        },
                      }}
                    >
                      <MenuItem value='Hour'>Hour</MenuItem>
                      <MenuItem value='1'>1</MenuItem>
                      <MenuItem value='2'>2</MenuItem>
                      <MenuItem value='3'>3</MenuItem>
                      <MenuItem value='4'>4</MenuItem>
                      <MenuItem value='5'>5</MenuItem>
                      <MenuItem value='6'>6</MenuItem>
                      <MenuItem value='7'>7</MenuItem>
                      <MenuItem value='8'>8</MenuItem>
                      <MenuItem value='9'>9</MenuItem>
                      <MenuItem value='10'>10</MenuItem>
                      <MenuItem value='11'>11</MenuItem>
                      <MenuItem value='12'>12</MenuItem>
                      <MenuItem value='13'>13</MenuItem>
                      <MenuItem value='14'>14</MenuItem>
                      <MenuItem value='15'>15</MenuItem>
                      <MenuItem value='16'>16</MenuItem>
                      <MenuItem value='17'>17</MenuItem>
                      <MenuItem value='18'>18</MenuItem>
                      <MenuItem value='19'>19</MenuItem>
                      <MenuItem value='20'>20</MenuItem>
                      <MenuItem value='21'>21</MenuItem>
                      <MenuItem value='22'>22</MenuItem>
                      <MenuItem value='23'>23</MenuItem>
                    </Select>
                    <Select
                      size='small'
                      defaultValue='Min'
                      sx={{
                        minWidth: 20,
                        height: 28,
                        fontSize: "0.65rem", // smaller text
                        "& .MuiSelect-select": {
                          py: 0.2, // reduce vertical padding
                          px: 0.5, // reduce horizontal padding
                        },
                      }}
                    >
                      <MenuItem value='Min'>Min</MenuItem>
                      <MenuItem value='1'>1</MenuItem>
                      <MenuItem value='2'>2</MenuItem>
                      <MenuItem value='3'>3</MenuItem>
                      <MenuItem value='4'>4</MenuItem>
                      <MenuItem value='5'>5</MenuItem>
                      <MenuItem value='6'>6</MenuItem>
                      <MenuItem value='7'>7</MenuItem>
                      <MenuItem value='8'>8</MenuItem>
                      <MenuItem value='9'>9</MenuItem>
                      <MenuItem value='10'>10</MenuItem>
                      <MenuItem value='11'>11</MenuItem>
                      <MenuItem value='12'>12</MenuItem>
                      <MenuItem value='13'>13</MenuItem>
                      <MenuItem value='14'>14</MenuItem>
                      <MenuItem value='15'>15</MenuItem>
                      <MenuItem value='16'>16</MenuItem>
                      <MenuItem value='17'>17</MenuItem>
                      <MenuItem value='18'>18</MenuItem>
                      <MenuItem value='19'>19</MenuItem>
                      <MenuItem value='20'>20</MenuItem>
                      <MenuItem value='21'>21</MenuItem>
                      <MenuItem value='22'>22</MenuItem>
                      <MenuItem value='23'>23</MenuItem>
                      <MenuItem value='24'>24</MenuItem>
                      <MenuItem value='24'>24</MenuItem>
                      <MenuItem value='25'>25</MenuItem>
                      <MenuItem value='26'>26</MenuItem>
                      <MenuItem value='27'>27</MenuItem>
                      <MenuItem value='28'>28</MenuItem>
                      <MenuItem value='29'>29</MenuItem>
                      <MenuItem value='30'>30</MenuItem>
                      <MenuItem value='31'>31</MenuItem>
                      <MenuItem value='32'>32</MenuItem>
                      <MenuItem value='33'>33</MenuItem>
                      <MenuItem value='34'>34</MenuItem>
                      <MenuItem value='35'>35</MenuItem>
                      <MenuItem value='36'>36</MenuItem>
                      <MenuItem value='37'>37</MenuItem>
                      <MenuItem value='38'>38</MenuItem>
                      <MenuItem value='39'>39</MenuItem>
                      <MenuItem value='40'>40</MenuItem>
                      <MenuItem value='41'>41</MenuItem>
                      <MenuItem value='42'>42</MenuItem>
                      <MenuItem value='43'>43</MenuItem>
                      <MenuItem value='44'>44</MenuItem>
                      <MenuItem value='45'>45</MenuItem>
                      <MenuItem value='46'>46</MenuItem>
                      <MenuItem value='47'>47</MenuItem>
                      <MenuItem value='48'>48</MenuItem>
                      <MenuItem value='49'>49</MenuItem>
                      <MenuItem value='50'>50</MenuItem>
                      <MenuItem value='51'>51</MenuItem>
                      <MenuItem value='52'>52</MenuItem>
                      <MenuItem value='53'>53</MenuItem>
                      <MenuItem value='54'>54</MenuItem>
                      <MenuItem value='55'>55</MenuItem>
                      <MenuItem value='56'>56</MenuItem>
                      <MenuItem value='57'>57</MenuItem>
                      <MenuItem value='58'>58</MenuItem>
                      <MenuItem value='59'>59</MenuItem>
                    </Select>
                  </Box>
                </Box>
              </Grid>

              {/* 7. Upload Image (Takes 6/12 width, aligns to the right) */}
              <Grid item xs={12} md={6} lg={6}>
                <Button
                  variant='contained'
                  sx={{
                    bgcolor: "#0D47A1",
                    color: "#fff",
                    "&:hover": { bgcolor: "#0b3d91" },
                    mb: 1,
                    ml: 75,
                  }}
                >
                  Choose Image
                </Button>
                <Box
                  sx={{
                    width: "65%",
                    height: 200, // Increased height to balance the 6-width description
                    bgcolor: "#e0e0e0",
                    borderRadius: "5px",
                    border: "1px dashed #c4c4c4",
                    ml: { md: 33 },
                  }}
                ></Box>
              </Grid>
            </Box>

            {/* --- THIRD LINE: Last featured toggle --- */}
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant='body2' fontWeight='bold'>
                  Featured:
                </Typography>
                <Switch
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  color='primary'
                />
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* --- Section 2: Add Lesson Content --- */}
        <Box
          sx={{
            bgcolor: "#0D47A1",
            p: 1.2,
            borderRadius: "4px 4px 0 0",
            mt: 8,
          }}
        >
          <Typography variant='h6' color='#fff' fontWeight='bold'>
            Add Lesson Content
          </Typography>
        </Box>

        <Card
          variant='outlined'
          sx={{ borderRadius: 0, p: 3, textAlign: "center" }}
        >
          {!lessonExpanded ? (
            <Box>
              {/* --- ADD SLIDE BUTTON --- */}

              <Button
                variant='contained'
                sx={{
                  bgcolor: "#0D47A1",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  px: 12,
                  py: 1,
                  "&:hover": { bgcolor: "#0b3d91" },
                  position: "relative",
                  right: "38%",
                }}
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                ADD SLIDE
              </Button>

              {/* --- DROPDOWN MENU --- */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                {["Content", "Video", "Image", "PPT"].map((type) => (
                  <MenuItem
                    key={type}
                    onClick={() => {
                      setSelectedSlide(type);
                      setAnchorEl(null);
                      setLessonExpanded(true);
                    }}
                    sx={{
                      borderBottom: "0.5px solid #ADB0B3",
                      width: 190,
                      height: 25,
                      fontSize: 10,
                    }}
                  >
                    <ListItemText primary={type} sx={{ color: "#ADB0B3" }} />
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <>
              {" "}
              {/* --- EXPANDED SLIDE SECTION --- */}
              {selectedSlide && (
                <Box sx={{ minHeight: "100vh", bgcolor: "grey.50" }}>
                  <Box sx={{ display: "flex" }}>
                    {/* Sidebar */}
                    <Box
                      sx={{
                        width: 280,
                        bgcolor: "white",
                        borderRight: "1px solid",
                        borderColor: "grey.300",
                        p: 3,
                      }}
                    >
                      {/* Slides List */}
                      <Box sx={{ mb: 3 }}>
                        {slides.map((slide, index) => (
                          <Paper
                            key={slide.id}
                            elevation={activeSlide === slide.id ? 3 : 1}
                            onClick={() => setActiveSlide(slide.id)}
                            sx={{
                              position: "relative",
                              p: 2.5,
                              mb: 2,
                              borderRadius: 2,
                              border: "2px solid",
                              borderColor:
                                activeSlide === slide.id
                                  ? "primary.main"
                                  : "grey.300",
                              bgcolor: "#D9D9D9",
                              cursor: "pointer",
                              transition: "0.3s",
                              "&:hover": {
                                borderColor: "primary.light",
                              },
                            }}
                          >
                            <Box
                              sx={{ position: "relative", top: 8, right: 138 }}
                            >
                              <FileText
                                size={20}
                                color='#555'
                                sx={{
                                  bgcolor: "#53595C",
                                }}
                              />
                            </Box>

                            <Typography
                              variant='h4'
                              align='center'
                              fontWeight='bold'
                              color='text.secondary'
                              sx={{ mt: "-10px" }}
                            >
                              {index + 1}
                            </Typography>

                            <IconButton
                              size='large'
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteSlide(slide.id);
                              }}
                              sx={{
                                position: "absolute",
                                top: "36px",
                                right: "62px",

                                "&:hover": { bgcolor: "grey.200" },
                              }}
                            >
                              <Trash2 size={16} color='#666' />
                            </IconButton>
                          </Paper>
                        ))}
                      </Box>

                      {/* Add Slide Button */}
                      {/* <Button
                  
                    variant='contained'
                    onClick={addSlide}
                    sx={{
                      py: 1.2,
                      fontWeight: "600",
                      bgcolor: "#0D47A1",
                    }}
                    startIcon={<Plus size={18} />}
                  >
                    ADD SLIDE
                  </Button> */}
                      {/* --- ADD SLIDE BUTTON --- */}
                      <Button
                        variant='contained'
                        sx={{
                          fontWeight: "600",
                          bgcolor: "#0D47A1",
                          position: "relative",
                          right: 30,
                          height: "40px",
                          width: 260,
                        }}
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                      >
                        ADD SLIDE
                      </Button>

                      {/* --- DROPDOWN MENU --- */}
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        {["Content", "Video", "Image", "PPT"].map((type) => (
                          <MenuItem
                            key={type}
                            onClick={() => {
                              setSelectedSlide(type);
                              setAnchorEl(null);
                              addSlide();
                            }}
                            sx={{
                              borderBottom: "0.5px solid #ADB0B3",
                              width: 190,
                              height: 25,
                              fontSize: 10,
                            }}
                          >
                            <ListItemText
                              primary={type}
                              sx={{ color: "#ADB0B3" }}
                            />
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>

                    {/* Main Content */}
                    <Box sx={{ flex: 1, p: 6 }}>
                      {/* Slide Editor */}
                      <Paper
                        sx={{
                          p: 4,
                          mb: 4,
                          border: "1px solid",
                          borderColor: "grey.300",
                        }}
                      >
                        {/* Title Input */}
                        <Box sx={{ mb: 3, display: "flex" }}>
                          <Typography
                            variant='subtitle2'
                            fontWeight='600'
                            mb={1}
                            justifyContent='center'
                          >
                            Slide Title:
                          </Typography>
                          <TextField
                            sx={{ width: { md: 1000 }, mx: "auto" }}
                            size='small'
                            placeholder='Slide Title'
                            value={currentSlide?.title || ""}
                            onChange={(e) =>
                              updateSlideTitle(activeSlide, e.target.value)
                            }
                          />
                        </Box>

                        {/* Text Editor */}
                        <Box
                          sx={{
                            border: "1px solid",
                            borderColor: "grey.300",
                            borderRadius: 1,
                            overflow: "hidden",
                          }}
                        >
                          <Box
                            sx={{
                              border: "1px solid #ddd",
                              borderRadius: 2,
                              overflow: "hidden",
                            }}
                          >
                            {selectedSlide === "Content" && (
                              <JoditEditor
                                ref={editor}
                                value={content}
                                onBlur={(newContent) => setContent(newContent)}
                                config={{
                                  height: 400,
                                  toolbarAdaptive: false,
                                  toolbarSticky: false,
                                  showCharsCounter: false,
                                  showWordsCounter: false,
                                  showXPathInStatusbar: false,
                                  buttons: [
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strikethrough",
                                    "eraser",
                                    "|",
                                    "ul",
                                    "ol",
                                    "|",
                                    "font",
                                    "fontsize",
                                    "brush",
                                    "paragraph",
                                    "|",
                                    "image",
                                    "video",
                                    "table",
                                    "link",
                                    "symbols",
                                    "|",
                                    "align",
                                    "outdent",
                                    "indent",
                                    "hr",
                                    "|",
                                    "superscript",
                                    "subscript",
                                    "|",
                                    "cut",
                                    "copy",
                                    "paste",
                                    "|",
                                    "selectall",
                                    "undo",
                                    "redo",
                                    "|",
                                    "source",
                                    "fullsize",
                                    "preview",
                                    "print",
                                    "about",
                                  ],
                                  removeButtons: [],
                                  uploader: {
                                    insertImageAsBase64URI: true,
                                  },
                                  toolbarButtonSize: "middle",
                                  theme: "default",
                                  placeholder: "Write something awesome ...",
                                }}
                              />
                            )}
                            {selectedSlide === "Video" && (
                              <FileUploadComponent />
                            )}
                            {selectedSlide === "Image" && (
                              <FileUploadComponent />
                            )}
                            {selectedSlide === "PPT" && <FileUploadComponent />}
                          </Box>

                          {/* Footer */}
                          <Box
                            sx={{
                              bgcolor: "grey.50",
                              borderTop: "1px solid",
                              borderColor: "grey.300",
                              px: 2,
                              py: 1,
                              textAlign: "right",
                            }}
                          >
                            <Typography
                              variant='caption'
                              color='text.secondary'
                            >
                              CHARS: 0 WORDS: 0 POWERED BY JODIT
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>

                      {/* Quiz Section */}

                      <Paper
                        sx={{ border: "1px solid", borderColor: "grey.300" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            p: 2,
                          }}
                        >
                          <Button
                            onClick={() => {
                              setEditingQuiz(null); // reset edit mode
                              setQuizModalOpen(true);
                            }}
                            variant='contained'
                            sx={{ bgcolor: "#0D47A1" }}
                          >
                            Add Quiz
                          </Button>
                        </Box>

                        {/* Add/Edit Quiz Modal */}
                        <AddQuizModal
                          quizModalOpen={quizModalOpen}
                          handleClose={() => {
                            setQuizModalOpen(false);
                            setEditingQuiz(null);
                          }}
                          handleSave={(newQuiz) => {
                            if (editingQuiz) {
                              // update existing quiz
                              setQuizzes((prev) =>
                                prev.map((quiz) =>
                                  quiz.id === editingQuiz.id
                                    ? { ...quiz, ...newQuiz }
                                    : quiz
                                )
                              );
                            } else {
                              // add new quiz
                              setQuizzes((prev) => [
                                ...prev,
                                {
                                  ...newQuiz,
                                  id: Date.now(),
                                  createdAt: new Date().toLocaleString(),
                                },
                              ]);
                            }
                            setQuizModalOpen(false);
                            setEditingQuiz(null);
                          }}
                          editingQuiz={editingQuiz} // ✅ pass quiz being edited
                        />

                        <Divider />

                        <TableContainer>
                          <Table>
                            <TableHead>
                              <TableRow sx={{ bgcolor: "#0D47A1" }}>
                                {[
                                  "No",
                                  "Question",
                                  "Answer",
                                  "Created At",
                                  "Action",
                                ].map((head) => (
                                  <TableCell
                                    key={head}
                                    sx={{
                                      color: "white",
                                      fontWeight: "600",
                                      border: "none",
                                    }}
                                  >
                                    {head}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {quizzes.length === 0 ? (
                                <TableRow>
                                  <TableCell
                                    colSpan={5}
                                    align='center'
                                    sx={{ py: 6 }}
                                  >
                                    <Typography
                                      variant='h6'
                                      color='text.secondary'
                                    >
                                      Data Not Found!
                                    </Typography>
                                  </TableCell>
                                </TableRow>
                              ) : (
                                quizzes.map((quiz, index) => (
                                  <TableRow key={quiz.id} hover>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{quiz.question}</TableCell>
                                    <TableCell>{quiz.answer}</TableCell>
                                    <TableCell>{quiz.createdAt}</TableCell>
                                    <TableCell>
                                      <TableCell>
                                        <IconButton
                                          onClick={(e) =>
                                            handleQuizMenuOpen(e, quiz)
                                          }
                                        >
                                          <MoreVertIcon />
                                        </IconButton>
                                      </TableCell>
                                    </TableCell>
                                  </TableRow>
                                ))
                              )}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        {/* Quiz Action Menu */}
                        <Menu
                          anchorEl={quizMenuAnchor}
                          open={Boolean(quizMenuAnchor)}
                          onClose={handleQuizMenuClose}
                        >
                          <MenuItem
                            onClick={() => {
                              setEditingQuiz(quizMenuSelected);
                              setQuizModalOpen(true);
                              handleQuizMenuClose();
                            }}
                          >
                            Edit Quiz
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              setQuizzes((prev) =>
                                prev.filter((q) => q.id !== quizMenuSelected.id)
                              );
                              handleQuizMenuClose();
                            }}
                            sx={{ color: "error.main" }}
                          >
                            Delete Quiz
                          </MenuItem>
                        </Menu>
                      </Paper>
                    </Box>
                  </Box>
                </Box>
              )}
            </>
          )}
        </Card>

        {/* --- Section 3: Grading and Earning Setting (Aligned) --- */}
        <Box
          sx={{
            backgroundColor: "#0D47A1", // Uses the primary blue color from your MUI theme
            mt: 10,
            color: "white",
            p: 2,
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Grading Setting
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            mt: 3,
          }}
        >
          {/* Collapsed Settings */}
          <Box
            sx={{
              p: 2,
              py: 1.5,
              mb: 4,
              border: "1px solid #e0e0e0",
              borderRadius: 2,
            }}
          >
            <CollapsedSetting label='Manager Confirmation' />
            <CollapsedSetting label='Enable Video Quiz' />
          </Box>

          {/* Earning Setting Body */}
          <Box
            sx={{
              backgroundColor: "#0D47A1", // Uses the primary blue color from your MUI theme
              mt: 10,
              color: "white",
              p: 2,
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            Earning Setting
          </Box>

          {/* Earning Setting Body */}

          <Box p={3}>
            <Stack direction='row' spacing={4} alignItems='center'>
              {/* Amount Field */}

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant='body1' sx={{ mr: 1, minWidth: "60px" }}>
                  Amount
                </Typography>

                <TextField
                  size='small'
                  type='number'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>$</InputAdornment>
                    ),

                    sx: { width: 100 }, // Control the width of the input
                  }}
                />
              </Box>

              {/* Points Field */}

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant='body1' sx={{ mr: 1, minWidth: "50px" }}>
                  Points
                </Typography>
                {/* Minus Button */}

                <Button
                  variant='contained'
                  size='small'
                  sx={{ minWidth: "35px", p: 0.5, m: 0.5 }} // Adjust padding for a small, square button
                  onClick={() => setPoints((p) => p - 1)}
                >
                  <RemoveIcon />
                </Button>
                <TextField
                  size='small'
                  type='number'
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                  sx={{ width: 80, mr: 1 }} // Control the width of the input
                />

                {/* Plus Button */}

                <Button
                  variant='contained'
                  size='small'
                  sx={{ minWidth: "35px", p: 0.5 }} // Adjust padding for a small, square button
                  onClick={() => setPoints((p) => p + 1)}
                >
                  <AddIcon />
                </Button>
              </Box>
            </Stack>
          </Box>

          {/* Action Buttons */}

          <Box display='flex' justifyContent='center' p={3} pt={0}>
            <Button
              variant='contained'
              sx={{
                mr: 2,
                bgcolor: "#858585",
                "&:hover": { backgroundColor: "#6c757d" },
                color: "white",
                fontWeight: "bold",
              }}
              onClick={() => console.log("Cancel")}
              backgroundColor='#858585'
            >
              CANCEL
            </Button>

            <Button
              onClick={() => console.log("Save:", { amount, points })}
              variant='contained'
              sx={{
                fontWeight: "bold",
                bgcolor:
                  "linear-gradient(45deg, rgb(27, 63, 143), rgb(99, 91, 255))",
                color: "white",
                height: 40,
              }}
            >
              SAVE
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddLesson;
