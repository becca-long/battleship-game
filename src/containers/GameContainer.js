import React, { Component } from 'react'
import {connect} from 'react-redux'
import Board from '../components/Board'
import NavBar from '../components/NavBar'

class GameContainer extends Component {
    constructor(props) {
      super(props)

      this.props.init()

      this.state = {

      }
    }
  
    render() {
        return (
        <div className='game'>
            <NavBar />
            <Board boardArray={this.props.board} />
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})

const mapDispatchToProps = (dispatch) => ({
    init: () => dispatch({type: 'INIT_BOARD', height: 10, width: 10})
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)