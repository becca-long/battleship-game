const logPositions = true
let boardCoordinates = []
let shipPositions = []

if (logPositions) {
    console.log('Generating positions now:')
}

function plantShips(board, width) {

    generateBoardCoordinates(board, width)
    plantShipOne()
    plantShipTwo()
    plantShipThree()
    plantShipFour()
    plantShipFive()
    console.log('All Ships:', shipPositions)
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

function plantShipOne () {
    let randomFirstIndex = ''
    do {
        randomFirstIndex = Math.floor(Math.random()*boardCoordinates.length)
    } 
    while (boardCoordinates[randomFirstIndex].charAt(1) > 5)

    let firstShipCell = boardCoordinates[randomFirstIndex]
    let secondShipCell = firstShipCell.charAt(0) + (Number(firstShipCell.charAt(1)) + 1)
    let thirdShipCell = secondShipCell.charAt(0) + (Number(secondShipCell.charAt(1)) + 1)
    let fourthShipCell = thirdShipCell.charAt(0) + (Number(thirdShipCell.charAt(1)) + 1)
    let fifthShipCell = fourthShipCell.charAt(0) + (Number(fourthShipCell.charAt(1)) + 1)

    shipPositions.push(firstShipCell, secondShipCell, thirdShipCell, fourthShipCell, fifthShipCell)

    if (logPositions) {
        console.log('Ship One:')
    }

    for (let i = (shipPositions.length - 1); i >= 0; i--) {

        if (logPositions) {
            console.log(boardCoordinates.indexOf(shipPositions[i]))
        }

        boardCoordinates.splice(boardCoordinates.indexOf(shipPositions[i]), 1)
    }
}

function plantShipTwo () {
    let randomFirstIndex = ''
    do {
        randomFirstIndex = Math.floor(Math.random()*boardCoordinates.length)
    }
    while (boardCoordinates[randomFirstIndex].charAt(1) > 6)

    let firstShipCell = boardCoordinates[randomFirstIndex]
    let secondShipCell = firstShipCell.charAt(0) + (Number(firstShipCell.charAt(1)) + 1)
    let thirdShipCell = secondShipCell.charAt(0) + (Number(secondShipCell.charAt(1)) + 1)
    let fourthShipCell = thirdShipCell.charAt(0) + (Number(thirdShipCell.charAt(1)) + 1)

    shipPositions.push(firstShipCell, secondShipCell, thirdShipCell, fourthShipCell)

    if (logPositions) {
        console.log('Ship Two:')
    }

    for (let i = (shipPositions.length - 1); i >= 5; i--) {

        if (logPositions) {
            console.log(boardCoordinates.indexOf(shipPositions[i]))
        }

        boardCoordinates.splice(boardCoordinates.indexOf(shipPositions[i]), 1)
    }
}

function plantShipThree () {
    let randomFirstIndex = ''
    do {
        randomFirstIndex = Math.floor(Math.random()*boardCoordinates.length)
    }
    while (boardCoordinates[randomFirstIndex].charAt(1) > 7)

    let firstShipCell = boardCoordinates[randomFirstIndex]
    let secondShipCell = firstShipCell.charAt(0) + (Number(firstShipCell.charAt(1)) + 1)
    let thirdShipCell = secondShipCell.charAt(0) + (Number(secondShipCell.charAt(1)) + 1)

    shipPositions.push(firstShipCell, secondShipCell, thirdShipCell)

    if (logPositions) {
        console.log('Ship Three:')
    }

    for (let i = (shipPositions.length - 1); i >= 9; i--) {

        if (logPositions) {
            console.log(boardCoordinates.indexOf(shipPositions[i]))
        }

        boardCoordinates.splice(boardCoordinates.indexOf(shipPositions[i]), 1)
    }
}

function plantShipFour () {
    let randomFirstIndex = ''
    do {
        randomFirstIndex = Math.floor(Math.random()*boardCoordinates.length)
    }
    while (boardCoordinates[randomFirstIndex].charAt(1) > 7)

    let firstShipCell = boardCoordinates[randomFirstIndex]
    let secondShipCell = firstShipCell.charAt(0) + (Number(firstShipCell.charAt(1)) + 1)
    let thirdShipCell = secondShipCell.charAt(0) + (Number(secondShipCell.charAt(1)) + 1)

    shipPositions.push(firstShipCell, secondShipCell, thirdShipCell)

    if (logPositions) {
        console.log('Ship Four:')
    }

    for (let i = (shipPositions.length - 1); i >= 12; i--) {

        if (logPositions) {
            console.log(boardCoordinates.indexOf(shipPositions[i]))
        }

        boardCoordinates.splice(boardCoordinates.indexOf(shipPositions[i]), 1)
    }
      
}

function plantShipFive () {
    let randomFirstIndex = ''
    do {
        randomFirstIndex = Math.floor(Math.random()*boardCoordinates.length)
    }
    while (boardCoordinates[randomFirstIndex].charAt(1) > 8)

    let firstShipCell = boardCoordinates[randomFirstIndex]
    let secondShipCell = firstShipCell.charAt(0) + (Number(firstShipCell.charAt(1)) + 1)

    shipPositions.push(firstShipCell, secondShipCell)

    if (logPositions) {
        console.log('Ship Five:')
    }

    for (let i = (shipPositions.length - 1); i >= 15; i--) {

        if (logPositions) {
            console.log(boardCoordinates.indexOf(shipPositions[i]))
        }

        boardCoordinates.splice(boardCoordinates.indexOf(shipPositions[i]), 1)
    }
      
}

export default plantShips