import React from "react";

import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";
import "./post-list.css";

const PostList = ({ posts, onDelete }) => {
  const elements = posts.map((post) => {
    if (typeof post === "object" && isEmpty(post)) {
      const { id, ...postProps } = post;
      return (
        <li key={id} className="list-group-item">
          <PostListItem {...postProps} onDelete={() => onDelete(id)} />
        </li>
      );
    }
  });

  function isEmpty(obj) {
    for (let key in obj) {
      return true;
    }
    return false;
  }

  return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;
