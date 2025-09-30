import type { Request, Response } from "express";
// @ts-ignore
declare var process: any;
import content from "../data/content";

// You need to set your OpenAI API key in an environment variable
const OPENAI_API_KEY = typeof process !== 'undefined' && process.env ? process.env.OPENAI_API_KEY : '';

async function fetchChatGPTAnswer(question: string): Promise<string> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
      max_tokens: 150,
      temperature: 0.7,
    }),
  });
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No answer.";
}

function searchPortfolioData(question: string): string | null {
  // Simple keyword-based search
  const lower = question.toLowerCase();
  if (lower.includes("skills") || lower.includes("languages")) {
    return `Skills: ${content.skills.languages.join(", ")}, Frameworks: ${content.skills.frameworks.join(", ")}`;
  }
  if (lower.includes("projects")) {
    return `Projects: ${content.projects.map(p => p.title).join(", ")}`;
  }
  if (lower.includes("experience") || lower.includes("about")) {
    return `About: ${content.about.bio}`;
  }
  return null;
}

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "No question provided" });
  }

  // First, try to answer from portfolio data
  const portfolioAnswer = searchPortfolioData(question);
  if (portfolioAnswer) {
    return res.status(200).json({ answer: portfolioAnswer });
  }

  // Otherwise, ask ChatGPT
  try {
    const gptAnswer = await fetchChatGPTAnswer(question);
    return res.status(200).json({ answer: gptAnswer });
  } catch (err) {
    return res.status(500).json({ answer: "Sorry, I couldn't fetch an answer." });
  }
}