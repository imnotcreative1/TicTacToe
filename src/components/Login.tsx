import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, TextField } from 'material-ui';
import './Login.css';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '100%',
};

const style: React.CSSProperties = {
  height: '300px',
  width: '300px',
};

class Login extends React.Component {
  render() {
    return (
      <div className="login-page-container">
        <Card containerStyle={containerStyle} style={style}>
          <div className="header">
            Log In
          </div>
          <TextField hintText="Username"/>
          <TextField hintText="Password"/>
          <Link to="/app">
            Sign in
          </Link>
        </Card>
      </div>
    );
  }
}

export default Login;