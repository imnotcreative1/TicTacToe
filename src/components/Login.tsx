import * as React from 'react';
import { Card, TextField } from 'material-ui';
import { createUser } from '../actions/actions';
import User from '../models/User';
import './Login.css';
import { connect, Dispatch } from 'react-redux';
import { firstCreateUser } from '../api';
import { GlobalStore } from '../models/models';

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

interface LoginProps {
  reduxUsername: string;
  createUser: (username: string, userID: number) => void;
}

interface LoginState {
  username: string;
}

class Login extends React.Component<LoginProps, LoginState> {

  constructor(props: LoginProps, state: LoginState) {
    super(props, state);

    this.state = {
      username: '',
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.createUserOnButtonClick = this.createUserOnButtonClick.bind(this);
  }

  updateUsername = (e: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({
      username: e.currentTarget.value,
    });
  };

  createUserOnButtonClick() {
    firstCreateUser(this.state.username, this.props.createUser);
  }

  componentWillUpdate(nextProps: LoginProps) {
    if (nextProps.reduxUsername !== '') {
      // tslint:disable-next-line
      console.log('added user to redux');
      // TODO: change the app url
    }
  }

  render() {
    return (
      <div className="login-page-container">
        <Card containerStyle={containerStyle} style={style}>
          <div className="header">
            Log In
          </div>
          <TextField hintText="Username" onChange={this.updateUsername}/>
          <button onClick={() => this.createUserOnButtonClick()}>
            Sign in
          </button>
        </Card>
      </div>
    );
  }
}
// TODO: figure out why the state is being stored within a reducer object
const mapStateToProps = (state: GlobalStore) => {
  debugger;
  return {
    reduxUsername: state.reducer.user ? state.reducer.user.username : '',
  }
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {createUser: (username: string, userID: number) => {
      dispatch(createUser(new User(userID, username)));
    }};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);