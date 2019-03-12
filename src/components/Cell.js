import React from 'react'
import {connect} from 'react-redux'

const Cell = ({cellIndex, handleCellClick, rowIndex, isEmpty, isClicked}) => {

  return (
    <div key={cellIndex} 
         id="cell" 
         style={{border: '1px solid #00F7F7', height: '50px', width: '50px'}}
         onClick={() => handleCellClick(cellIndex, rowIndex)}>
        <h5 style={{color: '#00F7F7'}}>{(isClicked && isEmpty) ? 'Miss!' : (isClicked === true && isEmpty === false) ? 'Hit!' : ''}</h5>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    handleCellClick: (cellIndex, rowIndex) => dispatch({type: 'CELL_IS_CLICKED', cellIndex: cellIndex, rowIndex: rowIndex})
})

export default connect(null, mapDispatchToProps)(Cell)
