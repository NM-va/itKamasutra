import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from '../../redux/auth-reduser';
import {getUserProfile} from '../../redux/profile-reducer';

class HeaderContainer extends React.Component {
  componentDidMount () {
    this.props.getAuthUserData();
  }
  
  render() {
    
    return (
        <Header {...this.props} profile={this.props.profile} />
      )
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, {getUserProfile, logout, getAuthUserData})(HeaderContainer);