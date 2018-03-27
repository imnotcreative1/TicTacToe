import * as React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="header">
          Login
        </div>
        <div className="username">
          Enter you username
        </div>
        <div className="password">
          Enter you password
        </div>
        <Link to="/app">
          Sign in
        </Link>
      </div>
    );
  }
}

export default Login;