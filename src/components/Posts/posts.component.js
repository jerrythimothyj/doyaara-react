import { connect } from "react-redux";
import { getAllPosts } from "../../actions/posts.action";
import FBPost from "./post";
import React, { Component } from "react";

class Posts extends Component {
  render() {
    return (
      <div>
        {this.props.posts &&
          this.props.posts.map(post => <FBPost post={post} key={post.id} />)}
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
