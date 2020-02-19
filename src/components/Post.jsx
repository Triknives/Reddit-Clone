import React from 'react';
import PropTypes from 'prop-types';
import NewLikeControl from './NewLikeControl'
import Moment from 'moment';

function Post(props){
  return (
    <div>
    <h3>{props.authors}</h3>
    <p><em>{props.postContent}</em></p>
    <h4>{props.formattedWaitTime} ago</h4>
    <NewLikeControl/>
    <hr/>
    </div>
  );
}

Post.propTypes = {
  authors: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Post;
