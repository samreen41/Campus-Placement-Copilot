const express = require("express");
const multer = require("multer");
const { extractText } = require("../utils/pdfParser");

const router = express.Router();

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Resume Upload API
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    // Extract text from uploaded PDF
    const text = await extractText(req.file.path);

    const skills = [];

    // Skill Detection
    if (text.toLowerCase().includes("react")) {
      skills.push("React");
    }

    if (text.toLowerCase().includes("javascript")) {
      skills.push("JavaScript");
    }

    if (text.toLowerCase().includes("node")) {
      skills.push("Node.js");
    }

    if (text.toLowerCase().includes("mongodb")) {
      skills.push("MongoDB");
    }

    if (text.toLowerCase().includes("python")) {
      skills.push("Python");
    }

    if (text.toLowerCase().includes("java")) {
      skills.push("Java");
    }

    // Resume Score
    let score = 60 + skills.length * 8;

    if (score > 100) {
      score = 100;
    }

    // Suggestions
    const suggestions = [];

    if (!skills.includes("React")) {
      suggestions.push("Learn React and add projects.");
    }

    if (!skills.includes("Node.js")) {
      suggestions.push("Add backend development skills.");
    }

    if (!skills.includes("MongoDB")) {
      suggestions.push("Include database experience.");
    }

    if (!skills.includes("JavaScript")) {
      suggestions.push("Strengthen JavaScript fundamentals.");
    }

    if (suggestions.length === 0) {
      suggestions.push("Excellent resume! Keep updating your projects.");
    }

    res.json({
      success: true,
      fileName: req.file.filename,
      score,
      skills,
      suggestions,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error analyzing resume",
    });
  }
});

module.exports = router;