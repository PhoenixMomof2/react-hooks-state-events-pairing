import React, { useState } from "react";
import video from "../data/video.js";

function App() {
  // console.log("Here's your data:", video);

  let upvotes = video.upvotes;
  let downvotes = video.downvotes;

  const [upVotes, setUpVotes] = useState(upvotes);
  const [downVotes, setDownVotes] = useState(downvotes);
  const [showComments, setShowComments] = useState(true);

  function handleUpVotes() {
    console.log("increase vote");
    upvotes++;
    setUpVotes(upvotes);
  }

  function handleDownVotes() {
    console.log("decrease vote");
    downvotes++;
    setDownVotes(downvotes);
  }

  function handleShowComments() {
    showComments(false);
    setShowComments(showComments);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <div>
        {video.views} Views | Uploaded {video.createdAt}
      </div>
      <br />
      <div>
        <button className="upvotes" value={upvotes} onClick={handleUpVotes}>
          {upVotes}
          <span className="emoji" role="img" aria-label="thumb-up">
            👍
          </span>
        </button>
        <button
          className="downvotes"
          value={downvotes}
          onClick={handleDownVotes}
        >
          {downVotes}
          <span className="emoji" role="img" aria-label="thumb-down">
            👎
          </span>
        </button>
      </div>
      <div className="comments" key={video.comments.id}>
        <br />
        <button className="comments" onClick={handleShowComments}>
          {showComments ? "HideComments" : "ShowComments"}
        </button>
        <br />
        <hr />
        <h2>{video.comments.length} Comments</h2>
        <h3>{video.comments[0].user}</h3>
        <h4>{video.comments[0].comment}</h4>
      </div>
    </div>
  );
}

export default App;
