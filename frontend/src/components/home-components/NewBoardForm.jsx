import React, { useState } from "react";
import "./NewBoardForm.css";
import { createBoard } from "../../utils/services";

const NewBoardForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(title + " " + category + " " + author);
    const board = {
      title,
      category,
      author,
    };
    const res = await createBoard(board);
    console.log(res);
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
        <select
          className="form-btn"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value={"Celebration"}>Celebration</option>
          <option value={"Thank You"}>Thank You</option>
          <option value={"Inspiration"}>Inspiration</option>
        </select>
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
