import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  
  return (
    <div>
      {/*<div>*/}
        {/*<img*/}
          {/*src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>*/}
      {/*</div>*/}
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
        ava + description
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        
        <p>{props.profile.fullName}</p>
        <p>Обо мне:</p>
        <p>{props.profile.aboutMe}</p>
        <p>Мои контакты:</p>
        <ul>
          {
            Object.entries(props.profile.contacts).map(p => {
              return <li>{p}</li>
            })
          }
        </ul>
        
      </div>
    </div>
  )
};

export default ProfileInfo;