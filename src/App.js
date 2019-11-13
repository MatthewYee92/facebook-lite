import React, { Component } from "react";
import NewsFeed from './components/NewsFeed';
import database from './database/dataBase';
import timeLine from './components/userPosts';

export default class App extends Component {
  constructor(){
    super()
  }

  signIn = (user,pass) => {
    if(user === database[0].username && pass === database[0].password) {
      // render newsfeed
      console.log(timeLine)
    } else {
      alert('Your username and or password is incorrect, please try again.');
    }
  }


  render() {
    const { signIn } = this;
  
    return (
      <div>
        <NewsFeed signIn={signIn}/>
      </div>
    )
  }
}
