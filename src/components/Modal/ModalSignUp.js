import React, { Component } from 'react';
import Modal from './Modal';
import { FormattedMessage } from 'react-intl';
import './ModalSignUp.less';

class ModalSignUp extends Component {
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
            <a target="_blank" rel="noopener noreferrer" href="https://steemit.com/pick_account">
              <button className="Modal__button">
                <FormattedMessage id="signup" defaultMessage="Sign up" />
              </button>
            </a>
        </Modal>
      </div>
    );
  }
}

export default ModalSignUp;
