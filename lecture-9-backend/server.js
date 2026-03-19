const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// API endpoint 1: message with time
app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello",
    course: "Browser Programming",
    year: 2026,
    // Send ISO string for easier formatting
    time: new Date().toISOString()
  });
});

// API endpoint 2: student
app.get("/api/student", (req, res) => {
  res.json({
    name: "Madushan Rajapaksha",
    role: "Student"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});