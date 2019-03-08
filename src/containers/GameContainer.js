import React, { Component } from 'react'
import {connect} from 'react-redux'
import Board from '../components/Board'

class GameContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {

      }
    }

    
    render() {
        return (
        <div className='game'>
            <Board boardArray={this.props.board} />
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})

export default connect(mapStateToProps)(GameContainer)