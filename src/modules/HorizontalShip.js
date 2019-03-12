const logHorizontalShipPosition = true

function plantHorizontalShip (boardCoordinates, shipPositions, shipLength) {
    let randomFirstIndex = ''
    do {
        randomFirstIndex = Math.floor(Math.random()*boardCoordinates.length)
    } 
    while (boardCoordinates[randomFirstIndex].charAt(1) > (10 - shipLength))

    let firstShipCell = boardCoordinates[randomFirstIndex]
    shipPositions.push(firstShipCell)

    for (let i = 1; i < shipLength; i++) {
        let nextShipCell = firstShipCell.charAt(0) + (Number(firstShipCell.charAt(1)) + i)
        shipPositions.push(nextShipCell)
    }

    if (logHorizontalShipPosition) {
        console.log('Next Ship:')
    }

    for (let i = (shipPositions.length - 1); i >= (shipPositions.length - shipLength); i--) {

        if (logHorizontalShipPosition) {
            console.log(shipPositions[i])
        }

        boardCoordinates.splice(boardCoordinates.indexOf(shipPositions[i]), 1)
    }
}

export default plantHorizontalShip