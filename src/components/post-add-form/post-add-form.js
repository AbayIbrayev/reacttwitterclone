import React from "react";
import { Button } from "reactstrap";
import "./post-add-form.css";

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="What are you thinking about?"
        className="form-control new-post-label"
      />
      <Button type="submit" outline>
        Add
      </Button>
    </form>
  );
};

export default PostAddForm;
