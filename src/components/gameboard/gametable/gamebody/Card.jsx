import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card, className, id, classNameImage, handleClick }) => {
  return (
    <div className={className} id={id}>
      {/* eslint-disable */}
      <img
        className={classNameImage}
        src={card.image}
        alt={card.name}
        onClick={handleClick}
        aria-hidden="true"
      />
    </div>
  );
};

Card.defaultProps = {
  card: {},
  className: null,
  id: null,
  classNameImage: null,
  handleClick: null,
};

Card.propTypes = {
  card: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  classNameImage: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Card;
