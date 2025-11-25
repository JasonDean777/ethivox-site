// lib/openai.ts
import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error("OPENAI_API_KEY is not set in environment variables.");
}

// Cast to any so we can use `.responses` without TypeScript complaining.
const openai: any = new OpenAI({ apiKey });

export default openai;
