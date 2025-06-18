import React from "react";
import "./Gif.css";

const Gif = ({ setShowGifs, gifResults, setGifURLs }) => {
  return (
    <div className="gifs-container">
      {gifResults.map((gif) => {
        return <img src={gif.images.fixed_height} alt="" className="gif" />;
      })}
    </div>
  );
};

export default Gif;
