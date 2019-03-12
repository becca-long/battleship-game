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

    randomShipOrientation(boardCoordinates, shipPositions, 5)
    randomShipOrientation(boardCoordinates, shipPositions, 4)
    randomShipOrientation(boardCoordinates, shipPositions, 3)
    randomShipOrientation(boardCoordinates, shipPositions, 3)
    randomShipOrientation(boardCoordinates, shipPositions, 2)

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

function randomShipOrientation(boardCoordinates, shipPositions, shipLength) {
    let functionArray = [plantHorizontalShip, plantVerticalShip]
    var randomFunc = functionArray[Math.floor(Math.random() * functionArray.length)];
    (randomFunc)(boardCoordinates, shipPositions, shipLength);
}

export default plantShips