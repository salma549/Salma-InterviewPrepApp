



require('dotenv').config();  // Load environment variables from .env file
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());

// Get the API key from the environment variable
const apiKey = process.env.RAPIDAPI_KEY; // Using the API key from the .env file

// Utility to convert string to base64
const toBase64 = (str) => Buffer.from(str, "utf-8").toString("base64");

router.post("/submit", async (req, res) => {
  const { code, languageId } = req.body;

  const options = {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    params: { base64_encoded: "true", fields: "*" }, // Ensure base64 encoding is set to true
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      "x-rapidapi-key": apiKey, // Use the API key from the .env file
    },
    data: {
      source_code: toBase64(code), // Convert source code to base64
      language_id: languageId,
      stdin: toBase64(""), // If you need to add input, encode it here
    },
  };

  try {
    const response = await axios.request(options);
    const token = response.data.token;

    // Wait for 2 seconds before fetching the result
    setTimeout(async () => {
      try {
        const resultResponse = await axios.get(
          `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
          {
            params: { base64_encoded: "false", fields: "*" },
            headers: {
              "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
              "x-rapidapi-key": apiKey, // Use the API key from the .env file
            },
          }
        );

        const output = resultResponse.data.stdout || resultResponse.data.stderr;
        res.json({ output });
      } catch (err) {
        res.status(500).json({ error: "Error fetching the result." });
      }
    }, 2000);
  } catch (error) {
    res.status(500).json({ error: "Error submitting the code." });
  }
});

module.exports = router;

