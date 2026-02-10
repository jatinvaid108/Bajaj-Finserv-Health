const axios = require("axios");

const askAI = async (question) => {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await axios.post(url, {
      contents: [
        {
          parts: [
            {
              // 🔑 Force Gemini to reply in ONE WORD
              text: `Answer in ONE WORD only. ${question}`
            }
          ]
        }
      ]
    });

    const candidates = response.data?.candidates;

    if (!candidates || candidates.length === 0) {
      return "Unavailable";
    }

    const text = candidates[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return "Unavailable";
    }

    // 🧹 Clean & ensure single-word output
    const cleaned = text.replace(/[^a-zA-Z]/g, "").trim();

    return cleaned.length > 0 ? cleaned : "Unavailable";

  } catch (error) {
    console.error(
      "Gemini API Error:",
      error.response?.data || error.message
    );
    return "Unavailable";
  }
};

module.exports = askAI;
