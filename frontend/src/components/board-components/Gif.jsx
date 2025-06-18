import React from "react";
import "./Gif.css";

const Gif = ({ setShowGifs, gifResults, setGifURL }) => {
  const handleClick = (url) => {
    setShowGifs(false);
    setGifURL(url);
  };
  return (
    <div className="gifs-container">
      {gifResults.data.map((gif) => {
        return (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt=""
            className="gif"
            onClick={() => handleClick(gif.images.fixed_height.url)}
          />
        );
      })}
    </div>
  );
};

export default Gif;
