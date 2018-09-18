import React, { Component } from 'react';
import './App.css';
import { Board } from './Board/Board';
// eslint-disable-next-line
import { withPropsFeeder, PropsFeeder } from './PropsFeeder/PropsFeeder';

const conf = {
  width: { title: 'Width', type: 'number' },
  height: { title: 'Height', type: 'number' },
  duration: { title: 'Interval', type: 'number' },
  isRunning: { titleTrue: 'Stop', titleFalse: 'Start', type: 'boolean' }
};

// eslint-disable-next-line
const AugmentedBoard = withPropsFeeder(Board, conf);

class App extends Component {
  state = { isRunning: false }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The game of life</h1>
        </header>

        {/* <button onClick={() => this.setState(ps => ({ isRunning: !ps.isRunning }))}>
          {(this.state.isRunning && 'Stop') || 'Start'}
        </button>
        <Board width={7} height={7} isRunning={this.state.isRunning} duration={250} /> */}

        {/* <PropsFeeder {...conf}>
          {props =>
            <Board {...props} />
          }
        </PropsFeeder> */}

        <AugmentedBoard />
      </div>
    );
  }
}

export default App;
