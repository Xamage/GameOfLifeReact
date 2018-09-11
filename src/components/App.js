import React from 'react';
import { Board } from './Board/Board';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRunning: false };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The game of life</h1>
        </header>

        <button onClick={() => this.setState(previousState => ({ isRunning: !previousState.isRunning }))}>
          {(this.state.isRunning && 'Stop') || 'Play'}
        </button>
        <Board width={6} height={5} isRunning={this.state.isRunning} duration={250} />
      </div>
    );
  }
}
