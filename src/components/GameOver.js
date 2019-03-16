import React, { Component } from 'react'
import Modal from 'react-awesome-modal';

class GameOver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div style={{alignSelf: 'center'}}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 style={{fontSize: '25px'}}>You sank my battleship!!!</h1>
                        <br></br>
                        <br></br>
                        <a class="button is-link" href="localhost:3000" onClick={() => this.closeModal()}>Close</a>

                    </div>
                </Modal>
            </section>
        );
    }
}

export default GameOver