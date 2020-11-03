import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component that displays an image for the Win and Lose components
 */
const Card = ({ className, image }) => {
  return (
    <div className={className}>
      <img src={image} alt={className} />
    </div>
  );
};

Card.defaultProps = {
  className: undefined,
  image: undefined,
};

Card.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
