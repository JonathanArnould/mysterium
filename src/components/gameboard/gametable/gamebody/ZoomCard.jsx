import React from 'react';
import PropTypes from 'prop-types';
import '../../../../styles/css/component/ZoomCard.css';

const ZoomCard = ({ className, content }) => {
  return <div className={`zoomcard ${className}`}>{content}</div>;
};
ZoomCard.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ZoomCard;
