import checkForOverlapHorizontal from '../tests/HorizontalShip.test'

const logHorizontalShipPosition = false

function plantHorizontalShip (boardCoordinates, shipPositions, shipLength) {

// Randomly Choose First Coordinate for Ship  

    let randomFirstIndex = ''
    do {
        randomFirstIndex = Math.floor(Math.random()*boardCoordinates.length)
    } 
    while ((boardCoordinates[randomFirstIndex].charAt(1) > (10 - shipLength)) || (checkForOverlapHorizontal(boardCoordinates, randomFirstIndex, shipLength) === true))

// Choose Cells Ship Will Occupy
    
    let firstShipCell = boardCoordinates[randomFirstIndex]
    shipPositions.push(firstShipCell)

    for (let i = 1; i < shipLength; i++) {
        let nextShipCell = firstShipCell.charAt(0) + (Number(firstShipCell.charAt(1)) + i)
        shipPositions.push(nextShipCell)
    }

// Remove the Coordinates of the Ship's Cells from the List of Possibilities

    if (logHorizontalShipPosition) {
        console.log('Next Horizontal Ship:')
    }

    for (let i = (shipPositions.length - 1); i >= (shipPositions.length - shipLength); i--) {

        if (logHorizontalShipPosition) {
            console.log(shipPositions[i])
        }

        boardCoordinates.splice(boardCoordinates.indexOf(shipPositions[i]), 1)
    }

 

}

export default plantHorizontalShip