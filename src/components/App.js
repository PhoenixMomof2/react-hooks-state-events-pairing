import React, { useState } from "react";
import video from "../data/video.js";
import CommentsList from "./CommentsList";
// be able to see commentList in comments component as a string and be able to pass it down
// after console.log commentList

function App() {
  console.log("Here's your data:", video);

  let upvotes = video.upvotes
  let downvotes = video.downvotes
  let comments = video.comments

  const [upVotes, setUpVotes] = useState(upvotes);
  const [downVotes, setDownVotes] = useState(downvotes);
  const [showComments, setShowComments] = useState(true)

  function handleUpVotes() {
    console.log("increase upvote");
    upvotes++;
    setUpVotes(upvotes);
  }

  function handleDownVotes() {
    console.log("increase downvote");
    downvotes++;
    setDownVotes(downvotes);
  }

  // Hidden Comments Function
  function handleIsHidden() {
    return setShowComments(!showComments)
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

      <div className="comments-container">
        <br />
        <button id="comments-button" onClick={() => handleIsHidden()}>{showComments ? "Hide Comments" : "Show Comments"}
        </button>
        <br />
        <hr />
      {showComments && <CommentsList comments={comments}/>}
      </div>
    </div>
  );
}

export default App;

// BONUS DELIVERABLES
// Add upvote/downvote buttons to each comment
// Add a search bar to search comments by username
// Add a "Remove Comment" button to delete comments from the page
// Add a sorting feature to sort the comments