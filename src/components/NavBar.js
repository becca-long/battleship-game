import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src='/images/battleship-logo.png' alt="Battleship" width="112" height="28"/>
                    </a>

{/* 
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a> */}
                </div>
            </nav>
        </div>
    )
  }
}

export default NavBar