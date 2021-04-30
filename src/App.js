import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {getAuthUserData} from "./redux/auth-reduser";
import {connect} from "react-redux";
import {compose} from "redux";


class App extends React.Component {
  componentDidMount () {
    this.props.getAuthUserData();
  }

  render() {
    let SomeComponent = () => <DialogsContainer/>;

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>

          <Route path='/dialogs'
                 render={SomeComponent}/>

          <Route path='/profile/:userId?'
                 render={() => <ProfileContainer/>}/>

          <Route path='/users'
                 render={() => <UsersContainer/>}/>
          <Route path='/login'
                 render={() => <Login/>}/>
        </div>
      </div>
    );
  }
}

export default compose (
    withRouter,
    connect(null, {initializeApp}))(App);
