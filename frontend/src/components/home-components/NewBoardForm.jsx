import React, { useState } from "react";
import "./NewBoardForm.css";
import { createBoard } from "../../utils/services";
import { useBoardsContext } from "../../contexts/BoardsContext";
import { useFormInput } from "../../hooks/useInputForm";

const NewBoardForm = ({ handleClose }) => {
  const { value: title, inputProps: titleInputProps } = useFormInput("");
  const [category, setCategory] = useState("");
  const { value: author, inputProps: authorInputProps } = useFormInput("");
  const { boards, setBoards } = useBoardsContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const board = {
      title,
      category,
      author,
    };
    const res = await createBoard(board);
    setBoards([res, ...boards]);
    handleClose();
  };
  return (
    <>
      <h2>Create a New Board</h2>
      <form className="board-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input required {...titleInputProps} />
        <label>Category:</label>
        <select
          required
          className="form-btn"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option selected disabled value="">
            Select a category...
          </option>
          <option value={"Celebration"}>Celebration</option>
          <option value={"Thank You"}>Thank You</option>
          <option value={"Inspiration"}>Inspiration</option>
        </select>
        <label>Author:</label>
        <input type="text" {...authorInputProps} />
        <button className="create-btn">Create Board</button>
      </form>
    </>
  );
};

export default NewBoardForm;
