import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import MainComponent from './components/MainComponent';

function App({
  user,
  login,
  logout,
}) {
  return (
    <div className="App">
      {user ?
        <button onClick={logout}>Log Out</button>
       :
        <button onClick={login}>Log In</button>
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

App.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: null,
};

export default App;
