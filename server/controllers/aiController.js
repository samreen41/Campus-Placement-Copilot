const { askGemini } = require("../services/geminiService");

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await askGemini(message);

    res.json({
      success: true,
      response
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "AI Error"
    });

  }
};

module.exports = {
  chatWithAI
};