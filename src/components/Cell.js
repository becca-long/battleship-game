import React from 'react'
import {connect} from 'react-redux'

const Cell = ({cellIndex, handleCellClick, rowIndex, isEmpty, isClicked}) => {

  return (
    <div key={cellIndex} 
         id="cell" 
         style={{border: '1px solid black', height: '50px', width: '50px'}}
         onClick={() => handleCellClick(cellIndex, rowIndex)}>
        <h5>{isClicked && isEmpty ? 'Miss!' : ''}</h5>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    handleCellClick: (cellIndex, rowIndex) => dispatch({type: 'CELL_IS_CLICKED', cellIndex: cellIndex, rowIndex: rowIndex})
})

export default connect(null, mapDispatchToProps)(Cell)
