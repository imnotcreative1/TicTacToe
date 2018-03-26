import * as React from 'react';
import './ConnectedPlayerRowInList.css';

interface ConnectedPlayerRowInListProps {
  user: string;
  key?: string; // unused props needed to satisfy a map
}

class ConnectedPlayerRowInList extends React.Component<ConnectedPlayerRowInListProps> {
  render() {
    return (
      <div className="row">
        {this.props.user}
        <button>
          Face
        </button>
      </div>
    );
  }
}

export default ConnectedPlayerRowInList;