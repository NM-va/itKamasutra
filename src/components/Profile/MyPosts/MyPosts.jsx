import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {updateNewMessageActionCreator} from '../../../redux/dialogs-reducer';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'postText'} component={Textarea} validate={[required, maxLength10]} placeholder={'Post message'} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
};

const PostReduxForm = reduxForm({form: 'ProfilePostForm'})(AddPostForm);

const MyPosts = (props) => {
  
  let posts = props.posts;
  
  let postsElements = posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount}/>
  ));
  
  let onAddPost = (values) => {
    props.addPost(values.postText);
  };
  
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
       <PostReduxForm onSubmit={onAddPost} />
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;