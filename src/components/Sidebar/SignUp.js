import React from 'react';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './SidebarBlock.less';
import Modal from '../Modal/Modal';

class SignUp extends Component {
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
      <div className="App">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <div className="SidebarBlock">
            <h3 className="SidebarBlock__title">
               <FormattedMessage id="new_to_smoke" defaultMessage="New to SmokeNetwork?" />
            </h3>
            <a target="_blank" rel="noopener noreferrer" href="https://steemit.com/pick_account">
              <button className="SidebarBlock__button">
               <FormattedMessage id="signup" defaultMessage="Sign up" />
              </button>
            </a>
          </div>
        </Modal>
      </div>
    );
  }
}


export default SignUp;
