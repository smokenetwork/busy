import React from 'react';
import { FormattedMessage } from 'react-intl';
import './SidebarBlock.less';
import ModalSignUp from '../Modal/ModalSignUp'

const SignUp = () =>
  (<div className="SidebarBlock">
    <h3 className="SidebarBlock__title">
      <FormattedMessage id="new_to_smoke" defaultMessage="New to SmokeNetwork?" />
    </h3>
    <ModalSignUp className="SidebarBlock__button" />
      
  </div>);

export default SignUp;
