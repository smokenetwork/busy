import React from 'react';
import { FormattedMessage } from 'react-intl';
import './SidebarBlock.less';
import ModalSignUp from '../Modal/ModalSignUp'

const SignUp = () =>
  (<div className="SidebarBlock">
    <h3 className="SidebarBlock__title">
      <FormattedMessage id="new_to_smoke" defaultMessage="New to Smoke.Network?" />
    </h3>
    <div className="Step1">
      <i className="iconfont icon-success_fill SidebarBlock__steps" />
      <FormattedMessage id="step_1" defaultMessage="Sign up to Steem" />
    </div>
    <div className="Step2">
      <i className="iconfont icon-success_fill SidebarBlock__steps" />
      <FormattedMessage id="step_2" defaultMessage="Wait for confirmation" />
    </div>
    <div className="Step3">
      <i className="iconfont icon-success_fill SidebarBlock__steps" />
      <FormattedMessage id="step_3" defaultMessage="Grab your posting key" />
    </div>
    <div className="Step4">
      <i className="iconfont icon-success_fill SidebarBlock__steps" />
      <FormattedMessage id="step_4" defaultMessage="Login to Smoke.Network" />
    </div>
    
    <ModalSignUp />
      
  </div>);

export default SignUp;
