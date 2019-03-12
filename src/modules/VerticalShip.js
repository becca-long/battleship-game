const logVerticalShipPositions = true

function plantVerticalShip (boardCoordinates, shipPositions, shipLength) {
    let randomFirstIndex = ''
    do {
        randomFirstIndex = Math.floor(Math.random()*boardCoordinates.length)
    } 
    while (boardCoordinates[randomFirstIndex].charAt(0) > (10 - shipLength))

    let firstShipCell = boardCoordinates[randomFirstIndex]
    shipPositions.push(firstShipCell)

    for (let i = 1; i < shipLength; i++) {
        let nextShipCell = (Number(firstShipCell.charAt(0)) + i) + firstShipCell.charAt(1) 
        shipPositions.push(nextShipCell)
    }

    if (logVerticalShipPositions) {
        console.log('Next Ship:')
    }

    for (let i = (shipPositions.length - 1); i >= (shipPositions.length - shipLength); i--) {

        if (logVerticalShipPositions) {
            console.log(shipPositions[i])
        }

        boardCoordinates.splice(boardCoordinates.indexOf(shipPositions[i]), 1)
    }
}

export default plantVerticalShip