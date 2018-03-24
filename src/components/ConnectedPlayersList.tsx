import * as React from 'react';
import './ConnectedPlayersList.css';

interface ConnectedPlayersListProps {}

class ConnectedPlayersList extends React.Component<ConnectedPlayersListProps> {
  render() {

    return (
     <div className="connected-player-list-container">
       <div className="title"> Connected Players </div>
       <div className="list">
         <div> John Doe </div>
         <div> John Snow </div>
         <div> John Knows </div>
       </div>
     </div>
    );
  }
}

export default ConnectedPlayersList;