import React, { useState, useParams } from "react";
import "./NewCardForm.css";
import { searchGifs } from "../../utils/gifService";
import Gif from "./Gif";
import { createCard } from "../../utils/services";
import { useCardsContext } from "../../contexts/CardsContext";
import { useFormInput } from "../../hooks/useInputForm";

const NewCardForm = ({ boardId, handleClose }) => {
  const { value: title, inputProps: titleInputProps } = useFormInput("");
  const { value: description, inputProps: descInputProps } = useFormInput("");
  const { value: gif, inputProps: gifInputProps } = useFormInput("");
  const [showGifs, setShowGifs] = useState(false);
  const [gifResults, setGifResults] = useState([]);
  const {
    value: gifURL,
    inputProps: gifUrlIProps,
    setValue: setGifURL,
  } = useFormInput("");
  const { value: author, inputProps: authorInputProps } = useFormInput("");
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
    setCards([...cards, res]);
    handleClose();
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
        <input required {...titleInputProps} placeholder="Enter card title" />
        <input
          required
          {...descInputProps}
          placeholder="Enter card desciption"
        />
        <input required {...gifInputProps} placeholder="Search GIFs..." />
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
        <input required {...gifUrlIProps} placeholder="Enter GIF URL" />
        <input
          type="text"
          {...authorInputProps}
          placeholder="Enter owner (optional)"
        />
        <button className="card-btn" type="submit">
          Create Card
        </button>
      </form>
    </>
  );
};

export default NewCardForm;
