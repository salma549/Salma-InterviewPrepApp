



const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config(); // Load environment variables

const app = express();
const router = express.Router();

// Initialize Google Generative AI with the API key from .env
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);

// Route for generating interview questions based on skills
router.post("/generate-questions", async (req, res) => {
  const { skills } = req.body;

  if (!skills || !Array.isArray(skills) || skills.length === 0) {
    return res.status(400).send("Skills are required and should be an array.");
  }

  const questions = {};

  for (const skill of skills) {
    const prompt = `Please generate a comprehensive set of at least thirty interview questions for the skill: "${skill}". The questions should cater to three levels of expertise: beginner, intermediate, and advanced. For each question, provide a well-structured and concise answer. Additionally, include practical tips for answering each question effectively. Ensure that the language is clear and easy to understand, and that the questions cover a wide range of scenarios relevant to the skill.`;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response.text();

      const questionAnswerPairs = response.split("\n\n").map((pair) => {
        const [question] = pair.split("\nAnswer:");
        return { question: question ? question.trim() : "No question available" };
      });

      questions[skill] = questionAnswerPairs;
    } catch (error) {
      console.error(`Error generating questions for ${skill}:`, error);
      questions[skill] = [{ question: "Error generating question" }];
    }
  }

  res.json({ questions });
});

module.exports = router;
