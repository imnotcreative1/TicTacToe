import * as React from 'react';
import LocalGame from './components/LocalGame';
import ConnectedPlayersList from './components/ConnectedPlayersList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ConnectedPlayersList/>
        <LocalGame/>
      </div>
    );
  }
}

export default App;
