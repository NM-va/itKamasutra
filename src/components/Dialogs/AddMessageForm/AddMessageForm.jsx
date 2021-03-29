import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      Enter message
      <div>
        <Field placeholder='Enter your message'
               component={Textarea}
               name={'newMessageBody'}
               validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
};

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);