import React from 'react';
import { FormattedMessage } from 'react-intl';
import './SidebarBlock.less';
import ModalApp from '../Modal/ModalApp'

const SignUp = () =>
  (<div className="SidebarBlock">
    <h3 className="SidebarBlock__title">
      <FormattedMessage id="new_to_smoke" defaultMessage="New to SmokeNetwork?" />
    </h3>
    <ModalApp />
      <a target="_blank" rel="noopener noreferrer" href="https://steemit.com/pick_account">
        <button className="SidebarBlock__button">
          <FormattedMessage id="signup" defaultMessage="Sign up" />
        </button>
      </a>
  </div>);

export default SignUp;
