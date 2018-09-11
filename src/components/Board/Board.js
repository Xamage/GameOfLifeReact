import * as React from 'react';
import { Cell } from '../Cell/Cell';
import { createGeneration, computeNextGeneration } from '../../gameOfLifeUtils';

const BoardWidthInPx = 600;

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.onCellStateChanged = this.onCellClicked.bind(this);
        this.state = { generation: createGeneration(props.width, props.height, false) };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
            this.setState({ generation: createGeneration(this.props.width, this.props.height, false) });
        }
        else if (prevProps.isAlive !== this.props.isAlive) {
            if (this.props.isAlive) {
                const intvl = setInterval(() => {
                    this.setState(ps => ({ generation: computeNextGeneration(ps.generation) }));
                }, this.props.duration || 500);
                this.setState({ intvl });
            }
            else {
                clearInterval(this.state.intvl);
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
                {this.state.generation && this.state.generation[0] && this.state.generation.map((row, rowIndex) =>
                    row.map((isAlive, cellIndex) => (
                        <Cell key={`${rowIndex}-${cellIndex}`}
                            alive={isAlive}
                            size={cellSize}
                            onChange={e => this.onCellClicked(cellIndex, rowIndex)} />
                    ))
                )}
            </div>
        );
    }
}
