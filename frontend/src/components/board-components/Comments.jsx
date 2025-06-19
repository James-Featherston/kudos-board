import React from "react";
import "./Comments.css";

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="comment-container">
            <h4>
              Author: {comment.author !== "" ? comment.author : "Unknown"} -{" "}
            </h4>
            <p>{comment.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
