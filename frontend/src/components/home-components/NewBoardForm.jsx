import React, { useState } from "react";
import "./NewBoardForm.css";

const NewBoardForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title + " " + category + " " + author);
  };
  return (
    <>
      <h2>Create a New Board</h2>
      <form className="board-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input-field"
        />
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input-field"
        />
        <button className="create-btn">Create Board</button>
      </form>
    </>
  );
};

export default NewBoardForm;
