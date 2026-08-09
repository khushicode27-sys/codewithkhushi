import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

app.post("/chat", async (req, res) => {
  console.log("Chat API called");
  console.log(req.body);

  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-3.6-flash",
    });

    const result = await model.generateContent(`
You are CodeWithKhushi AI Assistant.

You help students with:
- Coding
- C & C++
- Python
- Java
- Web Development
- Artificial Intelligence
- Robotics
- Scratch

Explain concepts in a simple, friendly and beginner-friendly way.

User Question:
${message}
`);

    res.json({
      reply: result.response.text(),
    });

  } catch (error) {
    console.error("AI ERROR:", error);

    res.status(500).json({
      reply: "Sorry, AI could not answer right now.",
      error: error.message,
    });
  }
});

app.get("/test", async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-3.6-flash",
    });

    const result = await model.generateContent("Say Hello");

    res.json({
      reply: result.response.text(),
    });

  } catch (error) {
    console.error("TEST ERROR:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});