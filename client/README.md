const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Campus Placement Copilot API Running"
  });
});

app.post("/api/ai", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: "AI Response: " + message
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});