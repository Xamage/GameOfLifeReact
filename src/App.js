import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isAlive: false};
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The game of life</h1>
        </header>
          <button>Play | Pause</button>
          <div className="board" style={{'width':`600px`}}>
            <div 
                className={`cell dead`} 
                style={{'width': 199, 'height': 199}}>
            </div>
            <div 
                className={`cell dead`} 
                style={{'width': 199, 'height': 199}}>
            </div>
            <div 
                className={`cell dead`} 
                style={{'width': 199, 'height': 199}}>
            </div>
            <div 
                className={`cell alive`} 
                style={{'width': 199, 'height': 199}}>
            </div>
            <div 
                className={`cell dead`} 
                style={{'width': 199, 'height': 199}}>
            </div>
            <div 
                className={`cell alive`} 
                style={{'width': 199, 'height': 199}}>
            </div>
            <div 
                className={`cell alive`} 
                style={{'width': 199, 'height': 199}}>
            </div>
            <div 
                className={`cell alive`} 
                style={{'width': 199, 'height': 199}}>
            </div>
            <div 
                className={`cell dead`} 
                style={{'width': 199, 'height': 199}}>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
