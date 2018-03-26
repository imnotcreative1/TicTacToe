import * as React from 'react';

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
        <button>
          Sign In
        </button>
      </div>
    );
  }
}

export default Login;