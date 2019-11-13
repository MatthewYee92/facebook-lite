import React, { Component } from "react";
import NewsFeed from './components/NewsFeed';
import database from './database/dataBase';
import timeLine from './components/userPosts';

export default class App extends Component {
  constructor(){
    super()
  }

  signIn = (user,pass) => {
    if(user === database[0].username.toLowerCase() && pass === database[0].password) {
      console.log(database[0].username.toLowerCase());
      // render newsfeed
      console.log(timeLine);
    } else {
      console.log(`Access denied.`)
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
