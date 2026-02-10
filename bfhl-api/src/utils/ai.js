const axios = require("axios");

const askAI = async (question) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`;

  const response = await axios.post(url, {
    contents: [{ parts: [{ text: question }] }]
  });

  return response.data.candidates[0].content.parts[0].text.split(" ")[0];
};

module.exports = askAI;
