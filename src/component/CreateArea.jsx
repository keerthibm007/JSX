import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title.trim() || note.content.trim()) {
      onAdd(note);
      setNote({ title: "", content: "" });
    }
  }

  return (
    <div className="create-area">
      <form onSubmit={submitNote}>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
