import React, { Component } from 'react'
import Cell from './Cell'

class Board extends Component {

    render() {
        return (
        <div className="boardContainer" style={{display: 'inline-block'}}>
            {this.props.boardArray.map(Row)}
        </div>
        )
    }
}

const Row = (cells, rowIndex) => {
  return (
    <div key={rowIndex} id="row" style={{display: 'flex'}}>
        {cells.map((itm, idx) => 
            <Cell key={idx}
                cellIndex={idx}
                rowIndex={rowIndex}
                isEmpty={itm.isEmpty}
                isClicked={itm.isClicked}/>
        )}
    </div>
  )
}

export default Board