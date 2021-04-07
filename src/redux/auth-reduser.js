import {authAPI, userAPI} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SEND_USER_DATA = 'SEND_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  
  isRemember: false,
  //убрана у Димыча
  isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: {
      
      return {
        ...state,
        ...action.payload
      };
    }
  
    case SEND_USER_DATA: {
    
      return {
        ...state,
        ...action.payload
      };
    }
    
    default:
      return state;
  }
};


export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}});
// export const sendUserData = (formData) => ({type: SEND_USER_DATA, data: {formData}});

export default authReducer;

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.getAuthMe()
      .then(data => {
        if (data.resultCode === 0) {
          let  {id, login, email} = data.data;
          dispatch(setAuthUserData(id, email, login, true));
          return id;
        }
      })
      .then(id => {
        userAPI.getProfile(id);
      })
    ;
  }
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(getAuthUserData());
        }
      });
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout()
        .then(data => {
          if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
          }
        })
    ;
  }
};
