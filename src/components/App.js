import React, { Component } from 'react';
import './App.css';
import { Board } from './Board/Board';
// eslint-disable-next-line
import { withPropsFeeder, PropsFeeder } from './PropsFeeder/PropsFeeder';

const conf = {
  width: { title: 'Width', type: 'number' },
  height: { title: 'Height', type: 'number' },
  duration: { title: 'Interval', type: 'number' },
  isAlive: { titleTrue: 'Stop', titleFalse: 'Start', type: 'boolean' }
};

// eslint-disable-next-line
const AugmentedBoard = withPropsFeeder(Board, conf);

class App extends Component {
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

        {/* <button onClick={() => this.setState(ps => ({ isAlive: !ps.isAlive }))}>
          {(this.state.isAlive && 'Stop') || 'Start'}
        </button>
        <Board width={7} height={7} isAlive={this.state.isAlive} duration={250} /> */}

        {/* <PropsFeeder {...conf}>
          {props =>
            props.width && props.height &&
            <Board {...props} />
          }
        </PropsFeeder> */}

        <AugmentedBoard />
      </div>
    );
  }
}

export default App;
