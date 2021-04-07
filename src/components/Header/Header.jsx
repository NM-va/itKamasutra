import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  let icnImg = "";
  if ((!props.profile) || (props.profile.photos.small === null)) {
    icnImg = "../../assets/img/noavatar.png";
  } else {
    icnImg = props.profile.photos.small;
  }
  
  return (
    <header className={classes.header}>
      <img src="https://img.freepik.com/free-vector/_53295-268.jpg?size=626&ext=jpg&ga=GA1.2.1629504809.1595894400" alt=""/>
      <div className={classes.loginBlock}>
        <span className={classes.avatarIcon}><img src={icnImg} alt=""/></span>
        
        {props.isAuth
          ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
};

export default Header;