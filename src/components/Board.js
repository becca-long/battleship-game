import React, { Component } from 'react'
import Cell from './Cell'

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


class Board extends Component {

    render() {
        return (
        <div className="container">
            {this.props.boardArray.map(Row)}
        </div>
        )
    }
}

export default Board