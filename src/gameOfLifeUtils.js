export function createGeneration(width, height, defaultValue) {
    const cellArray = Array(height);
    for (let i = 0; i < height; i++) {
        cellArray[i] = Array(width).fill(defaultValue);
    }
    return cellArray;
}

export function computeNextGeneration(currentGeneration) {
    const nextGeneration = [];
    for (let y = 0; y < currentGeneration.length; y++) {
        const nextCellRow = [];
        for (let x = 0; x < currentGeneration[y].length; x++) {
            const nbAliveNeighbours = countAliveCellsAround(x, y, currentGeneration);
            const currentCellState = currentGeneration[y][x];
            let nextCellState = currentCellState
                    ? nbAliveNeighbours >= 2 && nbAliveNeighbours <= 3
                    : nbAliveNeighbours === 3;
            nextCellRow.push(nextCellState);
        }
        nextGeneration.push(nextCellRow);
    }
    return nextGeneration;
}

function countAliveCellsAround(x, y, generation) {
    const neighbours = getNeighbourCells(x, y, generation);
    return neighbours.reduce((aliveCounter, isAlive) => isAlive ? aliveCounter + 1 : aliveCounter, 0);
}

function getNeighbourCells(x, y, generation) {
    const neighbours = [];
    if (generation[y-1]) {
        neighbours.push(generation[y-1][x-1]);
        neighbours.push(generation[y-1][x]);
        neighbours.push(generation[y-1][x+1]);
    }
    neighbours.push(generation[y][x-1]);
    neighbours.push(generation[y][x+1]);
    if (generation[y+1]) {
        neighbours.push(generation[y+1][x-1]);
        neighbours.push(generation[y+1][x]);
        neighbours.push(generation[y+1][x+1]);
    }
    return neighbours.filter(v => !!v);
}
