import React, { Component } from 'react';
import logo from './logo.svg';
import { auth, provider } from './firebase';
import './App.css';

import MainComponent from './components/MainComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user,
        });
      });
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
        });
      });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {user ?
          <button onClick={this.logout}>Log Out</button>
         :
          <button onClick={this.login}>Log In</button>
        }
        {user ?
          <div>
            <p>Welcome!</p>
            <MainComponent />
          </div>
          :
          <p className="App-intro">
            Hi, please log in.
          </p>
        }
      </div>
    );
  }
}

export default App;
