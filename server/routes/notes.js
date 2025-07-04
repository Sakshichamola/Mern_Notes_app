const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// 🔹 Create a new note
router.post('/', async (req, res) => {
  try {
    console.log("📩 POST /api/notes | Body:", req.body);

    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const note = new Note({ title, content });
    await note.save();

    res.status(201).json(note);
  } catch (err) {
    console.error("❌ Error creating note:", err.message);
    res.status(500).json({ error: "Server error while creating note" });
  }
});

// 🔹 Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    console.error("❌ Error fetching notes:", err.message);
    res.status(500).json({ error: "Server error while fetching notes" });
  }
});

// 🔹 Get a single note by ID
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.json(note);
  } catch (err) {
    console.error("❌ Error fetching note by ID:", err.message);
    res.status(500).json({ error: "Server error while fetching note" });
  }
});

// 🔹 Update a note by ID
router.put('/:id', async (req, res) => {
  try {
    console.log("📝 PUT /api/notes/:id | Body:", req.body);

    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!note) return res.status(404).json({ error: "Note not found" });

    res.json(note);
  } catch (err) {
    console.error("❌ Error updating note:", err.message);
    res.status(500).json({ error: "Server error while updating note" });
  }
});

// 🔹 Delete a note by ID
router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: "Note not found" });

    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting note:", err.message);
    res.status(500).json({ error: "Server error while deleting note" });
  }
});

module.exports = router;
