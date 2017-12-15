import React from 'react';
import { FormattedMessage } from 'react-intl';
import './SidebarBlock.less';

const GetBoost = () =>
  (<div className="SidebarBlock">
    <h3 className="SidebarBlock__title">
      <FormattedMessage id="get_smoke_boost" defaultMessage="Get a Smoke boost!" />
    </h3>
    <p>
      <FormattedMessage id="get__smoke_boost_content" defaultMessage='Want to boost your post? Add the #tag, "smokenetwork" and get a upvote from us.' />
    </p>
  </div>);

export default GetBoost;
