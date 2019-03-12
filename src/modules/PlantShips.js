import plantHorizontalShip from './HorizontalShip'
import plantVerticalShip from './VerticalShip'

const logPositions = true
let boardCoordinates = []
let shipPositions = []

if (logPositions) {
    console.log('Generating positions now:')
}

function plantShips(board, width) {

    generateBoardCoordinates(board, width)

    plantHorizontalShip(boardCoordinates, shipPositions, 5)
    plantHorizontalShip(boardCoordinates, shipPositions, 4)
    plantHorizontalShip(boardCoordinates, shipPositions, 3)
    plantHorizontalShip(boardCoordinates, shipPositions, 3)
    plantVerticalShip(boardCoordinates, shipPositions, 2)

    if (logPositions) {
        console.log('All Ships:', shipPositions)
    }

    for (let i = 0; i < shipPositions.length; i++) {
        let rowIndex = shipPositions[i].charAt(0)
        let columnIndex = shipPositions[i].charAt(1)
        board[rowIndex][columnIndex].isEmpty = false
    }

}

function generateBoardCoordinates (board, numColumns) {
    board.map((item, index) => {
        for (let i = 0; i < numColumns; i++) {
            boardCoordinates.push(JSON.stringify(item[i].row) + JSON.stringify(item[i].column))
        }
    })
}

export default plantShips