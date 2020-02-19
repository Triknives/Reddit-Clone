import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { v4 } from 'uuid';

function NewPostForm(props) {
  let _authors = null;
  let _postContent = null;


  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({authors: _authors.value, postContent: _postContent.value, id: v4(), timeOpen: new Moment()});
    _authors.value = '';
    _postContent.value = '';
  }

  return (
    <div>
    <form onSubmit={handleNewPostFormSubmission}>
    <input
    type='text'
    id='authors'
    placeholder='Pair Names'
    ref={(input) => {_authors = input;}}/>

    <textarea
    id='postContent'
    placeholder='Describe your postContent.'
    ref={(textarea) => {_postContent = textarea;}}/>
    <button type='submit'>Post</button>
    </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
