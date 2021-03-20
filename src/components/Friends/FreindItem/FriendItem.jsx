import React from 'react';
import classes from './../Friends.module.css';

const FriendItem = (props) => {

  return (
    <div className={classes.listFriendsItem}>
      <div>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3qbWHSWAYms8owf4do5qdmppgfZWsZAmnQ&usqp=CAU'/>
      </div>
      
      <div className={classes.name}>
        {props.item}
      </div>
    </div>
  )
};

export default FriendItem;