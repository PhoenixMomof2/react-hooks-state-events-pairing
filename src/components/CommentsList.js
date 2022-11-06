import React from "react";

const CommentsList = ({ comments }) => {
  // console.log(comments);
  return (
    <div className="comments">
      <h2>{comments.length} Comments</h2>
      {comments.map((comment) => (
        <div id="comments-list" key={comment.id}>
          <h3>{comment.user}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;

// remove the code from app.js that will handle the comments
// https://reactjs.org/docs/components-and-props.html
// pass prop from parent to child and render child components
// create conditions for if child component is rendered
// make comment list a string and turn it into a prop
