import * as React from 'react';
import { Cell } from './Cell';

const BoardWidthInPx = 600;

export function Board(props) {
    const cellSize = Math.trunc(BoardWidthInPx / props.width) - 1;

    return (
        <div className="board" style={{'width':`${BoardWidthInPx}px`}}>
        {props.generation && props.generation.map((row, rowIndex) => 
            row.map((isAlive, cellIndex) => (
                <Cell key={`${rowIndex}-${cellIndex}`} 
                      alive={isAlive}
                      size={cellSize} />
            ))
        )}
        </div>
    );
}