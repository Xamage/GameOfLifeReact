import React from 'react';
import { Board } from './Board/Board';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAlive: false };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The game of life</h1>
        </header>

        <button onClick={() => this.setState(previousState => ({ isAlive: !previousState.isAlive }))}>
          {(this.state.isAlive && 'Stop') || 'Play'}
        </button>
        <Board width={6} height={5} isAlive={this.state.isAlive} duration={250} />
      </div>
    );
  }
}
