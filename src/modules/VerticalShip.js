import checkForOverlapVertical from "../tests/VerticalShip.test";

const logVerticalShipPositions = false

function plantVerticalShip (boardCoordinates, shipPositions, shipLength) {

// Randomly Choose First Coordinate for Ship  

    let randomFirstIndex = ''
    do {
        randomFirstIndex = Math.floor(Math.random()*boardCoordinates.length)
    } 
    while ((boardCoordinates[randomFirstIndex].charAt(0) > (10 - shipLength)) || (checkForOverlapVertical(boardCoordinates, randomFirstIndex, shipLength) === true))

// Choose Cells Ship Will Occupy

    let firstShipCell = boardCoordinates[randomFirstIndex]
    shipPositions.push(firstShipCell)

    for (let i = 1; i < shipLength; i++) {
        let nextShipCell = (Number(firstShipCell.charAt(0)) + i) + firstShipCell.charAt(1) 
        shipPositions.push(nextShipCell)
    }

// Remove the Coordinates of the Ship's Cells from the List of Possibilities

    if (logVerticalShipPositions) {
        console.log('Next Vertical Ship:')
    }

    for (let i = (shipPositions.length - 1); i >= (shipPositions.length - shipLength); i--) {

        if (logVerticalShipPositions) {
            console.log(shipPositions[i])
        }

        boardCoordinates.splice(boardCoordinates.indexOf(shipPositions[i]), 1)
    }
}

export default plantVerticalShip