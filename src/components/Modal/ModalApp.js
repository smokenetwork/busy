import React, { Component } from 'react';
import Modal from './Modal';

class ModalApp extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>
          Learn More
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          `some content here`
        </Modal>
      </div>
    );
  }
}

export default ModalApp;
