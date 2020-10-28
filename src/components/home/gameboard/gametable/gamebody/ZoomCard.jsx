import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../style/css/ZoomCard.css';

const ZoomCard = ({ className }) => {
  return (
    <div className={`zoomcard ${className}`}>
      <div> Zoom Card </div>
    </div>
  );
};
ZoomCard.propTypes = { className: PropTypes.string.isRequired };

export default ZoomCard;
