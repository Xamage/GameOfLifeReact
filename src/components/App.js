import React from 'react';
import { Board } from './Board/Board';
import './App.css';

export function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">The game of life</h1>
      </header>
      <button>Play | Pause</button>
      <Board width={6} height={5} />
    </div>
  );
}
