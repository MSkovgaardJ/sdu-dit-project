import React, { Component } from "react";
import "./PostCreate.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class PostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { author: "", post: "" };
  }
  onAuthorInput = event => {
    this.setState({ author: event.target.value });
  };
  onPostInput = event => {
    this.setState({ post: event.target.value });
  };

  render() {
    return (
      <div className="postContext">
        <div className="postCreateContainer">
          <div className="postCreateTitle">Write your post here!</div>
          <div className="contentInputContainer">
            <TextField className="contentInput" label="Author"></TextField>
          </div>
          <div className="contentInputContainer">
            <TextField
              className="contentInput"
              multiline
              label="Subject"
            ></TextField>
          </div>

          <Button variant="contained">Create Post</Button>
        </div>
      </div>
    );
  }
}

/*
<TextField className="contentInput" label="Author"></TextField>
          <TextField
            className="contentInput"
            multiline
            label="Author"
          ></TextField>*/
