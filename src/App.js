import React from 'react';
import './App.css';
import Login from './components/Login'
import Album from './components/Album'
import axios from 'axios';
import {Link, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser, getUser} from './redux/authReducer';

class App extends React.Component {

  componentDidMount(){
    this.props.getUser();
  }

  logout = () => {
    axios.delete('/auth/logout').then( () => {
      this.props.logoutUser()
    })
  }

  render(){
    return (
    <div>
      <h1 className='greeting'> {'I <3 REDUX'} </h1>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/album" component={Album}/>
        </Switch>
      { this.props.auth.user ?
      <Link to='/'>
      <button 
        onClick={() => this.logout()}
        className='logout-button'>
        Logout
      </button>
      </Link>
      :
      <div></div>
    }
      
    </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState

const mapDispatchToProps = {logoutUser, getUser}

export default connect(mapStateToProps, mapDispatchToProps)(App);
