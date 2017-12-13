import React from 'react';
import PropTypes from 'prop-types';

import Topics from '../../components/Sidebar/Topics';
import Sidenav from '../../components/Navigation/Sidenav';

const Navigation = ({ trendingTopicsLoading, trendingTopics }) => (
  <div>
    <Sidenav />
    <Topics loading={trendingTopicsLoading} topics={trendingTopics} />
  </div>
);

Navigation.propTypes = {
  trendingTopicsLoading: PropTypes.bool.isRequired,
  trendingTopics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Navigation.defaultProps = {
  trendingTopicsLoading: false,
  trendingTopics: [
    'smokenetwork',
    'cannabis',
    'marijuana',
    'medicalcannabis',
    'cannabisnews',
    'smoke',
    'vape',
    'edibles',
    'legalize',
  ],
};

export default Navigation;
