let logTests = false

function checkForOverlapHorizontal (possibleBoardCoords, indexOfFirstShipCell, shipLength) {
    let coordsToTest = []
    let indexesOfCoords = []

    indexesOfCoords.push(indexOfFirstShipCell)

    let firstShipCell = possibleBoardCoords[indexOfFirstShipCell]

    coordsToTest.push(firstShipCell)

    for (let i = 1; i < shipLength; i++) {
        let nextShipCell = firstShipCell.charAt(0) + (Number(firstShipCell.charAt(1)) + i)
        coordsToTest.push(nextShipCell)

        let nextShipCellIndex = possibleBoardCoords.indexOf(nextShipCell)
        indexesOfCoords.push(nextShipCellIndex)
    }

    if (logTests) {
        console.log('Coordinates Tested:', coordsToTest)
        console.log('Did Test Fail:', indexesOfCoords.some(x => x < 0)) 
    }   

    if (indexesOfCoords.some(x => x < 0)) {
        return true
    } else {
        return false
    }
}

export default checkForOverlapHorizontal