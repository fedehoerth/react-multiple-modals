import React, { Component } from 'react';
import Modal from '../Modal';
import logo from './logo.svg';

import { display, modals } from '../../constants';

import './styles.css';

class App extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      modals: {
        [modals.MODAL_1]: {
          display: display.none,
        },
        [modals.MODAL_2]: {
          display: display.none,
        },
        [modals.MODAL_3]: {
          display: display.none,
        },
      },
    };
  }

  handleShowModal = modal => () => {
    this.setState((currentState) => {
      const newState = {
        ...currentState,
        modals: {
          ...currentState.modals,
          [modal]: {
            display: display.block,
          },
        }
      };

      return newState;
    });
  }

  handleCloseModal = modal => () => {
    this.setState((currentState) => {
      const newState = {
        ...currentState,
        modals: {
          ...currentState.modals,
          [modal]: {
            display: display.none,
          },
        }
      };

      return newState;
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <button className="button" onClick={this.handleShowModal(modals.MODAL_1)}>Show modal 1</button>
          <button className="button" onClick={this.handleShowModal(modals.MODAL_2)}>Show modal 2</button>
          <button className="button" onClick={this.handleShowModal(modals.MODAL_3)}>Show modal 3</button>

          <Modal onClose={this.handleCloseModal(modals.MODAL_1)} display={this.state.modals[modals.MODAL_1].display}>
            <h1>This is the modal 1 content.</h1>
          </Modal>
          <Modal onClose={this.handleCloseModal(modals.MODAL_2)} display={this.state.modals[modals.MODAL_2].display}>
            <h1>This is the modal 2 content.</h1>
          </Modal>
          <Modal onClose={this.handleCloseModal(modals.MODAL_3)} display={this.state.modals[modals.MODAL_3].display}>
            <h1>This is the modal 3 content.</h1>
          </Modal>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
