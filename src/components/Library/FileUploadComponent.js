import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  IconButton,
  Paper,
} from "@mui/material";
import {
  Cloud,
  Play,
  Trash2,
  Image as ImageIcon,
  FileText as FileTextIcon,
} from "lucide-react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUploadComponent = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Simulated upload (for demo purposes)
  const simulateUpload = (file) => {
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + Math.random() * 30;
      });
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      setIsUploading(false);

      const fileUrl = URL.createObjectURL(file);
      setUploadedFile({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2),
        url: fileUrl,
        type: file.type,
      });

      setTimeout(() => setUploadProgress(0), 1000);
    }, 3000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && isSupportedFile(file)) {
      simulateUpload(file);
    } else {
      alert("Please select a valid video, image, or PPT file");
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && isSupportedFile(file)) {
      simulateUpload(file);
    } else {
      alert("Please drop a valid video, image, or PPT file");
    }
  };

  const handleClearFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
  };

  const handlePreviewFile = () => {
    if (uploadedFile?.url) window.open(uploadedFile.url);
  };

  const isVideo = uploadedFile?.type?.startsWith("video/");
  const isImage = uploadedFile?.type?.startsWith("image/");
  const isPpt =
    uploadedFile &&
    (uploadedFile.name.endsWith(".ppt") || uploadedFile.name.endsWith(".pptx"));

  const isSupportedFile = (file) => {
    const allowedTypes = ["video/", "image/"];
    const ext = file.name.split(".").pop().toLowerCase();
    return (
      allowedTypes.some((t) => file.type.startsWith(t)) ||
      ["ppt", "pptx"].includes(ext)
    );
  };

  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "grey.50",
      }}
    >
      {/* Toolbar */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 1,
          p: 2,
          bgcolor: "grey.100",
        }}
      >
        {uploadedFile && (
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              color='primary'
              onClick={handlePreviewFile}
              title='Preview'
              sx={{
                bgcolor: "primary.main",
                color: "#fff",
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              {isVideo ? (
                <Play size={18} />
              ) : isImage ? (
                <ImageIcon size={18} />
              ) : (
                <FileTextIcon size={18} />
              )}
            </IconButton>

            <IconButton
              color='error'
              onClick={handleClearFile}
              title='Remove File'
              sx={{
                bgcolor: "error.main",
                color: "#fff",
                "&:hover": { bgcolor: "error.dark" },
              }}
            >
              <Trash2 size={18} />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Upload Area */}
      <Box
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        sx={{
          p: 6,
          textAlign: "center",

          borderColor: dragActive ? "primary.main" : "grey.400",
          borderRadius: "0 0 8px 8px",
          bgcolor: dragActive ? "blue.50" : "grey.50",
          cursor: "pointer",
          minHeight: 240,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "primary.main",
            bgcolor: "blue.50",
          },
        }}
      >
        <input
          ref={fileInputRef}
          type='file'
          accept='video/*,image/*,.ppt,.pptx'
          hidden
          onChange={handleFileChange}
        />

        {!uploadedFile ? (
          <>
            <CloudUploadIcon
              style={{ marginBottom: 16, color: "#4C7BA9", fontSize: 100 }}
            />
            <Typography
              variant='h6'
              sx={{ color: "grey.600", mb: 1, fontSize: "28px" }}
            >
              Upload {isVideo ? "Video" : isImage ? "Image" : "PPT"}
            </Typography>
          </>
        ) : (
          <Box sx={{ textAlign: "center" }}>
            {isVideo ? (
              <Play size={48} color='#0D47A1' style={{ marginBottom: 16 }} />
            ) : isImage ? (
              <img
                src={uploadedFile.url}
                alt={uploadedFile.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />
            ) : (
              <FileTextIcon
                size={48}
                color='#8B5CF6'
                style={{ marginBottom: 16 }}
              />
            )}
            <Typography sx={{ fontWeight: 600, color: "text.primary" }}>
              {uploadedFile.name}
            </Typography>
            <Typography variant='caption' color='text.secondary'>
              Size: {uploadedFile.size} MB
            </Typography>
          </Box>
        )}
      </Box>

      {/* Progress Bar */}
      {isUploading && (
        <Box sx={{ p: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography variant='body2' fontWeight={600}>
              Uploading...
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {Math.round(uploadProgress)}%
            </Typography>
          </Box>
          <LinearProgress
            variant='determinate'
            value={uploadProgress}
            sx={{
              height: 8,
              borderRadius: 5,
              bgcolor: "grey.300",
              "& .MuiLinearProgress-bar": {
                bgcolor: "primary.main",
              },
            }}
          />
        </Box>
      )}

      {uploadProgress === 100 && !isUploading && (
        <Box sx={{ p: 3 }}>
          <Typography
            variant='body2'
            sx={{ color: "success.main", fontWeight: 600 }}
          >
            ✓ {isVideo ? "Video" : isImage ? "Image" : "PPT"} uploaded
            successfully
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default FileUploadComponent;
