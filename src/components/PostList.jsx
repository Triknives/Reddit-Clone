import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <div>
      <hr/>
      {props.postList.map((post, index) =>
        <Post authors={post.authors}
          postContent={post.postContent}
          key={index}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
