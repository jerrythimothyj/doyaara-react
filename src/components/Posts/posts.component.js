import { connect } from "react-redux";
import posts from "../../apis";
import { getAllPosts } from "../../actions/post-actions";

import React, { Component } from "react";

class Posts extends Component {
  render() {
    return (
      <div>
        <h1>Posts {this.props.posts && this.props.posts.length}</h1>
      </div>
    );
  }

  componentWillMount() {
    this.props.getAllPosts();
  }
}
const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  posts: state.post.items
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts())
});
// const mapDispatchToProps = {
//   getAllPosts
// };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
