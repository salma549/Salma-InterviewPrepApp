


require('dotenv').config();  

const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const cors = require("cors");
const path = require("path");
const router = express.Router();

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Google Generative AI with your API key from .env
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY); // Using the API key from .env

const app = express();
app.use(cors()); // Enable CORS for cross-origin requests

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// Upload endpoint
router.post("/upload", upload.single("resume"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Read the PDF file
  const pdfPath = path.join(__dirname, req.file.path);
  const dataBuffer = require("fs").readFileSync(pdfPath);

  try {
    const pdfData = await pdfParse(dataBuffer);
    const extractedText = pdfData.text;

    // Extract the 'Skills' section
    const skillsSection = extractSkills(extractedText);

    // Generate interview questions based on extracted skills
    const questions = await generateInterviewQuestions(skillsSection);

    // Send skills and questions as response
    res.json({ skills: skillsSection, questions });
  } catch (error) {
    res.status(500).json({ error: "Error parsing PDF" });
  }
});

function extractSkills(text) {
  const skillsKeywords = [
    "Skills",
    "Technical Skills",
    "Key Skills",
    "Core Competencies",
    "Areas of Expertise",
  ];
  const stopKeywords = [
    "CERTIFICATION",
    "EXPERIENCE",
    "PROJECTS",
    "EDUCATION",
    "OBJECTIVE",
    "CONTACT",
    "LinkedIn",
    "Phone",
    "Email",
    "Address",
    "GitHub",
  ];

  // Searches for the first occurrence of a skills-related keyword to find the start position of the "Skills" section.

  let skillsStart = -1;
  skillsKeywords.some((keyword) => {
    skillsStart = text.search(new RegExp(`\\b${keyword}\\b`, "i"));
    return skillsStart !== -1;
  });

  if (skillsStart === -1) {
    return "Skills section not found";
  }

  let skillsEnd = text.length;
  stopKeywords.some((keyword) => {
    const stopPosition = text.search(new RegExp(`\\b${keyword}\\b`, "i"));
    if (stopPosition > skillsStart) {
      skillsEnd = Math.min(skillsEnd, stopPosition);
    }
  });

  const skillsText = text.slice(skillsStart, skillsEnd).trim();
  return cleanSkillsText(skillsText);
}

// Removes various phrases, patterns, extra spaces, and newline characters from skillsText.

function cleanSkillsText(skillsText) {
  const cleanedText = skillsText
    .replace(
      /Skills|Technical Skills|Key Skills|Core Competencies|Areas of Expertise/gi,
      ""
    )
    .replace(
      /([0-9]{4}-[0-9]{4})|Bachelor of Technology|CGPA|[0-9]+\.[0-9]{2}/g,
      ""
    )
    .replace(/\s{2,}/g, " ")
    .replace(/\n/g, " ")
    .replace(/[()]/g, "")
    .trim();

  const skillsArray = cleanedText
    .split(/[\s•,]+/)
    .map((skill) => skill.trim())
    .filter((skill) => skill && skill.length > 1);

  return skillsArray.length > 0 ? skillsArray : "No skills found";
}

async function generateInterviewQuestions(skills) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const questions = {};

  for (const skill of skills) {
    const prompt = `Please generate a comprehensive set of at least twenty interview questions for the skill: "${skill}". The questions should cater to three levels of expertise: beginner, intermediate, and advanced. For each question, provide a well-structured and concise answer. Additionally, include practical tips for answering each question effectively.`;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response.text();

      const questionAnswerPairs = response.split("\n\n").map((pair) => {
        const [question, answer] = pair.split("\nAnswer:");
        return { question: question.trim(), answer: answer };
      });

      questions[skill] = questionAnswerPairs;
    } catch (error) {
      console.error(`Error generating questions for ${skill}:`, error);
    }
  }

  return questions;
}

module.exports = router;

