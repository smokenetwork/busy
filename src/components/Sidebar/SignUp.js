import React from 'react';
import { FormattedMessage } from 'react-intl';
import './SidebarBlock.less';
import ModalSignUp from '../Modal/ModalSignUp'

const SignUp = () =>
  (<div className="SidebarBlock">
    <h3 className="SidebarBlock__title">
      <FormattedMessage id="new_to_smoke" defaultMessage="New to SmokeNetwork?" />
    </h3>
    <div>
      <i className="iconfont icon-group InterestingPeople__icon" />
      
      Test
    </div>
    
    <ModalSignUp />
      
  </div>);

export default SignUp;
