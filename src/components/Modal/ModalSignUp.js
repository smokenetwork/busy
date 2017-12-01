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
        <button onClick={this.toggleModal} className="Modal__button">
          Learn More
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
            <div>
              <h3>Welcome to Smoke.Network Alpha</h3>
              <p>Smoke.Network Alpha runs on Steem blockchain allowing our authors to earn real cryptocurrency that can be traded for bitcoin and other altcoins.</p>
              <p>Due to the nature of the steem blockchain you must first sign up for an account on Steemit.com, the official application of the Steem blockchain.
                 <br />
                 Once you have a Steem account you can sign in here and enjoy all the benefits Smoke.Network has to provide such as a vibrant community of stoners, a boosting bot that upvotes any posts posted from out platform using the #smokenetwork tag.</p> 
            </div>
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
