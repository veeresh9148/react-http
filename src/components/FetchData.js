import React, { Component } from "react";
import axios from "axios";
//import "../style.css";

class FetchData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      errorMsg: "",
      id:0
    };
  }

  componentDidMount() {
   
  }

  fetchData=()=>{
    axios
   .get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
    .then((response) => {
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
      <div className="body">
        {/* start by siva */}
        <input type="number" onChange={(e)=>this.setState({id:e.target.value})}/>
        <button onClick={this.fetchData}>Fetch Data</button>
        <p>{`${posts.body}`}</p>
        {/* end by siva */}
        <h1>List of posts</h1>
        <div class="grid-container">
          {/* {posts.length
            ? posts.map((post) => (
                <div class="grid-item" id={post.id}>
                  {/* {post.title} */}
                  {/* {post.body}
                </div>
              ))
            : null} */} 
          {errorMsg ? <div>{errorMsg}</div> : null}
        </div>
      </div>
    );
  }
}

export default FetchData;
