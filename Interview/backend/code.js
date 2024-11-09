


const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config(); // Load environment variables

const app = express();
const router = express.Router();

// Initialize Google Generative AI with the API key from .env
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);

// Route for generating code based on languages entered by the user
router.post("/generate-code", async (req, res) => {
  const { skills } = req.body;

  if (!skills || !Array.isArray(skills) || skills.length === 0) {
    return res.status(400).send("Skills are required and should be an array.");
  }

  const generatedCode = {};

  for (const skill of skills) {
    const prompt = `Please generate a sample code in "${skill}" along with practical tips on how to answer coding questions related to this language.`;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response.text();

      generatedCode[skill] = response;
    } catch (error) {
      console.error(`Error generating code for ${skill}:`, error);
      generatedCode[skill] = "Error generating code for this language.";
    }
  }

  res.json({ generatedCode });
});

module.exports = router;
