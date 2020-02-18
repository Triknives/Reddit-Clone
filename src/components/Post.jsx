import React from 'react';
import PropTypes from 'prop-types';
import NewLikeControl from './NewLikeControl'

function Post(props){
  return (
    <div>
    <h3>{props.authors}</h3>
    <p><em>{props.postContent}</em></p>
    <NewLikeControl/>
    <hr/>
    </div>
  );
}

Post.propTypes = {
  authors: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
};

export default Post;
