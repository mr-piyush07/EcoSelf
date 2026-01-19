import axios from "axios";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
//import dotenv from "dotenv";
import cors from "cors";
//import { GoogleGenerativeAI } from "@google/generative-ai";
import { getDatabase, ref, set } from "firebase/database";
import { app as firebaseApp } from "./utils/firebase.js";

//dotenv.config();
//const genAI = new GoogleGenerativeAI("AIzaSyCl3VoJgg66FlWFJRcUWSBdG1XW0lEa5h0");
//console.log(genAI)
const app = express();

//temporary code to test api
app.get("/api/test-gemini", async (req, res) => {
  try {

    const API_KEY = process.env.GOOGLE_API_KEY;

    const url =
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    const payload = {
      contents: [
        {
          parts: [
            {
              text: "Say hello"
            }
          ]
        }
      ]
    };

    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const reply =
      response.data.candidates[0].content.parts[0].text;

    res.json({ reply });

  } catch (error) {
    console.log("FULL ERROR:", error.response?.data || error.message);
    res.status(500).json(error.response?.data || { error: error.message });
  }
});


//temporary code ends here

// ES module dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Serve frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(message);

    const response = result.response.text();

    res.json({
      success: true,
      reply: response,
    });
  } catch (error) {
    console.error("❌ Gemini Error:", error); // VERY IMPORTANT
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.post("/api/user/onboard", async (req, res) => {
  try {
    const userId = `user_${Date.now()}`;

    const userData = {
      userId,
      ...req.body,
      createdAt: new Date().toISOString()
    };

    const db = getDatabase(firebaseApp);
    await set(ref(db, `users/${userId}`), userData);

    res.json({
      success: true,
      message: "Welcome to EchoSelf 🚀",
      userId
    });
   
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Server start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
