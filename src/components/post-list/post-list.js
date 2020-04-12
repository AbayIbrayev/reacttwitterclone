import React from "react";

import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";
import "./post-list.css";

const PostList = ({ posts }) => {
  const elements = posts.map((post) => {
    const { id, ...postProps } = post;
    return (
      <li key={id} className="list-group-item">
        {/* <PostListItem label={post.label} important={post.important} /> */}
        <PostListItem {...postProps} />
      </li>
    );
  });

  return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;
