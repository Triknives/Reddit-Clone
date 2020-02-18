import React from 'react';
import PostPrompt from './PostPrompt';
import NewPostForm from './NewPostForm';
import PropTypes from 'prop-types';

class NewPostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewPostForm onNewPostCreation={this.props.onNewPostCreation}/>;
    } else {
      currentlyVisibleContent = <PostPrompt onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
      {currentlyVisibleContent}
      </div>
    );
  }
}

NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostControl;
