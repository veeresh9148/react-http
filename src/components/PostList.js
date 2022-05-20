import React, { Component } from "react";
import axios from "axios";
import "../style.css";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1>List of posts</h1>
        <div class="grid-container">
          {posts.length
            ? posts.map((post) => (
                <div class="grid-item" id={post.id}>
                  {post.title}
                </div>
              ))
            : null}
          {errorMsg ? <div>{errorMsg}</div> : null}
        </div>
      </div>
    );
  }
}

export default PostList;
