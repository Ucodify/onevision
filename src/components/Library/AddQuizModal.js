import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const AddQuizModal = ({
  quizModalOpen,
  handleClose,
  handleSave,
  editingQuiz,
}) => {
  const [quiz, setQuiz] = useState({
    question: "",
    options: ["", "", "", ""],
    answer: "",
  });

  // ✅ Pre-fill modal when editing
  useEffect(() => {
    if (editingQuiz) {
      setQuiz({
        question: editingQuiz.question || "",
        options: editingQuiz.options || ["", "", "", ""],
        answer: editingQuiz.answer || "",
      });
    } else {
      // reset when adding new quiz
      setQuiz({
        question: "",
        options: ["", "", "", ""],
        answer: "",
      });
    }
  }, [editingQuiz, quizModalOpen]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...quiz.options];
    newOptions[index] = value;
    setQuiz({ ...quiz, options: newOptions });
  };

  const handleSubmit = () => {
    if (
      !quiz.question ||
      quiz.options.some((opt) => opt.trim() === "") ||
      !quiz.answer
    ) {
      alert("Please fill all fields before saving.");
      return;
    }
    handleSave(quiz);
    handleClose();
  };

  return (
    <Modal open={quizModalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          height: 500,
          boxShadow: 24,
          p: 0,
          borderRadius: 1.5,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            bgcolor: "#0D47A1",
            color: "white",
            py: 1.2,
            px: 2.5,
          }}
        >
          <Typography fontWeight={600} sx={{ fontSize: 13 }}>
            {editingQuiz ? "Edit Quiz" : "Add Quiz"}
          </Typography>
        </Box>

        {/* Content */}
        <Box sx={{ p: 1.5, height: 430, overflowY: "auto" }}>
          <TextField
            label='Question'
            fullWidth
            value={quiz.question}
            onChange={(e) => setQuiz({ ...quiz, question: e.target.value })}
            size='small'
            sx={{ mb: 1 }}
          />

          <Typography fontWeight={600} sx={{ mb: 1, fontSize: 13 }}>
            Options
          </Typography>

          {["A", "B", "C", "D"].map((label, index) => (
            <TextField
              key={index}
              label={`Option ${label}`}
              placeholder={`Enter option ${label}`}
              fullWidth
              value={quiz.options[index]}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              sx={{ mb: 1 }}
              size='small'
            />
          ))}

          <Typography fontWeight={600} sx={{ mb: 1, fontSize: 13 }}>
            Correct Answer
          </Typography>

          <RadioGroup
            row
            value={quiz.answer}
            onChange={(e) => setQuiz({ ...quiz, answer: e.target.value })}
          >
            <FormControlLabel value='A' control={<Radio />} label='A' />
            <FormControlLabel value='B' control={<Radio />} label='B' />
            <FormControlLabel value='C' control={<Radio />} label='C' />
            <FormControlLabel value='D' control={<Radio />} label='D' />
          </RadioGroup>

          {/* Buttons */}
          <Box
            sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 1 }}
          >
            <Button
              onClick={handleClose}
              size='large'
              sx={{
                bgcolor: "#9E9E9E",
                color: "#fff",
                "&:hover": { bgcolor: "#757575" },
                fontSize: 12,
              }}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              onClick={handleSubmit}
              size='large'
              sx={{
                bgcolor: "#0D47A1",
                "&:hover": { bgcolor: "#08306B" },
                fontSize: 12,
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddQuizModal;
