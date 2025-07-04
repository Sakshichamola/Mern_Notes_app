// src/components/NoteForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const NoteForm = ({ selectedNote, clearSelection }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [selectedNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("Submitting:", { title, content });
      if (selectedNote) {
        await axios.put(`/api/notes/${selectedNote._id}`, { title, content });
      } else {
        await axios.post("/api/notes", { title, content });
      }
      clearSelection();
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedNote ? "Edit Note" : "Add Note"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <br />
      <button type="submit">{selectedNote ? "Update" : "Add"}</button>
    </form>
  );
};

export default NoteForm;
