import * as React from 'react';
import { Cell } from '../Cell/Cell';
import { createGeneration, computeNextGeneration } from '../../gameOfLifeUtils';

const BoardWidthInPx = 600;

export class Board extends React.Component {

    constructor(props) {
        super(props);

        const generation = createGeneration(props.width, props.height);

        generation[1][1] = true;
        generation[2][2] = true;
        generation[3][3] = true;

        this.state = { generation, intervalId: null };
    }

    componentDidUpdate(previousProps) {
        if (previousProps.isAlive !== this.props.isAlive) {
            if (this.props.isAlive) {
                const intervalId = setInterval(() => {
                    const newGeneration = computeNextGeneration(this.state.generation);
                    this.setState({ generation: newGeneration });
                }, this.props.duration || 500);

                this.setState({ intervalId });
            } else {
                clearInterval(this.state.intervalId);
            }
        }
    }

    onCellClicked(x, y) {
        const generation = [...this.state.generation];
        generation[y][x] = !generation[y][x];
        this.setState({ generation });
    }

    render() {
        const cellSize = Math.trunc(BoardWidthInPx / this.props.width) - 1;

        return (
            <div className="board" style={{ 'width': `${BoardWidthInPx}px` }}>
                {this.state.generation && this.state.generation.map((row, rowIndex) =>
                    row.map((isAlive, cellIndex) => (
                        <Cell key={`${rowIndex}-${cellIndex}`}
                            alive={isAlive}
                            size={cellSize}
                            onChange={e => this.onCellClicked(cellIndex, rowIndex)}
                        />
                    ))
                )}
            </div>
        );
    }
}