import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMessageForm';
// import {updateNewMessageActionCreator} from '../../redux/dialogs-reducer';



const Dialogs = (props) => {
  
  let state = props.dialogsPage;
  
  let dialogsElements = state.dialogs.map ( d => (
      <DialogItem name={d.name} key={d.id} id={d.id}/>
    )
  );
  
  let messagesElements = state.messages.map (m => (<Message message={m.message} key={m.id} />));
  
  
  const addNewMessage = (values) => {
    alert(values.newMessageBody);
  };
  
  //delete?
  if (!props.isAuth) return <Redirect to={"/login"} />;
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div>
        <div className={classes.messages}>
          {messagesElements}
        </div>
        <div className={classes.createMessage}>
          {/*Enter message*/}
          {/*<div>*/}
            {/*<textarea onChange={onNewMessageChange} placeholder='Enter your message'*/}
                      {/*value={newMessageBody} />*/}
          {/*</div>*/}
          {/*<div>*/}
            {/*<button onClick={onSendMessageClick}>Send</button>*/}
          {/*</div>*/}
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>

    </div>
  )
};

export default Dialogs;