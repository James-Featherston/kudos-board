import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import "./ViewCard.css";
import { createComment, getCommentsWithCardId } from "../../utils/services";

const ViewCard = ({ cardData }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [author, setAuthor] = useState("");

  const handleNewComment = async (event) => {
    event.preventDefault();
    const resComment = await createComment({
      cardId: cardData.id,
      author,
      message: newComment,
    });
    console.log(resComment);
    setComments([resComment, ...comments]);
  };

  const getComments = async () => {
    const commentsList = await getCommentsWithCardId(cardData.id);
    setComments(commentsList);
  };
  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="card-modal-container">
      <div className="card-data">
        <img className="card-gif" src={cardData.gif} alt="" />
        <div className="card-text">
          <h2>{cardData.title}</h2>
          <h3>{cardData.author}</h3>
          <p>{cardData.description}</p>
        </div>
      </div>
      <form onSubmit={handleNewComment} className="comment-form" action="">
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          className="new-author"
          placeholder="Author"
        />
        <input
          placeholder="Write a comment..."
          type="text"
          required
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
          className="new-comment"
        />
        <button type="submit">Comment</button>
      </form>
      <Comments comments={comments} />
    </div>
  );
};

export default ViewCard;
