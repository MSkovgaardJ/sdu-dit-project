import React, { Component } from "react";
import "./PostList.css";
import { fetchPosts } from "../../api/backend";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    var res = await fetchPosts();

    this.setState({ posts: res });
  };

  renderContent = () => {
    if (this.state.isLoading) {
      return (
        <div className="spinnerContainer">
          <div className="loader"></div>
          <div>Loading...</div>
        </div>
      );
    } else {
      return this.renderList();
    }
  };

  renderList = () => {
    console.log(this.state.posts);
    if (this.state.posts.length > 0) {
      return (
        <div className="postContainer">
          {this.state.posts.map(v => {
            return <div>{v.author}</div>;
          })}
        </div>
      );
      return;
    } else {
      return (
        <div className="spinnerContainer">
          <img className="failedImg" src="/SWW.jpeg"></img>
        </div>
      );
    }
  };

  render() {
    const { posts } = this.state;
    return <div>{this.renderContent()}</div>;
  }
}
