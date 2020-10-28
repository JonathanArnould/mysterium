import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/css/Help.css';

function Help(props) {
  const { show } = props;
  if (!show) {
    return null;
  }
  return (
    <div className="help-modal">
      <h1>Mysterium Rules</h1>
      <div>Help Me!</div>
    </div>
  );
}

Help.propTypes = {
  show: PropTypes.bool.isRequired,
};
export default Help;
