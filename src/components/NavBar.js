import React, { Component } from 'react'

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
            </nav>
        </div>
    )
  }
}

export default NavBar