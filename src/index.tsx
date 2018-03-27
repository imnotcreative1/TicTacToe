import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import { Switch } from 'react-router';
import { MuiThemeProvider } from 'material-ui/styles';

// TODO: remove unnecessary node modules i.e. react-router-redux

const store = configureStore({});

// TODO: make the app a protected path and figure out routing
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact={true}/>
          <Route path="/app" component={App}/>
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
