const { GoogleGenerativeAI } = require("@google/generative-ai");
console.log("Gemini Key:", process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

async function askGemini(message) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
  });

  const result =
    await model.generateContent(message);

  return result.response.text();
}

module.exports = {
  askGemini
};