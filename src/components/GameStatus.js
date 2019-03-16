import React from 'react'
import {connect} from 'react-redux'
import GameOver from './GameOver'


const GameStatus = ({hits, clicks, ships}) => {

    let hitsRemain = (ships - hits)

    if (hits === ships) {
       return <GameOver />
    } else {
        return (
            <div className="gameStatus">
                <h1>Hits: {hits}</h1>
                <h2>Hits Remaining: {hitsRemain}</h2>
                <h2>Total Attempts: {clicks}</h2>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    gameOver: (cellIndex, rowIndex, isEmpty, isClicked) => dispatch({type: 'CELL_IS_CLICKED', cellIndex: cellIndex, rowIndex: rowIndex, isEmpty: isEmpty, isClicked: isClicked})
})


export default connect(null, mapDispatchToProps)(GameStatus)
