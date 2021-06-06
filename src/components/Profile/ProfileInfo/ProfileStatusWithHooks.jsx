import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'

const ProfileStatusWithHooks =  (props) => {

    let stateWithSetState = useState(false);
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1];

  return (
      <div>
        { !editMode &&
        <div>
          <span>{props.status || '---'}yo</span>
        </div>
        }
        {editMode &&
        <div>
          <input type="text" autoFocus={true} />
        </div>
        }
      </div>
  )
};

export default ProfileStatusWithHooks;