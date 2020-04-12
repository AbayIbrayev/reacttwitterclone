import React from "react";
import { Button } from "reactstrap";
import "./post-status-filter.css";

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button color="info" type="button" className="btn btn-info">
        All
      </Button>
      <Button outline type="button">
        Favourite
      </Button>
    </div>
  );
};

export default PostStatusFilter;
