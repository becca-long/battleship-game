import React, { Component } from 'react'
import {connect} from 'react-redux'

class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="localhost:3000">
                        <img src='/images/battleship-logo.png' alt="Battleship" width="112" height="28"/>
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-info is-inverted is-outlined" onClick={() => this.props.refresh()}>
                                Restart
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    refresh: () => dispatch({type: 'REFRESH_BOARD', height: 10, width: 10})
})

export default connect(null, mapDispatchToProps)(NavBar)