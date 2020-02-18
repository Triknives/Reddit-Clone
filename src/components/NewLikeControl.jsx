import React from 'react';
import PropTypes from 'prop-types';

class NewLikeControl extends  React.Component {
  state = {
    count: 0
  }
  incrementMe = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
  render() {
    return (
      <div>
      <button onClick={this.incrementMe}> Upvote {this.state.count} </button>
      </div>
    )
  }
}

export default NewLikeControl;
