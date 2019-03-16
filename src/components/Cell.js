import React from 'react'
import {connect} from 'react-redux'

const Cell = ({cellIndex, handleCellClick, rowIndex, isEmpty, isClicked}) => {

  const hit = (isClicked === true && isEmpty === false)
  
  return (
    <div key={cellIndex} 
         id="cell" 
         style={{border: '1px solid #00F7F7', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
         onClick={() => handleCellClick(cellIndex, rowIndex, isEmpty, isClicked)}>

        <h5 style={{color: '#00F7F7'}}>
          {(isClicked && isEmpty) ? <span className="dot" id="miss"></span> : hit ? <span className="dot" id="hit"></span> : ''}
        </h5>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    handleCellClick: (cellIndex, rowIndex, isEmpty, isClicked) => dispatch({type: 'CELL_IS_CLICKED', cellIndex: cellIndex, rowIndex: rowIndex, isEmpty: isEmpty, isClicked: isClicked})
})

export default connect(null, mapDispatchToProps)(Cell)
