// Express backend for Chatbot
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
import content from './src/data/content.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function fetchChatGPTAnswer(question) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }],
      max_tokens: 150,
      temperature: 0.7,
    }),
  });
  const data = await response.json();
  return data.choices?.[0]?.message?.content || 'No answer.';
}

function searchPortfolioData(question) {
  const lower = question.toLowerCase();
  if (lower.includes('skills') || lower.includes('languages')) {
    return `Skills: ${content.skills.languages.join(', ')}, Frameworks: ${content.skills.frameworks.join(', ')}`;
  }
  if (lower.includes('projects')) {
    return `Projects: ${content.projects.map(p => p.title).join(', ')}`;
  }
  if (lower.includes('experience') || lower.includes('about')) {
    return `About: ${content.about.bio}`;
  }
  return null;
}

app.post('/api/chat', async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: 'No question provided' });
  }
  const portfolioAnswer = searchPortfolioData(question);
  if (portfolioAnswer) {
    return res.status(200).json({ answer: portfolioAnswer });
  }
  try {
    const gptAnswer = await fetchChatGPTAnswer(question);
    return res.status(200).json({ answer: gptAnswer });
  } catch (err) {
    return res.status(500).json({ answer: "Sorry, I couldn't fetch an answer." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Chatbot backend running on port ${PORT}`);
});