function checkForHit (board, row, cell, isEmpty, isClicked) {    
    if (board[row][cell].isClicked === true && board[row][cell].isEmpty === false) {
        return true
    } else {
        return false
    }
}

export default checkForHit