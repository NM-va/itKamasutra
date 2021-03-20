import {profileAPI, userAPI} from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'How, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 12},
    {id: 4, message: 'Dada', likesCount: 12}
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.postText,
        likesCount: 0
      };
  
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
  
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    
    default:
      return state;
  }
};

export const addPostActionCreator = (postText) => ({type: ADD_POST, postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export default profileReducer;

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data));
      });
  
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  
};

export const getUserProfile = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId)
      .then(response => {
        // debugger;
        dispatch(setUserProfile(response.data));
      });
  }
};
