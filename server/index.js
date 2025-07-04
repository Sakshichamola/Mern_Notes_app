const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const noteRoutes = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Ensures req.body is parsed correctly

// Routes
app.use('/api/notes', noteRoutes);

// Test route
app.get('/', (req, res) => {
  res.send("✅ Backend running with local MongoDB");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB locally"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Optional: exit process if DB connection fails
  });

// Global error handler (optional, but helpful for debugging)
app.use((err, req, res, next) => {
  console.error("🌐 Global error handler:", err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
