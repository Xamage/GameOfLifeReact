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
  state = { isRunning: false, width: 5, height: 3, duration: 500 }
  
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The game of life</h1>
        </header>

        <div className="inputs">
          <div className="input-row">
            <label htmlFor="width">Width</label>
            <input id="width"
                  type="number"
                  defaultValue={this.state.width}
                  onChange={e => this.setState({width: e.target.valueAsNumber})} />
          </div>
          <div className="input-row">
            <label htmlFor="height">Height</label>
            <input id="height"
                  type="number"
                  defaultValue={this.state.height}
                  onChange={e => this.setState({height: e.target.valueAsNumber})} />
          </div>
          <div className="input-row">
            <label htmlFor="duration">Duration</label>
            <input id="duration"
                  type="number"
                  min="10"
                  defaultValue={this.state.duration}
                  onChange={e => this.setState({duration: e.target.valueAsNumber || 10})} />
          </div>
          <div className="input-row">
            <button onClick={() => this.setState(ps => ({ isRunning: !ps.isRunning }))}>
              {(this.state.isRunning && 'Stop') || 'Start'}
            </button>
          </div>
        </div>
        <Board width={this.state.width}
               height={this.state.height}
               isRunning={this.state.isRunning}
               duration={this.state.duration} />

        {/* <PropsFeeder {...conf}>
          {props =>
            <Board {...props} />
          }
        </PropsFeeder> */}

        {/* <AugmentedBoard /> */}
      </div>
    );
  }
}

export default App;
