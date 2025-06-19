import React, { useState, useParams } from "react";
import "./NewCardForm.css";
import { searchGifs } from "../../utils/gifService";
import Gif from "./Gif";
import { createCard } from "../../utils/services";
import { useCardsContext } from "../../contexts/CardsContext";

const NewCardForm = ({ boardId }) => {
  const [title, setTitle] = useState("");
  const [description, setDesciption] = useState("");
  const [gif, setGif] = useState("");
  const [showGifs, setShowGifs] = useState(false);
  const [gifResults, setGifResults] = useState([]);
  const [gifURL, setGifURL] = useState("");
  const [author, setAuthor] = useState("");
  const { cards, setCards } = useCardsContext();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = {
      title,
      description,
      gif: gifURL,
      author,
      boardId,
    };
    const res = await createCard(card);
    setCards([res, ...cards]);
  };

  const handleSearch = async () => {
    const gifs = await searchGifs(gif);
    setGifResults(gifs);
    setShowGifs(true);
  };

  return (
    <>
      <h2>Create a New Card</h2>
      <form className="card-form" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter card title"
          className="input-field"
        />
        <input
          required
          type="text"
          value={description}
          onChange={(e) => setDesciption(e.target.value)}
          placeholder="Enter card desciption"
          className="input-field"
        />
        <input
          required
          type="text"
          value={gif}
          onChange={(e) => setGif(e.target.value)}
          placeholder="Search GIFs..."
          className="input-field"
        />
        <button type="button" className="card-btn" onClick={handleSearch}>
          Search
        </button>
        {showGifs ? (
          <Gif
            setShowGifs={setShowGifs}
            gifResults={gifResults}
            setGifURL={setGifURL}
          />
        ) : (
          <></>
        )}
        <input
          required
          type="text"
          value={gifURL}
          onChange={(e) => setGifURL(e.target.value)}
          placeholder="Enter GIF URL"
          className="input-field"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter owner (optional)"
          className="input-field"
        />
        <button className="card-btn" type="submit">
          Create Card
        </button>
      </form>
    </>
  );
};

export default NewCardForm;
