import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={"/dialogs/" + props.id}>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MOqcfdwWF0RfQkRfOdX_uEkU3cEy9raBxg&usqp=CAU'/>
        {props.name}
        </NavLink>
    </div>
  )
};


export default DialogItem;