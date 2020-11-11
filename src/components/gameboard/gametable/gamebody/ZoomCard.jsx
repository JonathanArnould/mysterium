import React from 'react';
import PropTypes from 'prop-types';
import '../../../../styles/css/component/ZoomCard.css';

const ZoomCard = ({ className, content }) => {
  return <div className={`zoomcard ${className}`}>{content}</div>;
};

ZoomCard.defaultProps = {
  className: null,
  content: null,
};

ZoomCard.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
};

export default ZoomCard;
