import React from "react";
import CommentForm from "../components/single_blog/Reply";
import CommentList from "../components/single_blog/CommentList";

const SingleBlog: React.FC = () => {
  return (
    <div>
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default SingleBlog;
