import React from 'react';
import PostList from './PostList';
import Header from './Header';
import NewLikeControl from  './NewLikeControl'
import NewPostControl from './NewPostControl';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  this.waitTimeUpdateTimer = setInterval(() =>
    this.updatePostElapsedWaitTime(),
    60000
  );
}

componentWillUnmount(){
  console.log('componentWillMount');
  clearInterval(this.waitTimeUpdateTimer);
}

componentWillMount() {
  console.log('componentWillMount');
}

componentWillReceiveProps() {
  console.log('componentWillReceiveProps');
}

shouldComponentUpdate() {
  console.log('shouldComponentUpdate');
  return true;
}

componentWillUpdate() {
  console.log('componentWillUpdate');
}

componentDidUpdate() {
  console.log('componentDidUpdate');
}

updatePostElapsedWaitTime() {
   console.log("check");
   let newMasterPostList = this.state.masterPostList.slice();
   newMasterPostList.forEach((post) =>
     post.formattedWaitTime = (post.timeOpen).fromNow(true)
   );
   this.setState({masterPostList: newMasterPostList})
 }

handleAddingNewPostToList(newPost){
  var newMasterPostList = this.state.masterPostList.slice();
  newMasterPostList.push(newPost);
  newPost.formattedWaitTime = (newPost.timeOpen).fromNow(true)
  this.setState({masterPostList: newMasterPostList});
}

  render(){
    return (
      <div>
      <Header />
      <Switch>
      <Route exact path='/' render={()=><PostList postList={this.state.masterPostList} />} />
      <Route path='/newpost' render={()=><NewPostControl onNewPostCreation={this.handleAddingNewPostToList} />} />
      </Switch>
      </div>
    );
  }

}

export default App;
