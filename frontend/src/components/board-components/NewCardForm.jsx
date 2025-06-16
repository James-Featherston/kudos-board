import React, { useState } from "react";

const NewCardForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDesciption] = useState("");
  const [gif, setGif] = useState("");
  const [gifURL, setGifURL] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUbmitted");
  };

  const handleSearch = () => {
    console.log("Search");
  };

  return (
    <>
      <h2>Create a New Card</h2>
      <form className="card-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter card title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDesciption(e.target.value)}
          placeholder="Enter card desciption"
        />
        <input
          type="text"
          value={gif}
          onChange={(e) => setGif(e.target.value)}
          placeholder="Search GIFs..."
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
        <input
          type="text"
          value={gifURL}
          onChange={(e) => setGifURL(e.target.value)}
          placeholder="Enter GIF URL"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter owner (optional)"
        />
        <button type="submit">Create Card</button>
      </form>
    </>
  );
};

export default NewCardForm;
