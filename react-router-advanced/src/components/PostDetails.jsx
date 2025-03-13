import React from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();

  return (
    <div>
      <h1>Post Details</h1>
      <p>Viewing details for post ID: {postId}</p>
    </div>
  );
};

export default PostDetails;
