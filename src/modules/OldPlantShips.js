//FOR REFERENCE ONLY. OLD CODE.
const logPositions = true
const numShips = 7
let shipPositions = []

function plantShips(board, height) {

    if (logPositions) {
        console.log('Generating positions now:')
    }

    for (let i = 0; i < numShips; i++) {

        let randomRowIndex = Math.floor(Math.random() * Math.floor(height))
        let randomCellIndex = Math.floor(Math.random() * Math.floor(height))

        shipPositions.push({
            xCoord: randomCellIndex,
            yCoord: randomRowIndex
        })

        board[randomRowIndex][randomCellIndex].isEmpty = false
    }
            
    if (logPositions) {
        console.log(shipPositions)
    }
       
}

export default plantShips