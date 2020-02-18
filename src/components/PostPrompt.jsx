import React from 'react';
import PropTypes from 'prop-types';

function PostPrompt(props){
  return (
    <div>
      <p>Make a new Post?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

PostPrompt.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default PostPrompt;
