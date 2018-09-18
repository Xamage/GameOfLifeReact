import * as React from 'react';
import { Cell } from '../Cell/Cell';
import { createGeneration, computeNextGeneration } from '../../gameOfLifeUtils';

const BoardWidthInPx = 600

export class Board extends React.Component {
  state = { generation: null, intervalId: null };

  componentDidUpdate(previousProps) {
    const sizeHasChanged = this.props.width !== previousProps.width || this.props.height !== previousProps.height;
    const durationHasChanged = this.props.duration !== previousProps.duration;
    const isRunningHasChanged = this.props.isRunning !== previousProps.isRunning;

    if (!sizeHasChanged && !durationHasChanged && !isRunningHasChanged) {
      return;
    }

    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({intervalId: null});
    }

    if (this.props.width && this.props.height && sizeHasChanged) {
      // size has changed and we have a width and an height, so we can create a brand new generation
      this.setState({
        generation: createGeneration(this.props.width, this.props.height, false)
      });
    }
    
    if (this.props.isRunning) {
      const intervalId = setInterval(() => {
        this.setState(previousState => ({
          generation: computeNextGeneration(previousState.generation)
        }));
      }, this.props.duration || 500);
      this.setState({ intervalId });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
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
      <div className='board' style={{ 'width': `${BoardWidthInPx}px` }}>
        { this.state.generation &&
          this.state.generation.map((row, rowIndex) => 
            row.map((isAlive, cellIndex) => (
              <Cell
                key={`${rowIndex}-${cellIndex}`}
                alive={isAlive}
                size={cellSize}
                onChange={e => this.onCellClicked(cellIndex, rowIndex)} />
          ))
        )}
      </div>
    )
  }
}
