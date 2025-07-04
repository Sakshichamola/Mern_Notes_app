// src/App.jsx
import React, { useState } from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
function App() {
  const [selectedNote, setSelectedNote] = useState(null);

  const handleEdit = (note) => {
    setSelectedNote(note);
  };

  const clearSelection = () => {
    setSelectedNote(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📝 MERN Notes App</h1>
      <NoteForm selectedNote={selectedNote} clearSelection={clearSelection} />
      <NotesList onEdit={handleEdit} />
    </div>
  );
}

export default App;
