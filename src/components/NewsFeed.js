import React from "react";

const NewsFeed = props => {
  const userNamePrompt = prompt("Whats your username?");
  const passwordPrompt = prompt("Whats your password?");
  const { signIn } = props;
  return( 
  <div>
      {/* <button onClick={signIn(userNamePrompt, passwordPrompt)}>Sign</button> */}
      {signIn(userNamePrompt, passwordPrompt)}
  </div>
  )
};

export default NewsFeed;
