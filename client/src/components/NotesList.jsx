// src/components/NotesList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const NotesList = ({ onEdit }) => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("/api/notes");
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      fetchNotes();o
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h2>All Notes</h2>
      {notes.map((note) => (
        <div key={note._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onEdit(note)}>Edit</button>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
