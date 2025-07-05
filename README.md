📝 MERN Notes App
A full-stack note-taking application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Users can add, edit, delete, and view notes — all in a simple and intuitive interface.

📌 Features
📄 Create, update, and delete notes

🗂️ View all saved notes

✨ Clean UI with React

⚙️ Backend API using Express & MongoDB

🔄 Real-time update after any action (CRUD)

🎯 Built with Vite for fast frontend development

🛠️ Tech Stack
Frontend:

React.js

Axios

Vite

CSS

Backend:

Node.js

Express.js

MongoDB (Mongoose)

📁 Project Structure
bash
Copy
Edit
MernStack/
│
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # NoteForm & NotesList
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
├── server/                # Express backend
│   ├── models/Note.js
│   ├── routes/notes.js
│   ├── index.js
│   └── .env
