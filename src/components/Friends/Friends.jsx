import React from 'react';
import classes from './Friends.module.css';
import FriendItem from './FreindItem/FriendItem';

const Friends = (props) => {
  let friendsList = props.friends.map(friend => (
    <FriendItem item={friend.name} />
  ));
  
  return (
    <div className={classes.sectionFriends}>
      <h3>Friends</h3>
      <div className={classes.listFriends}>
        {friendsList}
      </div>
    </div>
  )
};

export default Friends;