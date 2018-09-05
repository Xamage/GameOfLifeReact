import React from 'react';
import { Board } from './Board';
import { createGeneration } from './gameOfLifeUtils';
import './App.css';

export function App() {
    const generation = createGeneration(5, 5);

    generation[1][1] = true;
    generation[2][2] = true;
    generation[3][3] = true;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The game of life</h1>
        </header>
          <button>Play | Pause</button>
          <Board generation={generation} width={5} />
      </div>
    );
}
